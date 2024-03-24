import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { FaBed, FaClover, FaLocationDot, FaMedal, FaMountainCity, FaPaw, FaRegHeart, FaRegImage, FaStar, FaUpload, FaWifi } from "react-icons/fa6";
import { Col, Container, Row } from "reactstrap";
import SubCardimg1 from "../assests/main/slider10_img1.jpeg";
import SubCardimg2 from "../assests/main/slider10_img2.jpeg";
import SubCardimg3 from "../assests/main/slider10_img3.jpeg";
import SubCardimg4 from "../assests/main/slider10_img4.jpeg";
import SubCardimg5 from "../assests/main/slider10_img5.jpeg";
function CardSubPage() {
  return (
    <>
      <Container className="py-3 px-5" fluid>
        <Row>
          <h4>Zostel Homes Harabhag | Deluxe Private Room</h4>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-start">
              <div className="text-truncate me-2">
                <FaStar
                  className="mb-1 me-1"
                  style={{ fontSize: '13px' }}
                />
                <span className="fcbs-7">5.0</span> .
                <a href="#" className="text-dark">
                <span className="mx-1 fcbs-7 f-sbt-style">3 reviews</span> .{" "}
                <span className="fcbs-7 f-sbt-style mx-1">
                  Harabhag, Himachal Pradesh, India
                </span>
                </a>
              </div>
            </div>
          </Col>
          <Col>
          <div className="d-flex justify-content-end">
              <a href="#" className="mx-2 bg-navbar-transparent text-dark px-1 px-2 py-1" style={{borderRadius : '8px'}}>
                <FaUpload
                  className="me-2"
                  style={{ fontSize: '15px' }}
                />
                <span className="fcbs-7 f-sbt-style">Share</span>
              </a>
              <a href='#' className="mx-2 bg-navbar-transparent text-dark px-1 px-2 py-1" style={{borderRadius : '8px'}}>
                <FaRegHeart
                  className="me-2"
                  style={{ fontSize: '15px' }}
                />
                <span className="fcbs-7 f-sbt-style">Save</span>
              </a>
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="px-0">
            <img
              src={SubCardimg1}
              alt=""
              className="OpenCardImg_H_Height w-100 p-1"
              
            />
          </Col>
          <Col md={6} className="">
            <Row>
              <Col md={6} className="p-0 d-lg-block d-none">
                <img
                  src={SubCardimg2}
                  alt=""
                  className="OpenCardImg_C_Height w-100 p-1"
                 
                />
              </Col>
              <Col md={6} className="p-0 d-md-block d-none">
                <img
                  src={SubCardimg3}
                  alt=""
                  className="OpenCardImg_C_Height w-100 p-1"
                 
                />
              </Col>
              <Col md={6} className="p-0 d-md-block d-none">
                <img
                  src={SubCardimg4}
                  alt=""
                  className="OpenCardImg_C_Height w-100 p-1"
                 
                />
              </Col>
              <Col md={6} className="p-0 d-lg-block d-none">
                <img
                  src={SubCardimg5}
                  alt=""
                  className="OpenCardImg_C_Height w-100 p-1"
                 
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>

          <Col md={7} className="">
            <Row className="py-4 border-bottom">
            <Col md={8}>
              <h4>Nature lodge hosted by Anirudh</h4>
              <div className="d-flex justify-content-start">
              <div className="text-truncate me-2">
                <span className="fsw-4">16+ guests</span> .
                <a href="#" className="text-dark">
                <span className="mx-1 fsw-4">4 bedrooms</span> .
                <span className="fsw-4 mx-1">6 beds </span> .
                <span className="fsw-4 mx-1">2 shared baths </span>
                </a>
              </div>
            </div>
          </Col>
          <Col md={4} className="text-end">
            <img src={SubCardimg1} alt="" className="rounded-circle" style={{width: '65px', height: '65px',}}/>
          </Col>
          </Row>
                            {/* Icons Section --Start */}
          <Row className="py-4 border-bottom">
            <Col>

            <Row className="align-items-center py-3">
              <Col md={1} className="text-center">
              <FaMedal style={{fontSize: '25px'}}/>
              </Col>
              <Col>
              <h6 className="mb-1">Anirudh is a Superhost</h6>
              <p className="mb-0 text-muted fsw-400">Superhosts are experienced, highly rated Hosts.</p>
              </Col>
            </Row>

            <Row className="align-items-center py-3">
              <Col md={1} className="text-center">
              <FaLocationDot style={{fontSize: '25px'}}/>
              </Col>
              <Col>
              <h6 className="mb-1">Great location</h6>
              <p className="mb-0 text-muted fsw-400">100% of recent guests gave the location a 5-star rating.</p>
              </Col>
            </Row>

            <Row className="align-items-center py-3">
              <Col md={1} className="text-center">
               <FaPaw style={{fontSize: '25px'}}/>
              </Col>
              <Col>
              <h6 className="mb-1">Furry friends welcome</h6>
              <p className="mb-0 text-muted fsw-400">Bring your pets along for the stay.</p>
              </Col>
            </Row>
                
            </Col>
          </Row>
                            {/* Icons Section --End */}

          <Row className="py-4 border-bottom">
            <p className="py-3 mb-0">We travel the endless corridors of our mind until one day we find a pathway that leads us to our heart.
            <br />
            So here at Lost & Found we invite you to a journey into your heart and soul by being one with nature.
            <br />
            Reconnect to yourself and enjoy the healing environment of the holy mountains of Parvati Valley....
            </p>
          </Row>

          <Row className="py-4 border-bottom">
            <Col>
                <h4>Where you'll sleep</h4>
              <Row className="py-3 flex-nowrap overflow-sty">
                <div className="m-2 border rounded-4 custom-width">
                    <Row className="p-3 flex-column">
                        <Col className="mb-4">
                            <FaBed style={{fontSize: '25px'}}/>
                        </Col>
                        <Col>
                          <h6 className="">Bedroom 1</h6>
                          <p className="mb-0 text-muted ">1 double bed</p>
                        </Col>
                    </Row>
                </div>
                <div className="m-2 border rounded-4 custom-width">
                    <Row className="p-3 flex-column">
                        <Col className="mb-4">
                            <FaBed style={{fontSize: '25px'}}/>
                        </Col>
                        <Col>
                          <h6 className="">Bedroom 2</h6>
                          <p className="mb-0 text-muted ">1 double bed</p>
                        </Col>
                    </Row>
                </div>
                <div className="m-2 border rounded-4 custom-width">
                    <Row className="p-3 flex-column">
                        <Col className="mb-4">
                          <span className="me-2">
                            <FaBed style={{fontSize: '25px'}}/>
                          </span>
                          <span className="me-2">
                            <FaBed style={{fontSize: '25px'}}/>
                          </span>
                        </Col>
                        <Col>
                          <h6 className="">Bedroom 3</h6>
                          <p className="mb-0 text-muted ">2 double bed</p>
                        </Col>
                    </Row>
                </div>
                <div className="m-2 border rounded-4 custom-width">
                    <Row className="p-3 flex-column">
                        <Col className="mb-4">
                          <span className="me-2">
                            <FaBed style={{fontSize: '25px'}}/>
                          </span>
                          <span className="me-2">
                            <FaBed style={{fontSize: '25px'}}/>
                          </span>
                        </Col>
                        <Col>
                          <h6 className="">Bedroom 4</h6>
                          <p className="mb-0 text-muted ">2 double bed</p>
                        </Col>
                    </Row>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="py-4 border-bottom">
            <Col>
                <h4>What this place offers</h4>
            </Col>
            <Row>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaClover style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Garden view</p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaRegImage style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Mountain view</p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaWifi style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Wifi</p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaPaw style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Pets allowed</p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaClover style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Washer</p>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="py-2">
                <Row>
                  <Col md={2}>
                      <FaMountainCity style={{fontSize: '25px'}} />
                  </Col>
                  <Col md={10}>
                    <p className="mb-0">Shared patio or balcony</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
          </Col>

          <Col md={5} className="">
              <Row>
                <Col>
                
                </Col>
              </Row>
          </Col>
        
        </Row>
      </Container>
    </>
  );
}

export default CardSubPage;
