import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/img/bg-pricing.jpg";
import img2 from "../assets/img/home-decor-1.jpg";
import img3 from "../assets/img/home-decor-2.jpg";
import img4 from "../assets/img/home-decor-3.jpg";
const slides = [
  { id: 1, img: img1, heading: "First slide for the lebel", btn: "Click Me" },
  { id: 1, img: img2, heading: "Second slide for the lebel ", btn: "Click Me" },
  { id: 1, img: img3, heading: "third slide for the lebel", btn: "Click Me" },
  { id: 1, img: img4, heading: "fourth slide for the lebel", btn: "Click Me" },
];

function DarkVariantExample() {
  return (
    <Carousel>
      {slides.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-img"
              src={item.img}
            //   style={{ height: "90vh" }}
              alt="First slide"
            />
            <Carousel.Caption
              className="d-flex flex-column justify-content-center align-items-center carousel-caption"
              style={{ height: "100%" }}
            >
              <h1>{item.heading}</h1>
              <button className="btn car-btn mt-3 ">{item.btn}</button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default DarkVariantExample;
