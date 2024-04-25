import React from 'react'
import classes from "./page.module.css"
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <header className={classes.header}>
      <h1>Delicious meal create <span className={classes.highlight}>by you</span></h1>
      <p>Choose your favourite recipe and cook it yourself . It is easy and fun !</p>
      <p className={classes.cta}>
        <Link href="/meals/share">Share Your Favourite Recipe</Link>
      </p>
      </header>
      <main className={classes.main}> 

      </main>
    </div>
  )
}

export default page