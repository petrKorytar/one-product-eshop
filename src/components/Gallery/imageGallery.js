import React, { useState } from "react";
import "./imageGalleryStyle.css"
import firstImage from './Images/First.jpg'
import secondImage from './Images/Second.jpg'
import thirdImage from './Images/Third.jpg'
import fourImage from './Images/Four.jpg'

let myActualIndex = 0

function ShowImage() {

    let myImages = [firstImage,secondImage,thirdImage,fourImage]
    const [selectedImage,setSelectedImage] = useState(myImages[0])
        
    return (
        <>
            <div className='arrowContainerLeft' onClick={(function(){
                if(myActualIndex >= 1){
                    myActualIndex = myActualIndex-1
                    setSelectedImage(myImages[myActualIndex])
                }
                })}>
                <i class="fas fa-chevron-left"></i>
            </div>

            <div className='imageContainer'>
               <img src={selectedImage} className='mainImage' alt=""></img>

                    <div className='smallImageCont'>
                        {myImages.map((myImg,index) => (
                            <img key={index} src={myImg} alt="" onClick={(function(){setSelectedImage(myImg)
                            myActualIndex = index })}></img>
                        )) }
                    </div>
            </div>

            <div className='arrowContainerRight' onClick={(function(){

                if(myActualIndex < myImages.length-1){
                    myActualIndex = myActualIndex+1
                    setSelectedImage(myImages[myActualIndex])
                }
                })}>
                <i class="fas fa-chevron-right"></i>
            </div>
        </>
    )
}

export default ShowImage;
