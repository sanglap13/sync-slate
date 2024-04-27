"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import { Link2, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import ConfirmModal from "./ConfirmModal";
import { Button } from "../ui/button";
import { ActionsProps } from "@/@types/components/TActions";
import { useRenameModal } from "@/store/use-rename-modal";

const Actions: React.FC<ActionsProps> = ({
  children,
  side,
  sideOffset,
  id,
  title,
}) => {
  const { mutate, pending } = useApiMutation(api.slate.remove);
  const { onOpen, onClose } = useRenameModal();

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

  const handleDeleteSlate = () => {
    mutate({ id })
      .then(() => toast.success("Slate Deleted!"))
      .catch(() => toast.error("Failed to delete the slate!"));
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
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="p-3 cursor-pointer"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <ConfirmModal
          header="Delete Slate"
          description="This option will delete the slate and all of the contents."
          disabled={pending}
          onConfirm={handleDeleteSlate}
        >
          <Button
            variant="ghost"
            className="p-3 cursor-pointer text-sm w-full justify-start font-normal"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
