import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CustomToolTipProps } from "./CustomToolTip.types";
import { Info } from "lucide-react";

export const CustomToolTip = (props: CustomToolTipProps) => {
  const { content } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Info strokeWidth={1} className="h-5 w-5" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};