import { Tooltip } from "@/components/Tooltip";
import { Mail, Paperclip, Share2, Users } from "lucide-react";
import React from "react";

type FooterType = {
  children : React.ReactNode
  title : React.ReactNode,
  copyright : string
  note : string
}

export function Footers({
  children,
  title,
  copyright,
  note
}: FooterType) {
  return(
    <footer // Footer
        className={`
          lg:flex-col
          md:flex-row
          bg-black
          w-full
          min-h-96
          h-auto
          flex
          flex-col
        `}
      >
        <div
          className={`
            lg:flex-row
            p-9
            w-full
            flex
            flex-col
            gap-12
          `}
        >
          {title}
          {children}
        </div>
        <div // About me
          className={`
            bg-black
            border-t-2
            border-t-slate-100/20
            w-full
            h-auto
            min-h-16
            justify-start
            items-center
            flex
            flex-col
            p-6

            gap-4
          `}
        >
          <span
            className={`
              w-full
              text-slate-100/80
              font-fredoka
              select-none
            `}
          >
            &copy; {copyright}
          </span>
          <div
            className={`
              w-full
              flex
              gap-5
              justify-start
              items-center
            `}
          >
            <Tooltip
              position="top"
              text="Github"
            >
              <a href="https://github.com/rygnz"
                className={`text-white`}
              >
                <Users/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="Instagram"
            >
              <a href="https://www.instagram.com/rygnzzncc/"
                className={`text-white`}
              >
                <Share2/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="Tiktok"
            >
              <a href="https://www.tiktok.com/@genzzwae"
                className={`text-white`}
              >
                <Paperclip/>
              </a>
            </Tooltip>
            <span
              className={`
                text-slate-50/40
              `}
            >
              |
            </span>
            <Tooltip
              position="top"
              text="anggatakp@gmail.com"
            >
              <span
                className={`text-white`}
              >
                <Mail/>
              </span>
            </Tooltip>
          </div>
          <span
            className={`
              w-full
              select-none
              text-slate-50/70
              font-fredoka
            `}
          >
            {note}
          </span>
        </div>
      </footer>
  )
}