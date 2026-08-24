type StyleValueUnit = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950

export type BackgroundUnit = 
  `bg-${string}-${StyleValueUnit}` |
  `bg-${string}-${StyleValueUnit}/${number}` |
  "bg-transparent" | "bg-black" | "bg-white"
  undefined

export type TextUnit = 
  `text-${string}-${StyleValueUnit}` |
  `text-${string}-${StyleValueUnit}/${number}`