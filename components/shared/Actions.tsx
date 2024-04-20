"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Actions: React.FC<ActionsProps> = ({
  children,
  side,
  sideOffset,
  id,
  title,
}) => {
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/slate/${id}`)
      .then(() => {
        toast.success("Link copied to clipboard");
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => e.stopPropagation()}
        side={side}
        sideOffset={sideOffset}
        className="w-60"
      >
        <DropdownMenuItem
          onClick={handleCopyLink}
          className="p-3 cursor-pointer"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy Slate Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
