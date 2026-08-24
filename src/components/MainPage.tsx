import { BackgroundUnit } from "@/types/tailwindColor.types"

type PageType = {
  children?  : React.ReactNode
  backgroundColor? : BackgroundUnit
  className ?: string
}

export function Page({
  children,
  backgroundColor = "bg-slate-100",
  className
}:PageType) {
  return (
    <div
      id="home"
      className={`
        ${className ?? ""}
        ${backgroundColor}
        flex
        justify-between
        items-center
        w-full
        h-[120vh]
        p-3
      `}
    >
      {children}      
    </div>
  )
}