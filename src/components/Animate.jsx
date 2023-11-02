import { motion } from "framer-motion"


const animations = {
    initial: {opacity: 0, x:0, y:0},
    animate: {opacity: 1, x:0, y:0},
    transition: {duration: 1, ease:"easeInOut"}
}

const Animate = ({children}) => {
  return (
    <motion.div variants={animations} initial="initial" animate="animate" transition="transition">
        {children}
    </motion.div>
  )
}

export default Animate