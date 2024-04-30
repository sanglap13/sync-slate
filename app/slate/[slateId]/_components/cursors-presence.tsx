"use client";

import { useOthersConnectionIds } from "@/liveblocks.config";
import React, { memo } from "react";
import Cursor from "./cursor";

const Cursors = () => {
  const ids = useOthersConnectionIds();

  return (
    <>
      {ids.map((connectionId) => {
        <Cursor key={connectionId} connectionId={connectionId} />;
      })}
    </>
  );
};

const CursorsPresence = memo(() => {
  return (
    <>
      {/* TODO: Draft Pencil */}
      <Cursors />
    </>
  );
});

export default CursorsPresence;

CursorsPresence.displayName = "CursorsPresence";
