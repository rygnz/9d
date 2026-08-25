import { Link, Link2 } from "lucide-react"
import { Card } from "./Card"
import { BackgroundUnit, TextUnit } from "@/types/tailwindColor.types"
import { Tooltip } from "./Tooltip"

type PlayerCardType = {
  backgroundColor? : BackgroundUnit
  textColor? : TextUnit
  profileColor ? : BackgroundUnit
  profileSize ? : keyof typeof Size
  className ? :string

  title : string
  subtitle : string

  instagramUrl ? : `https://www.instagram.com/${string}` | `https://www.instagram.com/@${string}`
  tiktokUrl ? : `https://www.tiktok.com/${string}` | `https://www.tiktok.com/@${string}`
}

const Size = {
  default : 
    "scale-100",
  sm : 
    "scale-80",
  md : 
    "scale-90",
  lg : 
    "scale-110",
  xl :
    "scale-125",
  "2xl" :
    "scale-150"
} 

export function PlayerCard({
  className,
  backgroundColor = "bg-slate-200",
  textColor = "text-slate-900",
  profileColor = "bg-black",
  profileSize = "default",
  title,
  subtitle,
  tiktokUrl,
  instagramUrl
}: PlayerCardType) {
  return (
    <Card
      className={`
        ${className ?? ""}
        ${backgroundColor}
        ${Size[profileSize]}
        min-w-79
        max-w-96
        flex
        gap-3
      `}
    >
      <div
        className={`
          flex
          justify-center
          items-center
          gap-2
        `}
      >
        <div
          className={`
            ${profileColor}
            flex
            justify-center
            items-center
            w-12
            h-12
            rounded-xl
            select-none
          `}
        >
          <span>
            {title.charAt(0).toUpperCase()}{title.charAt(title.length * 0.6).toUpperCase()}
          </span>
        </div>
        <div
          className={`
            flex
            flex-col
          `}
        >
          <span
            className={`
              ${textColor}
              font-sans
              text-md
              drop-shadow-2xl
              tracking-wide
              select-none
            `}
          >
            {title}
          </span>
          <span
            className={`
              ${textColor}
              text-sm
              tracking-wider
            `}
          >
            {subtitle}
          </span>
        </div>
      </div>
      <div
        className={`
          absolute
          top-3
          right-3
          cursor-pointer
          flex
          flex-col
          gap-2
        `}
      >
        <Tooltip
          position="top"
          text="Instagram"
        >
          <a
            href={instagramUrl}
            className={`
              text-black
              cursor-pointer
              font-semibold
            `}
          >
            <Link
              size={20}
            />
          </a>
        </Tooltip>
        <Tooltip
          position="top"
          text="Tiktok"
        >
          <a
            href={tiktokUrl}
            className={`
              text-black
              cursor-pointer
              font-semibold
            `}
          >
            <Link2
              size={20}
            />
          </a>
        </Tooltip>
      </div>
    </Card>
  )
}