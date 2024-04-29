"use client";

import React from "react";
import { TCanvasProps } from "@/@types/components/TBoardId";
import Info from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { useSelf } from "@/liveblocks.config";

const Canvas: React.FC<TCanvasProps> = ({ slateId }) => {
  const info = useSelf((me) => me.info);
  console.log(info);

  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
