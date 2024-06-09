import React from "react";
import { Card, Col, Nav, Tab } from "react-bootstrap";
import Faq from "../../component/faq/faq";

const TabView = () => {
  return (
    <div className="container mb-3">
      <Col xl={6}>
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
                  className="tab-pane text-muted"
                  id="home1-justified"
                  eventKey="first"
                >
                  {" "}
                <Faq/>
                </Tab.Pane>
                <Tab.Pane
                  role="tabpanel"
                  className="tab-pane text-muted"
                  id="about1-justified"
                  eventKey="second"
                >
                  <b>Lorem Ipsum is simply dummy</b> text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </Tab.Pane>
                <Tab.Pane
                  role="tabpanel"
                  className="tab-pane show  text-muted"
                  id="service1-justified"
                  eventKey="third"
                >
                  There are many variations of passages of{" "}
                  <b>Lorem Ipsum available</b>, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable. If you are
                  going to use a passage of Lorem Ipsum, you need to be sure
                  there isn't anything.
                </Tab.Pane>
                <Tab.Pane
                  role="tabpanel"
                  className="tab-pane text-muted"
                  id="license1-justified"
                  eventKey="fourth"
                >
                  {" "}
                  It is a long established fact that a reader will be distracted
                  by the
                  <b>
                    <i>Readable content</i>
                  </b>{" "}
                  of a page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English.
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default TabView;
