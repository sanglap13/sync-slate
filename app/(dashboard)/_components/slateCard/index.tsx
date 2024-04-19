"use client";

import { SlateCardProps } from "@/@types/components/TSlateCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  return (
    <Link href={`/slate/${id}`}>
      <div
        className="group aspect-[100/127] border rounded-lg flex 
    flex-col justify-between overflow-hidden"
      >
        <div className="relative flex-1 bg-purple-50 ">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
        </div>
      </div>
    </Link>
  );
};

export default SlateCard;
