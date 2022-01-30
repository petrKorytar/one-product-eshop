import './Style/Home.css'
import ShowImage from '../Gallery/imageGallery.js'
import BuyBtnAndDescription from '../BuyBtnAndDescription.js'
import MyAbout from './About'

const MyHome = () => {
    return (  
        <>
                <ShowImage/>
                <BuyBtnAndDescription/>
                <MyAbout/>
        </>
    )
}

export default MyHome
