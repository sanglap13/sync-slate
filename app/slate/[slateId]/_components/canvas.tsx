"use client";

import React from "react";
import Info from "./info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { TCanvasProps } from "@/@types/components/TBoardId";

const Canvas: React.FC<TCanvasProps> = ({ boardId }) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
