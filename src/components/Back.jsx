import { Link } from "react-router-dom"
import {ChevronLeft} from "lucide-react"

function Back() {
  return (
    <>
    <Link to={'/#work'} className="fixed top-10 left-10 z-50">
    <ChevronLeft className="w-12 h-12 rounded-full dark:text-lime-200 text-lime-300 border-lime-300 backdrop-blur-sm border-[3px]" />
    </Link>
    
    </>
  )
}

export default Back