import { LucideIcon } from "lucide-react";

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

export interface ToolButtonProps {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
}
