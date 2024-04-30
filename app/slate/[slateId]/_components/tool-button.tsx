"use client";

import { ToolButtonProps } from "@/@types/components/TSlateId";
import HintTooltip from "@/components/shared/HintTooltip";
import { Button } from "@/components/ui/button";
import React from "react";

const ToolButton: React.FC<ToolButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}) => {
  return (
    <HintTooltip label={label} side="right" sideOffset={14}>
      <Button
        disabled={isDisabled}
        onClick={onClick}
        size={"icon"}
        variant={isActive ? "slateActive" : "slate"}
      >
        <Icon />
      </Button>
    </HintTooltip>
  );
};

export default ToolButton;
