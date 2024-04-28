import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      participants
    </div>
  );
};

// Skeleton Components
Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <Skeleton className="h-full w-[50px] bg-muted-400" />
    </div>
  );
};
