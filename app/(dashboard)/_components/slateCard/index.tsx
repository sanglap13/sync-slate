"use client";

import { SlateCardProps } from "@/@types/components/TSlateCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";

const SlateCard: React.FC<SlateCardProps> = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavourite,
}): JSX.Element => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });
  return (
    <Link href={`/slate/${id}`}>
      <div
        className="group aspect-[100/127]  rounded-lg flex 
    flex-col justify-between overflow-hidden"
      >
        <div className="relative flex-1 bg-purple-50 ">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};

export default SlateCard;
