import React, { useState } from "react";
import { CardText, Col, Container, ListGroup, ListGroupItem, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "reactstrap";
import { Arts_culture, PopularTab, subMenuAirBnb, subMenuHosting, subMenuSuppport,FooterTabs  } from "../data_files/FooterTabContent";
import { FaGlobe, FaSquareFacebook, FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

function Footer() {
  const [activeTab, setActiveTab] = useState(FooterTabs[0].id);

  return (
    <>

    <Container className="bg-light pt-5" fluid>

      <Row className="border-bottom mx-md-3 mx-1">
          <Col>
          <Row>
            <p className="text-dark h5">
              Inspiration for future getaways
            </p>
          </Row>

          <Row>
              <Nav tabs className="overflow-auto flex-nowrap w-100" style={{height: '39px'}}>
                {FooterTabs.map((Tab) => {
                  return (
                    <NavItem key={Tab.id} className="custom-pointer">
                      <NavLink
                        className={`fcw-600 text-muted text-truncate border-0 bg-transparent  ${activeTab == Tab.id ? "popular-Active" : ""}`}
                        onClick={() => setActiveTab(Tab.id)}>
                        {Tab.label}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
          </Row>

          <Row>

        {/* TabBar -- Starts */}

          <TabContent activeTab={activeTab}>
                {FooterTabs.map((Tab) => {
                  return (
                    <TabPane key={Tab.id} tabId={Tab.id}>
                      <Row xs='2' className="my-3">
                        {activeTab === Tab.id ? (
                          <>
                            {Tab?.id === 1
                              ? PopularTab?.map((item, index) => (
                                  <Col
                                    key={index}
                                    lg={2}
                                    sm={6}
                                    className="my-2"
                                  >
                                    <a href="#">
                                      <p className="mb-0 text-dark fcw-600">
                                        {item.Title}
                                      </p>
                                      <CardText className="text-muted fsw-400">
                                        {item.sub_Title}
                                      </CardText>
                                    </a>
                                  </Col>
                                ))
                              : Tab.id === 2
                              ? Arts_culture?.map((item, index) => (
                                  <Col
                                    key={index}
                                    lg={2}
                                    sm={6}
                                    className="my-2"
                                  >
                                    <a href="#">
                                      <p className="mb-0 text-dark fcw-600">
                                        {item.Title}
                                      </p>
                                      <CardText className="text-muted fsw-400">
                                        {item.sub_Title}
                                      </CardText>
                                    </a>
                                  </Col>
                                ))
                              : null}
                          </>
                        ) : null}
                      </Row>
                    </TabPane>
                  );
                })}
          </TabContent>

          </Row>

        {/* TabBar --Ends */}

        </Col>
      </Row>

      {/* Sub-Footer -- Start */}

      <Row className="border-bottom mx-md-3 mx-1 py-2">
          <Col lg={4} md={6} sm={12} className="my-2">
            <div className="mb-2 text-dark fcw-600">Support</div>
            <ListGroup flush>
              {subMenuSuppport.map((SupportItem, SupportId) => {
                return (
                  <ListGroupItem key={SupportId} className="bg-light p-0 pb-1 border-0">
                    <a className="mb-0 text-dark fcs-7 f-sb-style" href={SupportItem.SupportLink}>{SupportItem.SupportTitle}</a>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
          <Col lg={4} md={6} sm={12} className="my-2">
            <div className="mb-2 text-dark fcw-600">Hosting</div>
            <ListGroup flush>
              {subMenuHosting.map((HostingItem, HostingId) => {
                return (
                  <ListGroupItem key={HostingId} className="bg-light p-0 pb-1 border-0">
                    <a className="mb-0 text-dark fcs-7 f-sb-style" href={HostingItem.HostingLink}>{HostingItem.HostingTitle}</a>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
          <Col lg={4} md={6} sm={12} className="my-2">
            <div className="mb-2 text-dark fcw-600">Airbnb</div>
            <ListGroup flush>
              {subMenuAirBnb.map((AirBnbItem, AirBnbId) => {
                return (
                  <ListGroupItem key={AirBnbId} className="bg-light p-0 pb-1 border-0">
                    <a className="mb-0 text-dark fcs-7 f-sb-style" href={AirBnbItem.airBnbLink}>{AirBnbItem.AirBnbTitle}</a>
                  </ListGroupItem>
                )
              })}
            </ListGroup>
          </Col>
      </Row>

      {/* Sub-Footer -- End */}


      {/* Footer Timeline-- Start */}

      <Row className={`mx-md-3 mx-1 my-2`}>
        <div className="d-flex flex-wrap justify-content-center align-items-center ">
          <Col lg={8} sm={12} className="my-lg-2 bg-light text-lg-start text-center order-lg-1 order-2">
                <div className="d-flex flex-lg-row flex-column">
                  <Col>
                    <ListGroup className="justify-content-lg-start justify-content-center" horizontal>
                      <ListGroupItem className="bg-transparent border-0 px-2">
                          <a className="mb-0 text-dark fcs-7 f-sb-style">&copy;2023 Airbnb, Inc.</a>
                      </ListGroupItem>
                  </ListGroup>
                  </Col>

                  <Col lg={9} sm={12}>

                <ListGroup className="justify-content-lg-start justify-content-center flex-wrap " horizontal>
                  <ListGroupItem className="bg-transparent border-0 px-2">
                  <a className="mb-0 text-dark fcs-7 f-sb-style ms-3" href='#'>Terms</a>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 px-2">
                  <a className="mb-0 text-dark fcs-7 f-sb-style" href='#'>Sitemap</a>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 px-2">
                  <a className="mb-0 text-dark fcs-7 f-sb-style" href='#'>Privacy</a>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 px-2">
                  <a className="mb-0 text-dark fcs-7 f-sb-style" href='#'>Your Privacy Choices</a>
                  </ListGroupItem>
                </ListGroup>
                    </Col>
              </div>
          </Col>

          <Col lg={4} md={12} sm={12} className="my-lg-2 order-lg-2 order-md-1">
                <ListGroup className="justify-content-lg-end justify-content-center flex-wrap align-items-center" horizontal>
                  <ListGroupItem className="bg-transparent border-0 px-2 fcw-600">
                  <a className='text-dark fcs-7 mx-1' href='#'><FaGlobe/></a>
                  <a className="mb-0 text-dark fcs-7 f-sb-style mx-1" href='#'>English (US)</a>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 px-2 fcw-600">
                  <a className='text-dark fcs-7 f-sbt-style mx-1' href='#'>$</a>
                  <a className="text-dark fcs-7 f-sbt-style mx-1" href='#'>USD</a>
                  </ListGroupItem>
                  <ListGroupItem className="bg-transparent border-0 px-2 mb-1">
                  <a className="mb-0 text-dark mx-1" href='#' style={{fontSize: '20px'}}><FaSquareFacebook/></a>
                  <a className="mb-0 text-dark mx-1" href='#' style={{fontSize: '20px'}}><FaSquareTwitter/></a>
                  <a className="mb-0 text-dark mx-1" href='#' style={{fontSize: '20px'}}><FaSquareInstagram/></a>
                  </ListGroupItem>
                </ListGroup>
          </Col>

        </div>
      </Row>

      {/* Footer Timeline-- End */}

      </Container>

    </>
  );
}

export default Footer;
