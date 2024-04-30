"use client";

import React from "react";
import { RoomProvider } from "@/liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { IRoomProps } from "@/@types/components/TRoom";

const Room: React.FC<IRoomProps> = ({
  children,
  roomId,
  fallback,
}): JSX.Element => {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
};

export default Room;
