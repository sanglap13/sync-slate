import Info, { InfoSkeleton } from "./info";
import { Participants, ParticipantsSkeleton } from "./participants";
import { Toolbar, ToolbarSkeleton } from "./toolbar";

export const SkeletonLoaders = () => {
  return (
    <>
      <InfoSkeleton />
      <ParticipantsSkeleton />
      <ToolbarSkeleton />
    </>
  );
};
