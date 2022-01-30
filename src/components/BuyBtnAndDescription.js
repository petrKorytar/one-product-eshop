import React from 'react'
import './BuyBtnAndDescription.css'

const BuyBtnAndDescription = () => {
    return (
        <>
            <div className='buyContainer'>
                <form >
                    <input type="submit" className='submitButton' value="Přidat do košíku" />
                </form>
            </div>

            <div className='description'>
                <h1>Ručně vyrobená masivní postel</h1>
                <p>Originální a vyjímečný kus nábytku, který má charakter se zajisté bude vyjímat jako klenot ve Vaší ložnici.
                    Masivní a bytelná kontrukce zajisté vydrží veškeré aktivity, které se na posteli dají provozovat.  
                </p>
            </div>
        </>
    )
}

export default BuyBtnAndDescription
