import { BackgroundUnit } from "@/types/tailwindColor.types"
import { motion } from "motion/react"

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
    <motion.div
      initial={{
        y:10,
        opacity:0
      }}
      whileInView={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:0.5,
        ease:"backInOut",
        delay:0.8
      }}
      viewport={{
        once:true
      }}
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
    </motion.div>
  )
}