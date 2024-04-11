"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { ISidebarListItemProps } from "@/@types/components/TSidebar";
import HintTooltip from "@/components/shared/HintTooltip";

const Item: React.FC<ISidebarListItemProps> = ({ id, name, imageURL }) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const handleOnClick = useCallback(() => {
    if (!setActive) return;
    setActive({ organization: id });
  }, [id, setActive]);

  return (
    <div className="aspect-square relative">
      <HintTooltip
        label={`${name} Oraganization`}
        side="right"
        align="start"
        sideOffset={18}
      >
        <Image
          src={imageURL}
          className={cn(
            "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
            isActive && "opacity-100"
          )}
          onClick={handleOnClick}
          fill
          alt={name}
        />
      </HintTooltip>
    </div>
  );
};

export default Item;
