import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CustomeCard = (props) => {
   
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/detail")
  }

  return (
   <>      
               <div className="col-lg-3 col-md-6 col-sm-10 desti-img mx-xs-3">
               <div className="card  my-2 custome-card" >
             <img className="card-img-top custome-img" src={props.img} alt="Card" />
             <div className="row border-bottom m-0 border-top bg-secondary ">
               <div className="col border text-center">
                 <i className="bi bi-calendar"></i> {props.day}
               </div>
               <div className="col border text-center">
                 <i className="bi bi-person-circle"></i> {props.person}
               </div>
             </div>
             <div className="card-body">
               <div className="d-flex justify-content-between align-item-center">
                 <Badge className=" badge badge-light p-2">
                   {" "}
                   <i className="bi bi-geo-alt-fill"></i> {props.place}
                 </Badge>
                 <Badge className=" badge badge-light p-2"> {props.price}</Badge>
               </div>
               <h5 className="card-title mt-1"> 
                {props.title}
               </h5>
               <h6 className="card-title text-secondary">
                 {props.subtitle}
               </h6>
               <div className="mb-1">
                 <small className="bi bi-star-fill text-warning fs-5"></small>

                 <small className="bi bi-star-fill text-warning fs-5"></small>

                 <small className="bi bi-star-fill text-warning fs-5"></small>

                 <small className="bi bi-star-fill text-warning fs-5"></small>

                 <small className="bi bi-star-fill text-warning fs-5"></small>
               </div>
               {/* <div>
                 <div>
                   <p></p>
                   <h1></h1>
                 </div>
               </div> */}
               <p className="card-text">
                 {props.description}
               </p>
             
               <Button className="btn btn-primary " onClick={handleClick} > Book Now</Button>
             </div>
           </div>
           </div>
   </>)
}

export default CustomeCard