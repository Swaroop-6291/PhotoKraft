"use client"
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname=usePathname()
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href='/' className='sidebar-logo'> 
                <div className='w-[180px] h-[28px] font-extrabold font-IBMPlex text-2xl text-purple-500 text-center'>
                    PhotoKraft
                </div>
            </Link>
            <nav className='sidebar-nav'>
               <SignedIn>
                <ul className='sidebar-nav_elements'>
                   {navLinks.slice(0,6).map((link)=>{
                      const isActive=link.route===pathname
                      return (
                        <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white' : 'text-gray-700' }`}>
                            <Link href={link.route} className='sidebar-link'>
                              <Image
                               src={link.icon}
                               alt={link.label}
                               width={24}
                               height={24}
                               className={`${isActive && 'brightness-200'}`}
                              />
                              <span>{link.label}</span>
                            </Link>
                        </li>
                      )
                   })}
                </ul>

                <ul className='sidebar-nav_elements'>
                    
                    {navLinks.slice(6).map((link)=>{
                        const isActive=link.route===pathname
                        return (
                            <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-gradient-to-r from-purple-500 to-purple-400 text-white' : 'text-gray-700' }`}>
                                <Link href={link.route} className='sidebar-link'>
                                <Image
                                src={link.icon}
                                alt={link.label}
                                width={24}
                                height={24}
                                className={`${isActive && 'brightness-200'}`}
                                />
                                <span>{link.label}</span>
                                </Link>
                            </li>
                        )
                    })}
                    
                   <li className='flex-center cursor-pointer gap-2 p-4'>
                     <UserButton afterSignOutUrl='/' showName />
                   </li>
                </ul>


               </SignedIn>

               <SignedOut>
                 <Button asChild className='button bg-gradient-to-r from-purple-500 to-purple-400 bg-cover'>
                    <Link href="/sign-in">Login</Link>
                 </Button>
               </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar