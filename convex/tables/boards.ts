import { defineTable, TableDefinition } from "convex/server";
import { v } from "convex/values";

export const BoardsTable: TableDefinition = defineTable({
  title: v.string(),
  orgId: v.string(),
  authorId: v.string(),
  authorName: v.string(),
  imageUrl: v.string(),
})
  .index("by_org", ["orgId"])
  .searchIndex("search_title", {
    searchField: "title",
    filterFields: ["orgId"],
  });
