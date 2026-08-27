import { useEffect, useState } from "react"
import { motion } from "motion/react"

type TypingTextType = {
  text :string,
  ms : number,
  func ? : (e : boolean) => void
  funcValue ? : boolean
}


export function TypingText({
  text,
  ms,
  func = () => {},
  funcValue = false
}:TypingTextType) {
  const [typed,SetTyped] = useState<string>('')
  
  useEffect(()=>{
    const upd = () => {
      SetTyped("")
    }
    
    upd()
    let i = 0
    const interval = window.setInterval(() => {
      i ++
      SetTyped(text.slice(0,i))

      if(i >= text.length) {
        window.clearInterval(interval)
        func(funcValue)
      }

      return (() => window.clearInterval(interval))
    },ms)
  },[text])

  return(
    <div
      className={`
        w-full
        flex
        justify-between
      `}
    >
      <span>
        {typed} 
        <motion.span
          animate={{
            opacity: [1,0,1]
          }}
          transition={{
            repeat:Infinity,
            duration:0.9,
            ease:"easeInOut"
          }}
          className={`
            ml-0.5
          `}
        >
          |
        </motion.span>
      </span>
    </div>
  )
}