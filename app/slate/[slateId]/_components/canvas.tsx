"use client";

import React, { useCallback, useState } from "react";
import { TCanvasProps } from "@/@types/components/TSlateId";
import Info from "./info";
import { Participants } from "./participants";
import { Toolbar } from "./toolbar";
import { Camera, CanvasMode, CanvasState } from "@/@types/components/TCanvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@/liveblocks.config";
import CursorsPresence from "./cursors-presence";
import { pointerEventToCanvasPoint } from "@/lib/utils";

const Canvas: React.FC<TCanvasProps> = ({ slateId }) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    console.log({
      x: e.deltaX,
      y: e.deltaY,
    });
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );

  return (
    // <div></div>
    <main className=" h-full w-full  bg-neutral-100 touch-none">
      <Info slateId={slateId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        undo={history.undo}
        redo={history.redo}
      />
      <svg
        className="h-[100vh] w-[100vw]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
