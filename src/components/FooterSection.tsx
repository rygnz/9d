
type FooterSectionType = {
  children ?: React.ReactNode
  title ?: string
}

export function FooterSection({
  title = "Used tools",
  children = <li><a href="https://nextjs.org/" className="hover:text-slate-50 transition-all">Next JS</a></li>
}:FooterSectionType) {
  return(
          <div
            className={`
              w-full
              h-auto
              flex
              flex-col
              gap-4
            `}
          >
            <span
              className={`
                text-xl
                uppercase
                text-slate-100
              `}
            >
              {title}
            </span>
            <ul
              className={`
                text-md
                gap-2
                text-slate-100/70
              `}
            >
              {children}
            </ul>
          </div>
  )
}