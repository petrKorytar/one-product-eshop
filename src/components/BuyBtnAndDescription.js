import React from 'react'
import './BuyBtnAndDescription.css'

const BuyBtnAndDescription = () => {
    return (
        <div className='buyContainer'>
            <form >
                <label>
                    <input type="number"/>
                </label>
                
                <input type="submit" value="Přidat do košíku" />
            </form>
        </div>
    )
}

export default BuyBtnAndDescription
