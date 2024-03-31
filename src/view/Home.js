import React, { useEffect, useMemo, useState } from "react";
import { FaStar } from "react-icons/fa6";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
  Spinner,
} from "reactstrap";
import { HomeCardList } from "../data_files/HomeCardList";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCard from "../components/PropertyCard";
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../store/actions/propertiesAction";
var isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
dayjs.extend(isSameOrAfter);
var isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);

function Home({ navbar, searchData }) {
  const dispatch = useDispatch();

  const { properties, isLoading } = useSelector((state) => state.allProperties);

  console.log(properties, "properties");

  const [HomeCards] = useState(HomeCardList);
  const [numberOfCardShow, setNumberOfCardsShow] = useState(8);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const showmore = () => {
    if (numberOfCardShow + 8 <= HomeCards.length) {
      setNumberOfCardsShow(numberOfCardShow + 8);
    } else {
      setNumberOfCardsShow(HomeCards.length);
      setShowMoreBtn(true);
    }
  };

  // const itemsToShow = useMemo(() => {
  //   if (searchData) {
  //     const isOnlyCountry = searchData.startSelectedDate?.length === 0;

  //     const selectedStartDate = dayjs(searchData.startSelectedDate, {
  //       format: "MM/DD/YYYY",
  //     });
  //     const selectedEndDate = dayjs(searchData.endSelectedDate, {
  //       format: "MM/DD/YYYY",
  //     });

  //     const filteredByCountry = HomeCards.filter(
  //       (item) =>
  //         item.PlaceName.split(", ")[1]?.toLowerCase() === searchData.inputvalue
  //     );

  //     const filteredByDateRange = HomeCards.filter((item) => {
  //       const CardDateStart = dayjs(item.startDate, { format: "MM/DD/YYYY" });
  //       const CardDateEnd = dayjs(item.endDate, { format: "MM/DD/YYYY" });
  //       return (
  //         CardDateStart >= selectedStartDate && CardDateEnd <= selectedEndDate
  //       );
  //     });

  //     let finalFilteredResults = [];

  //     if (
  //       !isOnlyCountry &&
  //       searchData.inputvalue &&
  //       searchData.startSelectedDate &&
  //       searchData.endSelectedDate
  //     ) {
  //       finalFilteredResults = filteredByCountry.filter((item) => {
  //         return (
  //           filteredByDateRange.includes(item) &&
  //           item.PlaceName.split(", ")[1]?.toLowerCase() ===
  //             searchData.inputvalue
  //         );
  //       });
  //     } else if (
  //       !isOnlyCountry &&
  //       searchData.startSelectedDate &&
  //       searchData.endSelectedDate
  //     ) {
  //       finalFilteredResults = filteredByDateRange;
  //     } else {
  //       finalFilteredResults = filteredByCountry;
  //     }

  //     return finalFilteredResults.slice(0, numberOfCardShow);
  //   } else {
  //     return HomeCards.slice(0, numberOfCardShow);
  //   }
  // }, [HomeCards, numberOfCardShow, searchData]);

  // console.log(itemsToShow, "itemsToShow");

  useEffect(() => {
    dispatch(getProperties());
  }, []);

  return (
    <>
      <div className={`${navbar ? "" : "custom-bg-Home"}`}>
        <Container className="bg-white py-4" fluid>
          <Row className="mx-md-3 mx-1">
            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center mt-5">
                <Spinner />
              </div>
            ) : (
              properties?.map((item, index) => (
                <PropertyCard key={index} item={item} index={index} />
              ))
            )}
          </Row>
          <Row className="d-flex justify-content-center align-items-center mx-0 my-4 text-center w-100">
            <Col className="px-2">
              <p className="text-dark h5 text-wrap">
                Continue to exploring More Places
              </p>
              {showMoreBtn === false ? (
                <Button className="btn-dark" onClick={showmore}>
                  {numberOfCardShow >= HomeCards.length
                    ? "No More Data"
                    : "Show More"}
                </Button>
              ) : null}
              {numberOfCardShow > 8 && (
                <Button
                  className="btn-dark mx-3"
                  onClick={() => setNumberOfCardsShow(8)}
                >
                  Show Less
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
