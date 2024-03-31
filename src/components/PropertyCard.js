import React from "react";
import { FaStar } from "react-icons/fa6";
import { Card, CardBody, CardSubtitle, CardTitle, Col } from "reactstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dayjs from "dayjs";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const PropertyCard = ({ item, index }) => {
  return (
    <Col key={index} lg={3} md={4} className="my-1">
      <Card
        className="border-0"
        //  onClick={() => navigate('cardSubPage')}
      >
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {item?.propertyImages?.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={image} className="w-100" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Link to={`cardSubPage/${item.id}`}>
          <CardBody className="px-1">
            <CardTitle
              tag="h6"
              className="d-flex justify-content-between mb-1 w-100"
            >
              <span className="text-truncate text-black">
                {item?.selectedCity},{item?.selectedState}
              </span>
              <span className="fsw-400 fs-6 text-nowrap text-black">
                <FaStar
                  className="mb-1"
                  style={{ width: "14px", height: "auto" }}
                />
                {item.rating}.{Math.floor(Math.random() * 90 + 10)}
              </span>
            </CardTitle>
            <CardSubtitle className="card-subtitle text-muted text-truncate fsw-400 fs-6">
              {item.AwayInKilometers}
              <p className="mb-1 text-muted fcs-15">
                {" "}
                {item?.startingDate} {item?.startingDay} - {item?.endingDate}{" "}
                {item.endingDay}{" "}
              </p>
            </CardSubtitle>
            <a className="">
              <span className="text-dark fcs-600">
                <span className="font-bold">
                  ${item?.priceDetails?.pricePerNight}
                </span>
              </span>
              <span className="mx-1 text-dark">
                {" "}
                {item?.priceDetails?.roomType === "true" ? "per bed" : "night"}
              </span>
            </a>
          </CardBody>
        </Link>
      </Card>
    </Col>
  );
};

export default PropertyCard;
