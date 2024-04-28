import React from "react";
import Canvas from "./_components/canvas";
import { IBoardIdPageProps } from "@/@types/components/TBoardId";

const SlateIdPage: React.FC<IBoardIdPageProps> = ({ params }): JSX.Element => {
  const { boardId } = params;
  return <Canvas boardId={boardId} />;
};

export default SlateIdPage;
