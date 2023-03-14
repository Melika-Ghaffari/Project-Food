import React from 'react'
import IconBasket from '../Ui/IconBasket'
import styles from './headerButton.module.css'

function HeaderButton() {
    return (
        <div>
            <button className={styles.button}>
                <span className={styles.icon}><IconBasket /></span>
                <span>سبد خرید </span>
                <span className={styles.badge}>1</span>
            </button>
        </div>
    )
}

export default HeaderButton