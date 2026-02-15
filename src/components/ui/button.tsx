import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-navy-light shadow-brand hover:shadow-brand-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-gold-dark shadow-gold hover:shadow-lg hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Brand specific variants
        gold: "bg-gradient-gold text-secondary-foreground font-bold shadow-gold hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]",
        navy: "bg-gradient-to-b from-[hsl(215_60%_34%)] via-[hsl(215_78%_21%)] to-[hsl(215_85%_15%)] text-primary-foreground font-bold border-t border-t-[hsl(215_50%_45%)/0.6] border-b-2 border-b-[hsl(215_90%_8%)] shadow-[0_3px_1px_rgba(0,0,0,0.35),0_6px_12px_rgba(0,0,0,0.25),inset_0_1px_2px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_2px_rgba(0,0,0,0.4),0_8px_16px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_1px_1px_rgba(0,0,0,0.3),inset_0_2px_4px_rgba(0,0,0,0.3)]",
        "outline-gold": "border-2 border-gold bg-transparent text-gold hover:bg-gold hover:text-secondary-foreground",
        "outline-white": "border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        xl: "h-16 rounded-2xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
