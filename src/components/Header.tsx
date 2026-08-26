import { motion } from "motion/react"


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
              <motion.div
                initial={{
                  x:-5,
                  opacity:0
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration:0.5,
                  ease : "easeOut",
                  delay:0.75
                }}
                viewport={{
                  once: true
                }}
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
              </motion.div>
            </div>
            <motion.div
              initial={{
                x:-5,
                opacity:0
              }}
              whileInView={{
                x:0,
                opacity:1
              }}
              viewport={{
                once:true
              }}
              transition={{
                duration:0.5,
                ease : "easeOut",
                delay:1
              }}
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
            </motion.div>
            <motion.div
              initial={{
                opacity:0,
                x:-10
              }}
              whileInView={{
                x:0,
                opacity:1
              }}
              transition={{
                duration:1,
                delay:1.25,
                ease:"easeOut"
              }}
              viewport={{
                once:true
              }}
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
            </motion.div>
          </div>
  )
}