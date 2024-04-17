import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const EmptySlates = () => {
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
        <Button size={"lg"}>Create Slate</Button>
      </div>
    </div>
  );
};

export default EmptySlates;
