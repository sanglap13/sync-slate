"use client";

import { SlateCardProps } from "@/@types/components/TSlateCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Overlay from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import Footer from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import Actions from "@/components/shared/Actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const SlateCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createdAt,
  orgId,
  isFavourite,
}: SlateCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, {
    addSuffix: true,
  });

  const { mutate: onFavorite, pending: pendingFavorite } = useApiMutation(api.slate.favorite);
  const { mutate: onUnFavorite, pending: pendingUnFavorite } = useApiMutation(api.slate.unFavorite);

  const handleToggleFavorite = () => {
    if (isFavourite)
      onUnFavorite({ id })
        .then(() => toast.success("Removed from Favorite!"))
        .catch(() => toast.error("Failed to unfavorite"));
    else
      onFavorite({ id, orgId })
        .then(() => toast.success("Added to Favorite!"))
        .catch(() => toast.error("Failed to Favorite"));
  };

  return (
    <Link href={`/slate/${id}`}>
      <div
        className="group aspect-[100/127]  rounded-lg flex 
    flex-col justify-between overflow-hidden"
      >
        <div className="relative flex-1 bg-purple-50 ">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side={"right"}>
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          isFavourite={isFavourite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={handleToggleFavorite}
          disabled={pendingFavorite || pendingUnFavorite}
        />
      </div>
    </Link>
  );
};

export default SlateCard;

SlateCard.Skeleton = function SlateCardSkeleton() {
  return (
    <div className="aspect-[100/127] rounded-lg overflow-hidden">
      <Skeleton className="h-full w-full" />
    </div>
  );
};
