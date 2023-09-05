import React from 'react';
import FoodItem from '../Componenets/FoodItem';

const FoodList = () => {
    return (
        <div>
            <div className="banner banner1 flex justify-center items-center">
                <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Best Food</h1>
            </div>
            <div className='flex justify-center items-center m-4'>
                <FoodItem />
            </div>
        </div>
    )
}

export default FoodList