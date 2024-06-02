import React from 'react'
import img1 from "../../assets/img/home-decor-2.jpg";
import "./galleryCard.css"

const galleryData = [
    {
    id:1,
    img:img1,
    caption:"Hover the effect"
},
{
    id:2,
    img:img1,
    caption:"Hover the effect"
},
{
    id:3,
    img:img1,
    caption:"Hover the effect"
},
{
    id:4,
    img:img1,
    caption:"Hover the effect"
},
{
    id:5,
    img:img1,
    caption:"Hover the effect"
},
{
    id:6,
    img:img1,
    caption:"Hover the effect"
},
{
    id:7,
    img:img1,
    caption:"Hover the effect"
},
{
    id:8,
    img:img1,
    caption:"Hover the effect"
},
{
    id:9,
    img:img1,
    caption:"Hover the effect"
},

]
const GalleryCard = () => {
  return (
    <div>
         <div className='container gallery'>
         <div className="title text-center mt-3">
         <h1>Gallery</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
            nullam the as integer quam dolor nunc semper.
          </p>
          </div>
            <div className='row'>
            {
                galleryData.map((item,index) => {
                    return(
                        <div className='col-lg-4 col-sm-6' key={index}>
                    <div className='thumbnail'>
                        <div className='img-container'>
                            <img className='image' src={item.img} alt='gallery img'/>
                          <div className='overlay'>
                            <p className='caption'>{item.caption}</p>
                          </div>
                        </div>
                    </div>
                </div>
                    )
                })
            }
               
            </div>
         </div>
    </div>
  )
}

export default GalleryCard