import React from 'react'
import styles from './NavBar.module.css'

export const NavBar = () => {
  return (
    <>
    <nav classname={styles.navbar}>
        <div classname={styles.brand}>
            Nomade<span>DEV</span>
        </div>
        <ul classname={styles.links_list}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Log In</a>
            </li>
            <li>
                <a href="#">Register</a>
            </li>
            <li>
                <a href="#">New Post</a>
            </li>
            <li>
                <a href="#">Dash Board</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Edit</a>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default NavBar