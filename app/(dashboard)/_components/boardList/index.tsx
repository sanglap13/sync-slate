"use client";

import { BoardListProps } from "@/@types/components/TBoardList";
import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favourites";
import EmptySlates from "./empty-slates";

const BoardList: React.FC<BoardListProps> = ({ orgId, query }) => {
  const data = []; // TODO: fetch data from api call

  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favourites) return <EmptyFavourites />;

  if (!data?.length) return <EmptySlates />;

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
