import React from 'react'
import './BuyBtnAndDescription.css'

const BuyBtnAndDescription = () => {
    return (
        <div className='buyContainer'>
            <form >
                <label>
                    <input type="number" className='numberInput'/>
                </label>
                
                <input type="submit" className='submitButton' value="Přidat do košíku" />
            </form>
        </div>
    )
}

export default BuyBtnAndDescription
