import React from "react";
import img1 from "../../assets/img/home-decor-1.jpg";
import { Badge } from "react-bootstrap";

const cardData = [
  {
   id:1,
   img: img1,
  },
  {
    id:2,
    img: img1,
   },
   {
    id:3,
    img: img1,
   },
   {
    id:4,
    img: img1,
   }
]

const PopularTour = () => {
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
         
          {
            cardData.map( (item, index) =>{
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 desti-img">
                <div className="card  my-3" key={index}>
              <img className="card-img-top" src={item.img} alt="Card" />
              <div className="row border-bottom m-0 border-top bg-secondary ">
                <div className="col border text-center">
                  <i className="bi bi-calendar"></i> jsk
                </div>

                <div className="col border text-center">
                  <i className="bi bi-person-circle"></i> jnsxjk
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-item-center">
                  <Badge className=" badge badge-light p-2">
                    {" "}
                    <i className="bi bi-geo-alt-fill"></i> Italy
                  </Badge>
                  <Badge className=" badge badge-light p-2"> Rs.567</Badge>
                </div>

                <h5 className="card-title">
                  When you visit the Eternal Rome City
                </h5>
                <h6 className="card-title text-secondary">
                  When you visit the Eternal Rome City
                </h6>
                <div class="mb-3">
                  <small class="bi bi-star-fill text-primary"></small>

                  <small class="bi bi-star-fill text-primary"></small>

                  <small class="bi bi-star-fill text-primary"></small>

                  <small class="bi bi-star-fill text-primary"></small>

                  <small class="bi bi-star-fill text-primary"></small>
                </div>
                <div>
                  <div>
                    <p></p>
                    <h1></h1>
                  </div>
                </div>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Book Now
                </a>
              </div>
            </div>
            </div>

              )
            } )
          }
        

        </div>
      </div>
    </>
  );
};

export default PopularTour;
