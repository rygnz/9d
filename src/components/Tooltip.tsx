

type TooltipType = {
  children : React.ReactNode
  text : string
  position : keyof typeof pos
}

const pos = {
  top : 
    "top-0 left-0 group-hover:translate-y-[-110%] group-hover:translate-x-[-35%]"
}

export function Tooltip({
  children,
  text,
  position
}:TooltipType) {
  return(
    <div
      className={`
        group
        relative
      `}
    >
      <div
        className={`
          ${pos[position]}
          backdrop-blur-2xl
          shadow-2xl

          z-10
          translate-0
          translate-x-[-28%]
          absolute
          opacity-0
          scale-0
          
          group-hover:opacity-100
          group-hover:scale-100

          hover:opacity-0
          hover:scale-0

          cursor-default
          bg-black/70
          border-2
          border-slate-100/30

          px-2
          py-1
          rounded-md
          drop-shadow-2xl

          transition-all
          duration-200
          max-w-64
          min-w-0
          whitespace-nowrap
          wrap-break-word
        `}
      >
        <span
          className={`
            text-sm/1
            max-w-64
            font-fredoka
            text-slate-100/80
            text-ellipsis
          `}
        >
          {text}
        </span>
      </div>
      <div
        className={`
          flex
          justify-center
          items-center
        `}
      >
        {children}
      </div>
    </div>
  )
}