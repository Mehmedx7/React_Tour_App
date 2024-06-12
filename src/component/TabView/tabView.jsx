import React from "react";
import { Card, Col, Nav, Tab } from "react-bootstrap";
import Faq from "../faq/faq";
import "./tabView.css";

const TabView = () => {
  return (
    <div className="container  mb-3">
     
        <Card className="card">
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
              <Nav
                className="nav nav-tabs mb-2 nav-justified  d-sm-flex d-block"
                role="tablist"
                defaultActiveKey="third"
              >
                <Nav.Item>
                  <Nav.Link href="#home1-justified" eventKey="first">
                  Itinerary
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about1-justified" eventKey="second">
                    Description
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="myTabContent">
                <Tab.Pane
                  role="tabpanel"
                  className="tab-pane"
                  id="home1-justified"
                  eventKey="first"
                >
                  {" "}
                <Faq/>
                </Tab.Pane>
                <Tab.Pane
                  role="tabpanel"
                  className="tab-pane p-3 bg-light"
                  id="about1-justified"
                  eventKey="second"
                >
                  <b>Lorem Ipsum is simply dummy</b> text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </Tab.Pane>
               
               
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      
    </div>
  );
};

export default TabView;
