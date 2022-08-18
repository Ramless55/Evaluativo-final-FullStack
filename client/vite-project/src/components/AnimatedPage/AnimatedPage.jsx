import {motion} from 'framer-motion'

const AnimatedPage = ({children}) => {

    const animation = {
        initial:{opacity: 0 , x: 100},
        animate:{opacity: 1 , x: 0},
        exit:{opacity: 0 , x: -100}
      }

  return (
    <motion.div variants={animation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: 'easeInOut' ,duration: 0.25}}
    >
        {children}
    </motion.div>
  )
}

export default AnimatedPage