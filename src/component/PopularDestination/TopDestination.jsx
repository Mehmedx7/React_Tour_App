import React from "react";
import img1 from "../../assets/img/home-decor-1.jpg";

const destination = [
  {
    id:1,
    img:img1,
    heading:"Mahamattam",
    tour:"Tour 1"
  },
  {
    id:2,
    img:img1,
    heading:"Mahamattam",
    tour:"Tour 1"
  },
  {
    id:3,
    img:img1,
    heading:"Mahamattam",
    tour:"Tour 1"
  },
  {
    id:4,
    img:img1,
    heading:"Mahamattam",
    tour:"Tour 1"
  },
]

const TopDestination = () => {
  return (
    <>
      <div className="container destination mt-5">
        <div className="title text-center mt-3">
          <h1>Popular Destination</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
            nullam the as integer quam dolor nunc semper.
          </p>
        </div>
         <div className="row mt-5">
         {
          destination.map((item, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 desti-img d-flex flex-column aign-item-center justify-content-center" >

       <img src={item.img} alt=""  />
       <h1  className="text-center">{item.heading}</h1>
       <p  className="text-center">{item.tour}</p>
      
       </div>
            )
          })
         }
      
            </div>
      </div>
    </>
  );
};

export default TopDestination;
