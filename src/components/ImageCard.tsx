import Image from "next/image"
import { Card } from "./Card"
import { BackgroundUnit, TextUnit } from "@/types/tailwindColor.types"


type ImageCardType = {
  source : string
  width : number
  height : number
  alt? : string
  className ?: string

  backgroundColor ?: BackgroundUnit
  textColor ?: TextUnit

  animation ?: boolean
  title : string
  subtitle : string
}

const anim = "hover:scale-105 hover:rotate-3"

export function ImageCard({
  alt = "rygenzz Image Property",
  source,
  height,
  width,
  title,
  subtitle,
  backgroundColor,
  textColor,
  className,
  animation = false
}:ImageCardType) {
  return (
    <Card
      className={`
        ${className ?? ""}
        ${animation ? `${anim} transition-all duration-150` : ""}
        ${backgroundColor}
        rounded-xl
        p-5
        flex
        flex-col
        justify-center
        gap-2
        max-w-96
      `}
    >
      <Image
        alt={alt}
        src={source}
        width={width}
        height={height}
        className={`
          drop-shadow-2xl
          rounded-lg
        `}
      />
      <div
        className={`
          flex
          w-full
          max-w-96
        `}
      >
        <span
          className={`
            block
            max-w-full
            wrap-break-word
            whitespace-normal
            ${textColor}
            font-semibold
            font-sans
            text-lg
            drop-shadow-2xl
            mt-5
          `}
        >
          {title}
        </span>
      </div>
      <div
        className={`
          flex
          w-full
          max-w-96
        `}
      >
        <span
          className={`
            block
            max-w-full
            wrap-break-word
            whitespace-normal
            ${textColor}
            font-sans
            text-md
            drop-shadow-2xl
            -mt-2
          `}
        >
          {subtitle}
        </span>
      </div>
    </Card>
  )
}