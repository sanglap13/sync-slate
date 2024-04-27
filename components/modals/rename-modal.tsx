"use client";

import React, { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogFooter,
  DialogTitle,
} from "../ui/dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const RenameModal: React.FC = (): JSX.Element => {
  const { isOpen, onClose, initialValues } = useRenameModal();
  const { mutate, pending } = useApiMutation(api.slate.update);

  const [title, setTitle] = useState(initialValues.title);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const handleRenameSlateSubmitClick: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    mutate({ id: initialValues.id, title })
      .then(() => toast.success("Successfully slate has been renamed!"))
      .catch(() => toast.error("Failed to rename the slate!"))
      .finally(() => onClose());
  };

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Slate Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for the selected slate</DialogDescription>
        <DialogDescription>Enter a new title for the selected slate</DialogDescription>
        <form onSubmit={handleRenameSlateSubmitClick} className="space-y-4">
          <Input
            disabled={pending}
            required
            maxLength={60}
            value={title}
            onChange={handleInputChange}
            placeholder="Enter Tile for the slate"
          />
          <DialogFooter className="gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
