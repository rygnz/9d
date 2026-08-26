import { X } from "lucide-react"
import { Button } from "./Button"
import { HorizontalLine } from "./HorizontalLine"

type MobileMenuType = {
  children?: React.ReactNode
  title? : string
  footer ?: string
  className? : string
  closeButtonAction? : () => void
}

export function MobileMenu({
  children,
  title,
  footer,
  className,
  closeButtonAction
}: MobileMenuType) {
  return(
      <div
        className={`
          ${className ?? ""}

          fixed
          right-0
          top-0
          mr-4
          mt-[25%]

          flex
          flex-col

          bg-black/50
          backdrop-blur-lg
          border-2
          border-slate-100/20
          p-4
          text-white

          rounded-md
        `}
      >
        <div
          className={`
            font-fredoka
            flex
            justify-between
            items-center
          `}
        >
          <span
            className={`
              text-lg
            `}
          >
            {title}
          </span>
          <Button
            backgroundColor="bg-transparent"
            textColor="text-slate-100/50"
            onClick={closeButtonAction}
          >
            <X/>
          </Button>
        </div>
        <HorizontalLine
          color="text-slate-100"
          className={`
            mt-1
          `}
        />
        {children}
        <HorizontalLine
          color="text-color-100"
          className={`
            mt-4
          `}
        />
        <div>
          <span
            className={`
              flex
              justify-center
              items-center
              font-fredoka
              text-slate-100/35
            `}
          >
            {footer}
          </span>
        </div>
      </div>
  )
}