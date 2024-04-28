import Info from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

export const SkeletonLoaders = () => {
  return (
    <>
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </>
  );
};
