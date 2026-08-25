import { BackgroundUnit } from "@/types/tailwindColor.types"

type PageType = {
  children?  : React.ReactNode
  backgroundColor? : BackgroundUnit
  className ?: string
  id : string
}

export function Page({
  children,
  backgroundColor = "bg-slate-100",
  className,
  id
}:PageType) {
  return (
    <div
      id={id}
      className={`
        ${className ?? ""}
        ${backgroundColor}
        md:pt-0
        flex
        flex-col
        justify-between
        items-center
        gap-10
        w-full
        min-h-[calc(100svh-57px)]
        pt-32
        px-6
        py-16
      `}
    >
      {children}      
    </div>
  )
}