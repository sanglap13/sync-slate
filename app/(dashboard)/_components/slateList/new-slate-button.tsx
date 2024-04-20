"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { title } from "process";
import React from "react";
import { toast } from "sonner";

interface NewSlateButtonProps {
  orgId: string;
  disabled?: boolean;
}

const NewSlateButton: React.FC<NewSlateButtonProps> = ({ orgId, disabled }) => {
  const { mutate, pending } = useApiMutation(api.slate.create);

  const handleCreateSlateClick = () => {
    mutate({
      orgId,
      title: "Untitled Slate",
    })
      .then((id) => {
        toast.success("Slate created successfully"); //TODO: Redirect to /slate/{id}
      })
      .catch(() => {
        toast.error("Failed to create slate");
      });
  };

  return (
    <button
      disabled={pending || disabled}
      onClick={handleCreateSlateClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg flex flex-col items-center justify-center hover:bg-blue-800 py-6",
        (pending || disabled) && "opacity-75"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1 " />
      <p className="text-xs text-white font-light">New Slate</p>
    </button>
  );
};

export default NewSlateButton;
