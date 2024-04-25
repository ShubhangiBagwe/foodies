import Link from 'next/link'
import React from 'react'
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import NavLink from '../nav-link/nav-link'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <img src={logoImg.src} alt='a plate with food' />Nextlevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">Browse Meal</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodie Community</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainHeader