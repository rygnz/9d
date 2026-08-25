
type HeaderType = {
  sectionName : string
  textHeading : React.ReactNode
  subtext : string
}

export function Header({
  sectionName,
  textHeading,
  subtext
} : HeaderType) {
  return (
          <div // Title
            className={`
              md:px-12
              flex
              flex-col
              justify-between
              items-center
              w-full
              h-auto
              gap-4
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
                  flex
                  justify-center
                  items-center
                  gap-2
                  md:text-xl
                `}
              >
                <div
                  className={`
                    w-4
                    h-[1.2px]
                    bg-red-600/70
                  `}
                />
                <span
                  className={`
                    font-fredoka
                    text-slate-100/50
                  `}
                >
                  {sectionName}
                </span>
              </div>
            </div>
            <div
              className={`
                flex
                justify-start
                items-center
                w-full
              `}
            >
              <span
                className={`
                  md:text-6xl
                  text-4xl
                  font-sans
                  tracking-wide
                `}
              >
                {textHeading}
              </span>
            </div>
            <div
              className={`
                w-full
                flex
                justify-between
              `}
            >
              <span
                className={`
                  md:text-xl
                  justify-start
                  items-center
                  text-sm
                  text-slate-200/80
                  tracking-wide
                  font-fredoka
                `}
              >
                {subtext}
              </span>
            </div>
          </div>
  )
}