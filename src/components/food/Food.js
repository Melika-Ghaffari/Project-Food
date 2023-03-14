import React from 'react'
import FoodAvailable from './FoodAvailable'
import FoodSummery from './FoodSummery'

function Food() {
    return (
        <div>
            <FoodSummery />
            <FoodAvailable />
        </div>
    )
}

export default Food