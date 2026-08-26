import React from "react"
import { motion } from "motion/react"

type NavbarType = {
  children : React.ReactNode,
  className? : string
}

/**
 * React component , that can be used as navbar
 * @returns React.ReactNode
 * 
 * @example
 * <Navbar>
 *  <ul>
 *    ...
 *  </ul>
 * </Navbar>
 */
export function Navbar({
  children,
  className
}: NavbarType): React.ReactNode {
  return (
      <motion.nav
        initial={{
          y:-90
        }}
        animate={{
          y:0
        }}
        transition={{
          duration:1,
          ease:"easeInOut",
        }}
        className={`
          ${className ?? ""}
          flex
          justify-between
          items-center

          w-full
          h-max
          p-3

          bg-black/75
          backdrop-blur-sm
          border-b-2
          border-b-slate-100/10
          z-100
        `}
      >
        {children}
      </motion.nav>
  )
}