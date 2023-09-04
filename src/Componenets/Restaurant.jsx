import React from 'react'

const Restaurant = () => {
    return (
        <div className='restaurant-bg brightness-20 text-white rounded-md border p-4 flex justify-between w-2/3 drop-shadow-md'>
            <div className='text-xl'>
                <p>Zaika 🍽️</p>
            </div>
            <div className='bg-white text-black p-1 rounded flex flex-col'>
                <div className='flex flex-row justify-between'>
                    <p>
                        Opening
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

export default Restaurant