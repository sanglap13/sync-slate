"use client";

import React from "react";
import { TCanvasProps } from "@/@types/components/TSlateId";
import Info from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";

const Canvas: React.FC<TCanvasProps> = ({ slateId }) => {
  return (
    <main className="h-full w-full relative bg-neutral-100 touch-none">
      <Info slateId={slateId} />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
