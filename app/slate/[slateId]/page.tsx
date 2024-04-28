import React from "react";
import Canvas from "./_components/canvas";
import { IBoardIdPageProps } from "@/@types/components/TBoardId";
import Room from "@/components/collaboration/room";
import CanvasLoading from "./_components/canvas-loading";

const SlateIdPage: React.FC<IBoardIdPageProps> = ({ params }): JSX.Element => {
  const { slateId } = params;

  return (
    <Room roomId={slateId} fallback={<CanvasLoading />}>
      <Canvas slateId={slateId} />;
    </Room>
  );
};

export default SlateIdPage;
