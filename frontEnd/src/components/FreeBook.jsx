import React, { useEffect, useState } from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import axios from "axios";


const FreeBook = () => {
  // const filterData = list.filter((data) => data.category === "Free");
  // console.log(filterData);

  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:8080/book");
        const filterData = res.data.filter((data) => data.category === "Free");
        setBook(filterData);
        console.log(filterData);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto py-4 md:px-20 px-4 ">
        <div>
          <h1 className="pb-2 text-2xl font-semibold">Free Offerd Courses</h1>
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            omnis libero voluptate eos rerum cumque magnam natus autem
            consequatur reiciendis.
          </p>
        </div>

        <div className="p-4">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FreeBook;
