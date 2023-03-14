import React from 'react'
import Card from '../Ui/Card';
import styles from './foodAvailable.module.css'
import FoodItem from './itemFood/FoodItem';

const food = [
    {
        id: 'm1',
        name: 'خورشت کرفس',
        description: 'کرفس تازه با برنج تازه ایرانی',
        price: 59000,
    },
    {
        id: 'm2',
        name: ' استانبولی',
        description: 'لوبیا تازه با هویچ و قارچ',
        price: 79000,
    },
    {
        id: 'm3',
        name: 'ته چین مرغ',
        description: 'برنج ایرانی با مرغ مرینت شده ترش',
        price: 49000,
    },
    {
        id: 'm4',
        name: 'پاستا',
        description: 'ماکارانی همراه با قارچ و سس الفردو',
        price: 79000,
    },
];

function FoodAvailable(props) {
    const foodList = food.map(meal =>
        <FoodItem key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    )
    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {foodList}
                </ul>
            </Card>
        </section>
    )
}

export default FoodAvailable