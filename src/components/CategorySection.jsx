import React from "react";
import CardContent from "./CardContent";
import { Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function CategorySection({ category, contents }) {
  console.log(`Category ${category.name} debug`);
  console.log(category);
  console.log(contents);
  return (
    <Row>
      <h1 className="mb-3" style={{ color: category.color }}>
        {category.name}
      </h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {contents.map((content) => {
          return (
            <SwiperSlide>
              <CardContent
                className="card-content"
                key={content.id}
                content={content}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Row>
  );
}
