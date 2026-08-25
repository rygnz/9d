import { BackgroundUnit, TextUnit } from "@/types/tailwindColor.types";
import { ButtonHTMLAttributes } from "react";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  className? : string,
  onClick? : () => void;
  children : React.ReactNode | string ,
  animation? : boolean,
  variant? : keyof typeof ButtonVariant
  backgroundColor : BackgroundUnit
  textColor : TextUnit
}

const ButtonVariant = {
  primary :
    "rounded-md p-2",
  bordered : 
    "rounded-md px-2 py-1 border-2",
  primaryFullRound :
    "rounded-full px-3 py-2",
  borderedFullRound : 
    "rounded-full px-2 py-1 border-2",
  none : 
    ""
}
const Animation = "hover:scale-105 active:scale-95 transition-all duration-100 ease-in-out"

/**
 * React component that reusable , but i dont think so, with variant.
 * @returns React.ReactNode
 * @example
 * <Button
      textColor="text-slate-100"
      backgroundColor="bg-transparent"
      animation={false}
      variant="none"
    >
      ... Text | ReactNode
  </Button>
 * 
 */
export function Button({
  onClick,
  className,
  children,
  backgroundColor = "bg-transparent",
  textColor = "text-slate-100",
  variant = "none",
  animation = false,
  ...props
}: ButtonInterface) {
  return (
    <button
      className={`
        font-fredoka
        ${ButtonVariant[variant]}
        ${backgroundColor}
        ${textColor}
        ${animation ? Animation : ""}
        ${className ?? ""}
        cursor-pointer
      `}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}