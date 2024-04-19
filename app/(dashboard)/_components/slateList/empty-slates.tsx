"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import React, { use } from "react";
import { toast } from "sonner";

const EmptySlates: React.FC = () => {
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.slate.create);

  const handleCreateClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled Slate",
    })
      .then((id) => {
        toast.success("Slate created successfully"); //TODO: redirect to slate/id
      })
      .catch(() => {
        toast.error("Failed to create slate");
      });
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/images/EmptySlates.png"
        alt="Empty"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">Create your first Slate!</h2>
      <p className="text-muted-foreground mt-2 textg-sm">
        Start by creating a slate for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={handleCreateClick} size={"lg"}>
          Create Slate
        </Button>
      </div>
    </div>
  );
};

export default EmptySlates;
