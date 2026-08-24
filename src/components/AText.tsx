
type ATextType = {
  children?: React.ReactNode | string
  clickAction ? : () => void
  href : string
}

export function AText({
  clickAction,
  children,
  href
}:ATextType) {
  return(
    <a href={href}
      className={`
        font-fredoka
        tracking-tighter
        hover:text-slate-400
        transition-all
        duration-100
      `}
      onClick={clickAction}
    >
      {children}
    </a>
  )
}