import { Button } from "@/components/ui/button"
import { ShoppingCart, UserIcon } from "lucide-react"
import Link from "next/link"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
     <header className ='w-full border-b'>
               <div className="flex justify-between items-center flex-1 max-w-7xl p-5 px-10 w-full mx-auto">
                <div className="flex justify-start items-center">

                   <Link href={'/'} className="text-white hover:text-blue-300">
                      <span className="block font-bold text-2xl mr-3">فروشگاه</span>
                      <span >لوگو</span>
                   </Link>
                </div>

                 <div className="space-x-2">
                  <ThemeToggle />
                  <Button asChild>
                     <Link href='/card'>
                       <ShoppingCart />سبد خرید
                     </Link>
                  </Button>
                  <Button asChild>
                     <Link href='/sign-in'>
                       <UserIcon /> حساب کاربری
                     </Link>
                  </Button>
                  

                 </div>

               </div>
     </header>
  )
}

export default Header
