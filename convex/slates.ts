import { v } from "convex/values";
import { query } from "./_generated/server";

export const get = query({
  args: {
    orgId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) throw new Error("Unauthorized");

    const slates = await ctx.db
      .query("boards")
      .withIndex("by_org", (q) => q.eq("orgId", args.orgId))
      .order("desc")
      .collect();

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
