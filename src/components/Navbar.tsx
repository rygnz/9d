import React from "react"

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
      <nav
        className={`
          ${className ?? ""}
          flex
          justify-between
          items-center

          w-full
          h-max
          p-3

          bg-black
          border-b-2
          border-b-slate-100/10
        `}
      >
        {children}
      </nav>
  )
}