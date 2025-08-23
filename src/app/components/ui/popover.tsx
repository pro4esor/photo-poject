import * as React from "react"
import {
  Popover as ShadPopover,
  PopoverTrigger as ShadPopoverTrigger,
  PopoverContent as ShadPopoverContent,
} from "@/components/ui/popover"


const PopoverAnchor = React.Fragment

const Popover = ShadPopover
const PopoverTrigger = ShadPopoverTrigger

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof ShadPopoverContent>,
  React.ComponentPropsWithoutRef<typeof ShadPopoverContent>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <ShadPopoverContent
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={className}
    {...props}
  />
))
PopoverContent.displayName = "PopoverContent"

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }
