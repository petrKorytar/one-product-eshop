import React from 'react'
import './BuyBtnAndDescription.css'

const BuyBtnAndDescription = () => {
    return (
        <div className='buyContainer'>
            <form >
                <input type="submit" className='submitButton' value="Přidat do košíku" />
            </form>
        </div>
    )
}

export default BuyBtnAndDescription
