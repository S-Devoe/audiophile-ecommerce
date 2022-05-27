import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react'
import {useInView} from 'react-intersection-observer'


interface fadeInOnScrollProps{
    children: any,
    transition?:{
         duration: number
         delay?: number
        ease?: string
        }
}

function FadeInOnScroll  ({children, transition = {
    ease:'easeOut',
    duration: 1
}}:fadeInOnScrollProps) :JSX.Element

{ 
    const control = useAnimation()
    const [viewRef, inView] = useInView({threshold: 0.5})

    useEffect(() => {
      if(inView){
          control.start('visible')
      }
    
    }, [control, inView])
    

  return (
    <motion.div
    ref={viewRef}
    initial="hidden"
    animate={control}
    transition={transition}
    variants={{
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }}
    >
        {children}
    </motion.div>
  )
}
export default FadeInOnScroll