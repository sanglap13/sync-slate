import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

import { THintTooltipProps } from "@/@types/components/THintToolTip";

const HintTooltip: React.FC<THintTooltipProps> = ({
  label,
  children,
  side,
  align,
  sideOffset,
  alignOffset,
}): React.ReactNode => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          className="text-white bg-black border-black"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <div className="font-semibold capitalize">{label}</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HintTooltip;
