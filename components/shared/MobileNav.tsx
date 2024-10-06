import { Separator } from "@radix-ui/react-separator"
import Image from "next/image"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavItems from './NavItems'




function MobileNav() {
  return <nav className="md:hidden cursor-pointer">
      <Sheet>
      <SheetTrigger asChild className="align-middle">
       <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
          />
      </SheetTrigger>
      <SheetContent>
       <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
        />
        
        <Separator className="my-4 border border-gray-50" />
        <NavItems/>
      </SheetContent>
    </Sheet>
    </nav>
}

export default MobileNav
