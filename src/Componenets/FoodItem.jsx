import React from 'react'

const FoodItem = () => {
    return (
        <div className='restaurant-bg brightness-20 text-white rounded-md border p-4 flex justify-between w-20 max-lg:w-2/3 drop-shadow-md'>
            <div className='text-xl'>
                <p>Noodles 🍽️</p>
            </div>
            <div className='bg-white text-black p-1 rounded flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <p>
                        Price
                    </p>
                    <p>
                        10:30 AM
                    </p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p>Closing</p>
                    <p>06:30 PM</p>
                </div>
            </div>
        </div>
    )
}

export default FoodItem