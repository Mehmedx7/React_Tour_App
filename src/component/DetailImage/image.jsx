import React from "react";
import "./image.css";
import { Badge } from "react-bootstrap";
import img1 from "../../assets/img/meeting.jpg";

const ImageCard = (props) => {
  return (
    <>
      <div className="container image-card px-5 mb-5">
        <div className="imgae-title ">
          <h4>Patan Modhera with Statue of Unity</h4>
          <div className="mb-1">
            <small className="bi bi-star-fill text-warning fs-6"></small>

            <small className="bi bi-star-fill text-warning fs-6"></small>

            <small className="bi bi-star-fill text-warning fs-6"></small>

            <small className="bi bi-star-fill text-warning fs-6"></small>

            <small className="bi bi-star-fill text-warning fs-6"></small>
          </div>
          <div className="my-3 ms-3">
            <Badge className=" badge badge-light p-2 me-5">
              {" "}
              <i className="bi bi-geo-alt-fill"></i> itly
              {/* {props.place} */}
            </Badge>
            <i className="bi bi-person-circle me-1"></i>
            {/* {props.person} */}456 person
            <i className="bi bi-calendar ms-5"></i> {props.day}
           
          </div>
          <div className="banner-wrapper ms-5"> 
            <img src={img1} alt="" className="banner-img rounded" />
            </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
