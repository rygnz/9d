import { TextUnit } from "@/types/tailwindColor.types"

type HRType = {
  color : TextUnit,
  className ?: string
}

/**
 * Gives react component a Horizontal line
 * @returns 
 */
export function HorizontalLine({
  color,
  className
}: HRType) {
  return (
    <hr className={`
      ${className ?? ""}
      ${color}
      flex
      mb-4  
    `}/>
  )
}