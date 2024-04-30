import { UserAvatarProps } from "@/@types/components/TSlateId";
import HintTooltip from "@/components/shared/HintTooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  name,
  fallback,
  borderColor,
}) => {
  return (
    <HintTooltip label={name || "Teammate"} side="bottom" sideOffset={18}>
      <Avatar className="h-8 w-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </HintTooltip>
  );
};

export default UserAvatar;
