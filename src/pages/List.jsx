import React from 'react';
import CustomeCard from '../component/PopularTour/card';
import { cardData1 } from '../component/PopularTour/TourData';

const List = () => {
  
  return (
    <>
<div className="container mt-5 Popular-tour">
        <div className="title text-center mt-3">
          <h1>Our Popular Tours</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Mauris
            nullam the as integer quam dolor nunc semper.
          </p>
        </div>

        <div className="row mt-5 d-flex align-item-center justify-content-center">
          {cardData1.map((item) => {
            return (
              <CustomeCard              
                title={item.title}
                price={item.price}
                subtitle={item.subtitle}
                img={item.img}
                day={item.day}
                person={item.person}
                place={item.place}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </>   
  )
}

export default List