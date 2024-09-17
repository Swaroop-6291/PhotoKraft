"use client"
import Link from "next/link"
import { SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet
 } from "../ui/sheet"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname=usePathname()
  return (
    <header className="header">
      <Link href='/' className="flex items-center gap-2 md:py-2">
        <div className='w-[180px] h-[28px] font-extrabold font-IBMPlex text-2xl text-purple-500 text-center'>
          PhotoKraft
        </div>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src={'/assets/icons/menu.svg'}
                alt="menu"
                height={32}
                width={32}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <div className='w-[162px] h-[23px] font-extrabold font-IBMPlex text-2xl text-purple-500 text-center'>
                  PhotoKraft
                </div>
                <ul className='header-nav_elements'>
                   {navLinks.map((link)=>{
                      const isActive=link.route===pathname
                      return (
                        <li key={link.route} className={`${isActive && 'gradient-text' } p-18 flex whitespace-nowrap text-nowrap text-dark-700`}>
                            <Link href={link.route} className='sidebar-link'>
                              <Image
                               src={link.icon}
                               alt={link.label}
                               width={24}
                               height={24}
                              />
                              <span>{link.label}</span>
                            </Link>
                        </li>
                      )
                   })}
                </ul>
              </>
            </SheetContent>
          </Sheet>

        </SignedIn>

        <SignedOut>
          <Button asChild className='button bg-gradient-to-r from-purple-500 to-purple-400 bg-cover'>
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>

    </header>
  )
}

export default MobileNav
