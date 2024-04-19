"use client";

import { BoardListProps } from "@/@types/components/TBoardList";
import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favourites";
import EmptySlates from "./empty-slates";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const BoardList: React.FC<BoardListProps> = ({ orgId, query }) => {
  const data = useQuery(api.slates.get, { orgId });

  if (data === undefined) return <div>Loading...</div>;

  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favourites) return <EmptyFavourites />;

  if (!data?.length) return <EmptySlates />;

  return (
    <div>
      <h2 className="text-3xl">
        {query.favourites ? "Favourites" : "Team Slates"}
      </h2>
    </div>
  );
};

export default BoardList;
