import React from 'react'
import Restaurant from '../Componenets/Restaurant'

const RestroListing = () => {
    return (
        <div>
            <div className="banner banner1 flex justify-center items-center">
                <h1 className="text-white font-bold text-9xl max-sm:text-6xl">Restaurants</h1>
            </div>
            <div className='flex justify-center items-center m-4'>
                <Restaurant />
            </div>
        </div>
    )
}

export default RestroListing