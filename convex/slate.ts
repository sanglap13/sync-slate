import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

const images = [
  "/placeholders/1.png",
  "/placeholders/2.png",
  "/placeholders/3.png",
  "/placeholders/4.png",
  "/placeholders/5.png",
  "/placeholders/6.png",
  "/placeholders/7.png",
  "/placeholders/8.png",
  "/placeholders/9.png",
  "/placeholders/10.png",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const slate = await ctx.db.insert("slates", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });
    return slate;
  },
});

export const remove = mutation({
  args: { id: v.id("slates") },
  handler: async (context, args) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized!");

    const userId = identity.subject;

    const existingFavorite = await context.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) => {
        return q.eq("userId", userId).eq("boardId", args.id);
      })
      .unique();

    if (existingFavorite) await context.db.delete(existingFavorite._id);

    await context.db.delete(args.id);
  },
});

export const update = mutation({
  args: { id: v.id("slates"), title: v.string() },
  handler: async (context, args) => {
    const title = args.title.trim();
    const identity = args.title.trim();

    // Error Handlings
    if (!identity) throw new Error("Unauthorized!");
    if (!title) throw new Error("Title is required!");
    if (title.length > 60) {
      throw new Error("Title cannot be longer than 60 characters");
    }

    const slate = await context.db.patch(args.id, {
      title: args.title,
    });

    return slate;
  },
});

export const favorite = mutation({
  args: { id: v.id("slates"), orgId: v.string() },
  handler: async (context, args) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized!");

    const slate = await context.db.get(args.id);
    if (!slate) throw new Error("Slate not found!");

    const userId = identity.subject;
    const existingFavorite = await context.db
      .query("userFavorites")
      .withIndex("by_user_board", (q) => {
        return q.eq("userId", userId).eq("boardId", slate._id);
      })
      .unique();

    if (existingFavorite) throw new Error("Already addded to Favorite!");

    await context.db.insert("userFavorites", {
      userId,
      boardId: slate._id,
      orgId: args.orgId,
    });

    return slate;
  },
});

export const unFavorite = mutation({
  args: { id: v.id("slates") },
  handler: async (context, args) => {
    const identity = await context.auth.getUserIdentity();
    if (!identity) throw new Error("Unauthorized!");

    const slate = await context.db.get(args.id);
    if (!slate) throw new Error("Slate not found!");

    const userId = identity.subject;
    const existingFavorite = await context.db
      .query("userFavorites")
      .withIndex("by_user_board", (query) => {
        return query.eq("userId", userId).eq("boardId", slate._id);
      })
      .unique();

    if (!existingFavorite) throw new Error("Slate not found in the favorite!");

    await context.db.delete(existingFavorite._id);

    return slate;
  },
});

export const get = query({
  args: { id: v.id("slates") },
  handler: async (ctx, args) => {
    const slate = await ctx.db.get(args.id);

    return slate;
  },
});
