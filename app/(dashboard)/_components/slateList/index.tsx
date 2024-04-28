"use client";

import { BoardListProps } from "@/@types/components/TSlateList";
import React from "react";
import EmptySearch from "./empty-search";
import EmptyFavourites from "./empty-favourites";
import EmptySlates from "./empty-slates";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import SlateCard from "../slateCard";
import NewSlateButton from "./new-slate-button";

const SlateList: React.FC<BoardListProps> = ({ orgId, query }) => {
  const data = useQuery(api.slates.get, { orgId, ...query });

  if (data === undefined)
    return (
      <div>
        <h2 className="text-3xl">{query.favorites ? "Favourites" : "Team Slates"}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
          <NewSlateButton orgId={orgId} disabled />
          <SlateCard.Skeleton />
          <SlateCard.Skeleton />
          <SlateCard.Skeleton />
          <SlateCard.Skeleton />
        </div>
      </div>
    );

  if (!data?.length && query.search) return <EmptySearch />;

  if (!data?.length && query.favorites) return <EmptyFavourites />;

  if (!data?.length) return <EmptySlates />;

  return (
    <div>
      <h2 className="text-3xl">{query.favorites ? "Favourites" : "Team Slates"}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
        <NewSlateButton orgId={orgId} />
        {data?.map((slate) => {
          const { _id, title, imageUrl, authorId, authorName, _creationTime, orgId, isFavorite } =
            slate;
          return (
            <SlateCard
              key={_id}
              id={_id}
              title={title}
              imageUrl={imageUrl}
              authorId={authorId}
              authorName={authorName}
              createdAt={_creationTime}
              orgId={orgId}
              isFavourite={isFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SlateList;
