import './Style/Home.css'
import ShowImage from '../Gallery/imageGallery.js'
import BuyBtnAndDescription from '../BuyBtnAndDescription.js'
import MyAbout from './About'
import Contact from './Contact'

const MyHome = () => {
    return (  
        <>
            <div id='home'></div>
                <ShowImage/>
                <BuyBtnAndDescription/>
                <MyAbout/>
                <Contact/>
        </>
    )
}

export default MyHome
