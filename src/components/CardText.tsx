import React from "react"
import { Card } from "./Card"
import { BackgroundUnit, TextUnit } from "@/types/tailwindColor.types"

type CardTextType = {
  icon : React.ReactNode
  upperTitle : string
  subtitle : string
  title : string

  backgroundPrimaryColor ?: BackgroundUnit
  backgroundSecondaryColor ?: BackgroundUnit
  textColor ?: TextUnit

  className ? : string
}

export function CardText({
  title,
  icon,
  subtitle,
  upperTitle,
  backgroundPrimaryColor,
  backgroundSecondaryColor,
  textColor,
  className
}:CardTextType) {
  return(
    <Card
      className={`
        ${className ?? ""}
        ${backgroundPrimaryColor}
        flex
        flex-col
        w-full
        h-full
        min-w-52
        max-w-72
        py-4
        px-6
        drop-shadow-2xl
      `}
    >
      <div
        className={`
          flex
          justify-between
          w-full
        `}
      >
        <div
          className={`
            ${textColor}
            ${backgroundSecondaryColor}
            p-3
            rounded-full
            drop-shadow-2xl
          `}
        >
          {icon}
        </div>
      </div>
      <div
        className={`
          mt-8
          w-full
          justify-start
          items-center
        `}
      >
        <span
          className={`
            ${textColor}
            font-fredoka
            text-sm
            text-shadow-2xs
            tracking-widest
          `}
        >
          {upperTitle.toUpperCase()}
        </span>
      </div>
      <div
        className={`
          w-full
          justify-start
          items-center
          -mt-1
        `}
      >
        <span
          className={`
            ${textColor}
            font-fredoka
            text-lg
            text-shadow-2xs
          `}
        >
          {title}
        </span>
      </div>
      <div
        className={`
          w-full
          justify-start
          items-center
          mt-2
        `}
      >
        <span
          className={`
            text-sm
            text-shadow-2xs
            ${textColor}
            font-fredoka
          `}
        >
          {subtitle}
        </span>
      </div>
    </Card>
  )
}