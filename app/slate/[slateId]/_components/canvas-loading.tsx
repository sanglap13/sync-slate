import React from "react";
import { Loader } from "lucide-react";
import { SkeletonLoaders } from "./skeleton-loaders";

const CanvasLoading: React.FC = (): JSX.Element => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <SkeletonLoaders />
    </main>
  );
};

export default CanvasLoading;
