import { defineSchema, defineTable } from "convex/server";
import { BoardsTable } from "./tables/boards";
import { UserFavoriteTable } from "./tables/userFavorite";

export default defineSchema({
  boards: BoardsTable,
  userFavorites: UserFavoriteTable,
});
