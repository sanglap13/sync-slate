import { v } from "convex/values";
import { query } from "./_generated/server";
import { favorite } from "./slate";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const get = query({
  args: {
    orgId: v.string(),
    search: v.optional(v.string()),
    favorites: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    if (args.favorites) {
      const favoritTaggedSlates = await ctx.db
        .query("userFavorites")
        .withIndex("by_user_org", (q) => {
          return q.eq("userId", identity.subject).eq("orgId", args.orgId);
        })
        .order("desc")
        .collect();

      const favoritedSlateIds = favoritTaggedSlates.map(
        (slate) => slate.boardId
      );
      const filteredSlates = await getAllOrThrow(ctx.db, favoritedSlateIds);

      const result = filteredSlates.map((slate) => ({
        ...slate,
        isFavorite: true,
      }));

      return result;
    }

    const title = args.search as string;
    let slates: any[] = [];

    if (title) {
      slates = await ctx.db
        .query("slates")
        .withSearchIndex("search_title", (q) => {
          return q.search("title", title).eq("orgId", args.orgId);
        })
        .collect();
    } else {
      slates = await ctx.db
        .query("slates")
        .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
        .order("desc")
        .collect();
    }

    const slatesWithFavoriteRelation = slates.map((slate) => {
      return ctx.db
        .query("userFavorites")
        .withIndex("by_user_board", (q) => {
          return q.eq("userId", identity.subject).eq("boardId", slate._id);
        })
        .unique()
        .then((favorite) => {
          return { ...slate, isFavorite: !!favorite };
        });
    });

    const slatesWithFavoriteTagged = Promise.all(slatesWithFavoriteRelation);

    return slatesWithFavoriteTagged;
  },
});
