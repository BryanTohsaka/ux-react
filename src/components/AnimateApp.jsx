import { motion } from "framer-motion"


const animations = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    transition: {duration: 1, ease:"easeInOut"}
}

const AnimateApp = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" transition="transition">
        {children}
    </motion.div>
  )
}

export default AnimateApp