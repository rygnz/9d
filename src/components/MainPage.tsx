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
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-10
        w-full
        min-h-[calc(100svh-57px)]
        px-6
        py-16
        md:px-12
        lg:px-24
        md:py-20
      `}
    >
      {children}      
    </div>
  )
}