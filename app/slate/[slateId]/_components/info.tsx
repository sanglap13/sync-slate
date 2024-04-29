"use client";

import { InfoProps } from "@/@types/components/TSlateId";
import Actions from "@/components/shared/Actions";
import HintTooltip from "@/components/shared/HintTooltip";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { Action } from "@radix-ui/react-alert-dialog";
import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5"></div>;
};

export const Info: React.FC<InfoProps> = ({ slateId }) => {
  const { onOpen } = useRenameModal();

  const data = useQuery(api.slate.get, { id: slateId as Id<"boards"> });
  // const { _id, title } = data;

  if (!data) return <InfoSkeleton />;
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <HintTooltip label="Go to Slates" side="bottom" sideOffset={10}>
        <Button asChild variant="slate" className="px-2">
          <Link href={"/"}>
            <Image
              src="/images/logo.png"
              alt="SyncSlate logo"
              height={40}
              width={40}
            />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              SyncSlate
            </span>
          </Link>
        </Button>
      </HintTooltip>
      <TabSeparator />
      <HintTooltip label="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant={"slate"}
          className="text-base font-normal px-2"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </HintTooltip>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <HintTooltip label="More Options" side="bottom" sideOffset={10}>
            <Button size={"icon"} variant={"slate"}>
              <Menu />
            </Button>
          </HintTooltip>
        </div>
      </Actions>
    </div>
  );
};

export default Info;

// Skeleton Components
export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]">
      <Skeleton className="h-full w-full bg-muted-400" />
    </div>
  );
};
