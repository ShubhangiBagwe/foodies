"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { Children } from 'react'
import classes from './nav-link.module.css'

const NavLink = ({href,children}:any) => {
    const path = usePathname()
  return (
    <div>
        <Link href={href} className={path.startsWith(href) ?  `${classes.link} ${classes.active}` : classes.link}>{children}</Link>
    </div>
  )
}

export default NavLink