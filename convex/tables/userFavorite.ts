import { defineTable, TableDefinition } from "convex/server";
import { v } from "convex/values";

export const UserFavoriteTable: TableDefinition = defineTable({
  orgId: v.string(),
  userId: v.string(),
  boardId: v.string(),
})
  .index("by_board", ["boardId"])
  .index("by_user_org", ["orgId"])
  .index("by_user_board", ["userId", "boardId"])
  .index("by_user_board_org", ["userId", "boardId", "orgId"]);
