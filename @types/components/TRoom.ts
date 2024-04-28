import { ReactNode } from "react";

export interface IRoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<React.ReactNode> | null;
}
