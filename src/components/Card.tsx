import { BackgroundUnit } from "@/types/tailwindColor.types"

type CardType = {
  children: React.ReactNode
  backgroundColor ? : BackgroundUnit
  className? : string
}

export function Card({
  children,
  backgroundColor,
  className
}:CardType) {
  return(
    <div
      className={`
        ${className ?? ""}
        ${backgroundColor ?? ""}
        p-3
        rounded-2xl
        drop-shadow-2xl
        w-max
        h-max
        flex
        justify-start
        items-center
      `}
    >
      {children}
    </div>
  )
}