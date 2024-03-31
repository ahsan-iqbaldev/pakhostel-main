import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Input, Row } from "reactstrap";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import {
  FaAirbnb,
  FaBars,
  FaCircleUser,
  FaGlobe,
  FaMinus,
  FaPlus,
  FaSistrix,
  FaXmark,
} from "react-icons/fa6";
import { DateRangePicker } from "react-date-range";
import location from "../assests/filter_icons/location-icon.png";
import CountriesList from "../data_files/CountriesList.json";
import { SelectedLocation } from "../data_files/SelectedLocation";
import MobileNavbar from "./MobileNavbar";
import Home from "../view/Home";
import { useDispatch, useSelector } from "react-redux";
import {
  DatePicker,
  DecrementAdultCounter,
  DecrementChildCounter,
  DecrementInfantCounter,
  DecrementPetCounter,
  IncrementAdultCounter,
  IncrementChildCounter,
  IncrementInfantCounter,
  IncrementPetCounter,
  ShowTab1,
  ShowTab2,
  FilterCountries,
  CrossBtn,
  CloseSubMTab,
} from "../store/actions/Actions";

function Navbar() {
  const dispatch = useDispatch();
  const {
    adultcounter,
    childcounter,
    infantcounter,
    petcounter,
    disableAdult,
    showTab1,
    showTab2,
    filtercountries,
    crossbtn,
    datepicker,
  } = useSelector((state) => state.increamentReducer);

  const [inputvalue, setInputValue] = useState("");

  const filterCountryName = (input) => {
    const filtered = CountriesList.filter((country) =>
      country.name.toLowerCase().includes(input.toLowerCase())
    );
    return filtered;
  };

  const handleInputCountries = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const filteredvalue = filterCountryName(value);
      dispatch(FilterCountries(filteredvalue));
      dispatch(CrossBtn(true));

      if (filteredvalue.length === 0) {
        dispatch(ShowTab1(false));
        dispatch(ShowTab2(false));
      } else {
        dispatch(ShowTab1(false));
        dispatch(ShowTab2(true));
      }
    } else {
      dispatch(ShowTab1(false));
      dispatch(ShowTab2(false));
      dispatch(FilterCountries([]));
      dispatch(CrossBtn(false));
    }
  };

  const handleSelectInputCountry = (country) => {
    dispatch(FilterCountries([country]));
    dispatch(ShowTab2(true));
    setActiveTab("2");
    dispatch(CrossBtn(false));
    dispatch(CloseSubMTab(false));
  };

  const initialState = [
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ];

  const [searchData, setSearchData] = useState("");
  const [startSelectedDate, setStartSelectedDate] = useState([]);
  const [endSelectedDate, setEndSelectedDate] = useState([]);

  const handleSearchClick = () => {
    const searchDData = {
      inputvalue: inputvalue.toLowerCase(),
      startSelectedDate,
      endSelectedDate,
    };
    setSearchData(searchDData);
    setNavbar(true);
  };

  const handleSelectedDateRange = (selectedDate) => {
    dispatch(DatePicker([selectedDate.selection]));
    setStartSelectedDate(selectedDate.selection.startDate);
    setEndSelectedDate(selectedDate.selection.endDate);
  };

  const handleClearField = () => {
    setInputValue("");
    dispatch(ShowTab1(true));
    dispatch(ShowTab2(false));
    dispatch(CrossBtn(false));
  };

  const handleSelectedLocation = (target) => {
    const selecteditem = SelectedLocation[0];
    if (target != selecteditem) {
      setInputValue(target.countryName);
      dispatch(CrossBtn(true));
      setActiveTab("2");
      dispatch(CrossBtn(false));
      dispatch(CloseSubMTab(false));
    } else {
      setInputValue("");
      dispatch(CrossBtn(false));
    }
  };

  const [navbar, setNavbar] = useState(true);

  const toggleShowLocation = () => {
    setActiveTab("1");
    setNavbar(false);
  };
  const toggleShowDate = () => {
    setActiveTab("2");
    setNavbar(false);
  };
  const toggleGuests = () => {
    setActiveTab("4");
    setNavbar(false);
  };

  // State for current active Tab
  const [activeTab, setActiveTab] = useState("");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      if (tab === "1" && inputvalue.length > 0) {
        dispatch(CrossBtn(true));
      } else {
        dispatch(CrossBtn(false));
      }
    } else {
      setActiveTab("");
      dispatch(CrossBtn(true));
    }
  };

  const [Stay, setStay] = useState(true);
  const [Experience, setExperience] = useState(false);
  const [CoreExperience, setCoreExperience] = useState(false);
  const [activeCTab, setActiveCTab] = useState("Stay");

  const toggleStay = () => {
    setStay(true);
    setExperience(false);
    setCoreExperience(false);
    setActiveCTab("Stay");
  };

  const toggleExperience = () => {
    setStay(false);
    setExperience(true);
    setCoreExperience(false);
    setActiveCTab("Experience");
  };

  const toggleCoreExperience = () => {
    setStay(false);
    setExperience(false);
    setCoreExperience(true);
  };

  //  Hide the overlay
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNavbar(true);
        setActiveTab("");
        // console.log("close Navbar!", wrapperRef);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      <div className={`${navbar ? "" : "custom-bg "}`}>
        <div
          ref={wrapperRef}
          className="pt-3 p-2 bg-white d-md-block d-none border-bottom"
        >
          <Row className="mx-md-3 mx-1 d-flex align-items-center">
            <Col lg={4} md={1} className="my-1 my-md-0">
              <span
                className="d-flex color-primary fw-bold fs-4 justify-content-md-start justify-content-center"
                style={{ height: 40 }}
              >
                <FaAirbnb className="custom-font-icon" />
                <span className="d-lg-block d-md-none">PakHostel</span>
              </span>
            </Col>

            {navbar ? (
              <Col
                lg={4}
                md={6}
                className={`my-1 my-md-0 ${
                  navbar ? "" : "transition-itr show"
                }`}
              >
                <div className="custom-main-border rounded-pill d-flex flex-nowrap justify-content-between align-items-center py-1 px-3">
                  <p
                    className="px-lg-2 border-0 text-dark fcw-medium text-truncate"
                    onClick={toggleShowLocation}
                  >
                    Anywhere
                  </p>
                  <p
                    className="px-lg-3 text-dark fcw-medium custom-btn-border text-truncate px-4"
                    onClick={toggleShowDate}
                  >
                    Any week
                  </p>
                  <p
                    className="px-lg-2 border-0 text-secondary fcw-medium text-truncate"
                    onClick={toggleGuests}
                  >
                    Add guests
                  </p>
                  <Button className="bg-custom-primary rounded-custom-pill border-0 text-white">
                    <FaSistrix height={15} width={15} className="my-1" />
                  </Button>
                </div>
              </Col>
            ) : (
              <Col
                lg={4}
                md={6}
                className={`my-1 my-md-0 ${
                  navbar ? "" : "transition-itr show"
                }`}
              >
                <div className="text-center d-flex flex-nowrap justify-content-center align-items-center py-1">
                  <p
                    className={`mx-md-3 mx-1 text-dark fcw-normal menuitem text-truncate ${
                      Stay ? "active" : ""
                    }`}
                    onClick={toggleStay}
                  >
                    Stays
                  </p>
                  <p
                    className={`mx-md-3 mx-1 text-dark fcw-normal menuitem text-truncate ${
                      Experience ? "active" : ""
                    }`}
                    onClick={toggleExperience}
                  >
                    Experiences
                  </p>
                  <p
                    className={`mx-md-3 mx-1 text-dark fcw-normal menuitem text-truncate ${
                      CoreExperience ? "active" : ""
                    }`}
                    onClick={toggleCoreExperience}
                  >
                    Online Experiences
                  </p>
                </div>
              </Col>
            )}

            <Col lg={4} md={5} className="my-1 my-md-0">
              <div className="d-flex text-center justify-content-md-end justify-content-center ">
                <Button className="bg-navbar-transparent color-primary border-0 rounded-pill text-dark fcw-medium py-2 px-lg-3 px-md-2 mx-lg-1">
                  <a
                    href="http://localhost:3001/auth/login"
                    target="blank"
                    className="color-primary"
                  >
                    Pak Hostel hosting
                  </a>
                </Button>
                <Button className="bg-navbar-transparent border-0 rounded-pill text-dark fcw-medium mx-lg-1">
                  <FaGlobe className="my-1" />
                </Button>
                <div className="custom-profile-border rounded-pill">
                  <Button className="bg-transparent rounded-pill border-0 text-secondary btn btn-secondary px-2 pt-2 d-flex align-items-center justify-content-center">
                    <FaBars className="mx-2" style={{ fontSize: "12px" }} />
                    <span
                      className="mx-1 text-secondary"
                      style={{ fontSize: "18px", marginTop: "-4px" }}
                    >
                      <FaCircleUser height={"auto"} />
                    </span>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Tab --Start */}

          {navbar ? null : (
            <Row className="custom-main-border rounded-pill mb-2 d-flex justify-content-center align-items-center m-auto custom-width-100 main-submenu">
              <Nav tabs className="border-0 pe-0">
                <NavItem className="w-35">
                  <NavLink
                    className={`p-0 ${activeTab == "1" ? "active" : ""}`}
                    onClick={() => setActiveTab("1")}
                  >
                    <Row className="d-flex align-items-center py-2 px-3">
                      <Col xs={10} className="active">
                        <p
                          className="fcw-medium text-dark text-start"
                          onClick={() => {
                            toggle("1");
                          }}
                        >
                          {" "}
                          Where{" "}
                        </p>
                        <Input
                          type="text"
                          bsSize="sm"
                          className="bg-transparent border-0 p-0 text-secondary "
                          placeholder="Search destinations"
                          value={inputvalue}
                          onChange={handleInputCountries}
                        />
                      </Col>
                      {activeTab == "1" && (
                        <Col
                          xs={2}
                          className={`text-end ${
                            crossbtn === true ? "d-block" : "d-none"
                          }`}
                          onClick={handleClearField}
                        >
                          <FaXmark className="bg-light-sec custom-w-h rounded-pill text-dark p-1" />
                        </Col>
                      )}
                    </Row>
                  </NavLink>
                </NavItem>

                {activeCTab === "Stay" && (
                  <>
                    <NavItem className="w-15">
                      <NavLink
                        className={`p-0 ${activeTab == "2" ? "active" : ""}`}
                        onClick={() => setActiveTab("2")}
                      >
                        <Col className=" text-start py-2 px-3">
                          <div className="fcw-medium text-dark text-start">
                            Check in <br />
                            {datepicker[0].startDate ? (
                              <Input
                                type="text"
                                bsSize="sm"
                                className="bg-transparent border-0 p-0 text-secondary "
                                disabled
                                value={`${datepicker[0].startDate.toLocaleDateString()}`}
                              />
                            ) : (
                              <p className="mb-0 fsw-400 text-muted">
                                Add dates
                              </p>
                            )}
                          </div>
                        </Col>
                      </NavLink>
                    </NavItem>
                    <NavItem className="w-15">
                      <NavLink
                        className={`p-0 ${activeTab == "3" ? "active" : ""}`}
                        onClick={() => setActiveTab("3")}
                      >
                        <Col className="text-start py-2 px-3">
                          <div className=" fcw-medium text-dark text-start">
                            {" "}
                            Check out <br />
                            {datepicker[0].startDate ? (
                              <Input
                                type="text"
                                bsSize="sm"
                                className="bg-transparent border-0 p-0 text-secondary "
                                placeholder="Add dates"
                                disabled
                                value={`${datepicker[0].endDate.toLocaleDateString()}`}
                              />
                            ) : (
                              <p className="mb-0 fsw-400 text-muted">
                                Add dates
                              </p>
                            )}
                          </div>
                        </Col>
                      </NavLink>
                    </NavItem>
                  </>
                )}

                {activeCTab === "Experience" && (
                  <NavItem className="w-30">
                    <NavLink
                      className={`p-0 ${activeTab == "2" ? "active" : ""}`}
                      onClick={() => setActiveTab("2")}
                    >
                      <Col className="text-start py-2 px-3">
                        <div className=" fcw-medium text-dark text-start">
                          {" "}
                          Date <br />
                          {datepicker[0].startDate && datepicker[0].endDate ? (
                            <Input
                              type="text"
                              bsSize="sm"
                              className="bg-transparent border-0 p-0 text-secondary "
                              placeholder="Add dates"
                              value={` ${datepicker[0].startDate.toLocaleDateString()} - ${datepicker[0].endDate.toLocaleDateString()} `}
                            />
                          ) : (
                            <p className="mb-0 fsw-400 text-muted">Add dates</p>
                          )}
                        </div>
                      </Col>
                    </NavLink>
                  </NavItem>
                )}

                <NavItem className="w-35">
                  <NavLink
                    className={`p-0 ${activeTab == "4" ? "active" : ""}`}
                    onClick={() => setActiveTab("4")}
                  >
                    <div className="d-flex justify-content-between align-items-center py-2 px-3">
                      <Col xs={6} className="text-start">
                        <p className="mb-0 fcw-medium text-dark">
                          {" "}
                          Who <br />
                          <Input
                            type="text"
                            bsSize="sm"
                            className="bg-transparent border-0 p-0 text-secondary"
                            placeholder="Add guests"
                          />
                        </p>
                      </Col>
                      <Col xs={6} className="text-end">
                        <Button
                          className="bg-custom-primary rounded-pill border-0 text-white px-4 py-2 text-truncate"
                          onClick={handleSearchClick}
                        >
                          <FaSistrix height={15} width={15} className="me-2" />
                          Search
                        </Button>
                      </Col>
                    </div>
                  </NavLink>
                </NavItem>
              </Nav>
            </Row>
          )}

          {navbar ? null : (
            <TabContent
              activeTab={activeTab}
              className="d-flex justify-content-center align-items-center"
            >
              {showTab1 === true || showTab2 === false ? (
                <TabPane tabId="1" className="custom-tab1">
                  <Card
                    className="bg-white p-4 pb-lg-4 pb-md-0 overflow-auto"
                    style={{ height: "410px" }}
                  >
                    <p className="mb-0 text dark fsw-600">Search by region</p>
                    <Row className="d-flex justify-content-center align-items-center py-3">
                      {SelectedLocation?.map((item, id) => {
                        return (
                          <Col key={id} xs={4} className="py-3">
                            <a
                              className=""
                              href="#"
                              onClick={() => handleSelectedLocation(item)}
                            >
                              <img
                                src={item.image}
                                className="w-100 custom-img-brd"
                                alt=""
                              />
                              <p className="mb-0 ps-1 fsw-400 text-truncate text-secondary">
                                {item.countryName}
                              </p>
                            </a>
                          </Col>
                        );
                      })}
                    </Row>
                  </Card>
                </TabPane>
              ) : (
                <TabPane tabId="1" className="custom-subTab1">
                  <Row>
                    <Col sm="12">
                      <Card
                        body
                        className="bg-white py-4 px-0 pb-lg-4 pb-md-0 overflow-auto"
                        style={{ height: "360px" }}
                      >
                        {filtercountries?.map((country, index) => {
                          return (
                            <a
                              key={index}
                              className="d-flex justify-content-center align-items-center custom-SubTab py-2"
                              onClick={() => {
                                handleSelectInputCountry(country);
                                setInputValue(country.name);
                              }}
                            >
                              <Col xs={2} className="text-end">
                                <img
                                  src={location}
                                  className="custom-img-icon"
                                />
                              </Col>
                              <Col xs={10} className="fs-6 px-3 text-dark">
                                <p className="mb-0 fs-6 text-dark">
                                  {country.name}
                                </p>
                              </Col>
                            </a>
                          );
                        })}
                      </Card>
                    </Col>
                  </Row>
                </TabPane>
              )}

              <TabPane tabId="2">
                <div className="custom-tab2">
                  <Col sm="12">
                    <Card body className="bg-white">
                      <DateRangePicker
                        onChange={handleSelectedDateRange}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={
                          datepicker[0].startDate === "" &&
                          datepicker[0].endDate === ""
                            ? initialState
                            : datepicker
                        }
                        minDate={new Date()}
                        direction="horizontal"
                      />
                    </Card>
                  </Col>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="custom-tab2">
                  <Col sm="12">
                    <Card body className="bg-white">
                      <DateRangePicker
                        onChange={handleSelectedDateRange}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={
                          datepicker[0].startDate === "" &&
                          datepicker[0].endDate === ""
                            ? initialState
                            : datepicker
                        }
                        minDate={new Date()}
                        direction="horizontal"
                      />
                    </Card>
                  </Col>
                </div>
              </TabPane>
              <TabPane tabId="4" className="custom-tab4">
                <Row>
                  <Col sm="12">
                    <Card body className="bg-white overflow-auto">
                      <div className="d-flex justify-content-between border-bottom p-3">
                        <p className="fcw-medium  text-start fs-6">
                          Adults <br />
                          <span className="text-secondary fsw-400">
                            Ages 13 or above
                          </span>
                        </p>
                        <div className="d-flex align-items-center">
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={adultcounter <= 0 || disableAdult}
                          >
                            <FaMinus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                adultcounter <= 0 || disableAdult
                                  ? "disabled"
                                  : ""
                              }`}
                              onClick={() =>
                                dispatch(DecrementAdultCounter(adultcounter))
                              }
                            />
                          </Button>
                          <p
                            className="mb-0 text-center"
                            style={{ width: "30px" }}
                          >
                            {adultcounter}
                            {adultcounter >= 16 ? <span>+</span> : null}
                          </p>
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={adultcounter >= 16}
                          >
                            <FaPlus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                adultcounter >= 16 ? "disabled" : ""
                              }`}
                              onClick={() =>
                                dispatch(IncrementAdultCounter(adultcounter))
                              }
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between border-bottom p-3">
                        <p className="fcw-medium  text-start fs-6">
                          Children
                          <br />
                          <span className="text-secondary fsw-400">
                            Ages 2-12
                          </span>
                        </p>
                        <div className="d-flex align-items-center">
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={childcounter <= 0 || adultcounter >= 16}
                          >
                            <FaMinus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                childcounter <= 0 || adultcounter >= 16
                                  ? "disabled"
                                  : ""
                              }`}
                              onClick={() =>
                                dispatch(DecrementChildCounter(childcounter))
                              }
                            />
                          </Button>
                          <p
                            className="mb-0 text-center"
                            style={{ width: "30px" }}
                          >
                            {childcounter}
                          </p>
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={childcounter >= 15 || adultcounter >= 16}
                          >
                            <FaPlus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                childcounter >= 15 || adultcounter >= 16
                                  ? "disabled"
                                  : ""
                              }`}
                              onClick={() =>
                                dispatch(IncrementChildCounter(childcounter))
                              }
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between border-bottom p-3">
                        <p className="fcw-medium  text-start fs-6">
                          Infants
                          <br />
                          <span className="text-secondary fsw-400">
                            Under 2
                          </span>
                        </p>
                        <div className="d-flex align-items-center">
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={infantcounter <= 0}
                          >
                            <FaMinus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                infantcounter <= 0 ? "disabled" : ""
                              }`}
                              onClick={() =>
                                dispatch(DecrementInfantCounter(infantcounter))
                              }
                            />
                          </Button>
                          <p
                            className="mb-0 text-center"
                            style={{ width: "30px" }}
                          >
                            {infantcounter}
                          </p>
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={infantcounter >= 5}
                          >
                            <FaPlus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                infantcounter >= 5 ? "disabled" : ""
                              }`}
                              onClick={() =>
                                dispatch(IncrementInfantCounter(infantcounter))
                              }
                            />
                          </Button>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between p-3">
                        <p className="fcw-medium  text-start fs-6">
                          Pets
                          <br />
                          <a className="text-secondary text-truncate fsw-400">
                            Bringing a Service animal?
                          </a>
                        </p>
                        <div className="d-flex align-items-center">
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={petcounter <= 0}
                          >
                            <FaMinus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                petcounter <= 0 ? "disabled" : ""
                              }`}
                              onClick={() =>
                                dispatch(DecrementPetCounter(petcounter))
                              }
                            />
                          </Button>
                          <p
                            className="mb-0 text-center"
                            style={{ width: "30px" }}
                          >
                            {petcounter}
                          </p>
                          <Button
                            className="bg-transparent border-0 text-dark"
                            disabled={petcounter >= 5}
                          >
                            <FaPlus
                              className={`rounded-pill border cst-brd text-dark p-2 custom-icon ${
                                petcounter >= 5 ? "disabled" : ""
                              }`}
                              onClick={() =>
                                dispatch(IncrementPetCounter(petcounter))
                              }
                            />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          )}

          {/* Tab -- End */}
        </div>

        <MobileNavbar
          inputvalue={inputvalue}
          setInputValue={setInputValue}
          handleInputCountries={handleInputCountries}
          handleSelectedLocation={handleSelectedLocation}
          handleSelectInputCountry={handleSelectInputCountry}
          handleSearchClick={handleSearchClick}
          handleClearField={handleClearField}
          handleSelectedDateRange={handleSelectedDateRange}
        />

        {/* <Home 
      navbar={navbar} 
      searchData={searchData}
      /> */}
      </div>
    </>
  );
}

export default Navbar;
