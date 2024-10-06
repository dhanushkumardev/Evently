'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


function NavItems() {

  const pathName = usePathname();

  return (
    <ul className="md:flex-between md:flex-row flex w-full flex-col items-start gap-5">
      {headerLinks.map((link)=>{
        const isActive = (pathName===link.route)
        return (
          <li key={link.route} className={`${isActive &&'text-blue-700'} font-bold flex-center p-primary-16 whitespace-nowrap`}>
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })

       
        
      }
    </ul>

  )
}

export default NavItems