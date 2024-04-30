import { LucideIcon } from "lucide-react";
import { CanvasState } from "./TCanvas";

export interface ISlateIdPageProps {
  params: { slateId: string };
}

export interface TCanvasProps {
  slateId: string;
}

export interface InfoProps extends TCanvasProps {}

export interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

// ===================== ToolButton=====================
export interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}

// ===================== ToolBar=====================
export interface ToolBarProps {
  canvasState: CanvasState;
  setCanvasState: (state: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}
