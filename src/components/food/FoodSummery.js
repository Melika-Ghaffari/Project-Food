import React from 'react'
import styles from "./foodSummery.module.css"

function FoodSummery() {
    return (
        <section className={styles.summary}>
            <h2>غذای لذیذ برای شما</h2>
            <p>
                بهترین غذا ها را از ما بخواهید با سریع ترین سرویس با ظروف قابل بازیافت
            </p>
            <p>
                بهترین آشپز های برای شما در نظر گرفته شده اند
            </p>
        </section>
    )
}

export default FoodSummery