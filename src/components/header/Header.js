import React from 'react'
import img from '../../assents/food.jpg'

import styles from './header.module.css'
import HeaderButton from './HeaderButton'

function Header() {
    return (
        <div>
            <header className={styles.header}>
                <h1>رشدانا فود</h1>
                <HeaderButton></HeaderButton>
            </header>
            <div className={styles['main-image']}>
                <img src={img} alt='food' />
            </div>
        </div>
    )
}

export default Header