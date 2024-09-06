import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeatureSection() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("/features.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error fetching features:", error));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px",
    autoplay: true, // Auto-scroll enabled
    autoplaySpeed: 3000, // Speed of autoplay in milliseconds
    pauseOnHover: true, // Pause on hover enabled
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "1px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "1px",
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="text-center mb-6">
        <p className="text-violet-800 text-xl font-extrabold uppercase p-3">
          Features
        </p>
        <p className="pb-3 md:text-4xl text-xl font-extrabold">
          Our Web Hosting Features
        </p>
      </div>

      <div className="block lg:hidden m-2">
        <Slider {...settings}>
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative border-2 rounded-lg p-6 shadow-lg h-[350px] w-[350px] transition-all duration-300 ease-in-out overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none"></div>

              <img
                src={feature.image}
                alt={feature.title}
                className="h-16 w-16 aspect-square border-2 bg-white p-1 rounded-md relative z-10"
              />
              <h3 className="text-xl font-bold my-4 relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out">
                {feature.title}
              </h3>
              <p className="text-gray-600 my-4 h-[140px] relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out">
                {feature.description}
              </p>
              <a
                href="https://rachhadiyayash.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out cursor-pointer"
              >
                Learn More
              </a>
            </div>
          ))}
        </Slider>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="group relative rounded-lg p-6 shadow-lg h-[340px] w-[350px] transition-all duration-300 ease-in-out overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-in-out pointer-events-none"></div>

            <img
              src={feature.image}
              alt={feature.title}
              className="h-16 w-16 aspect-square border-2 bg-white p-1 rounded-md relative z-10"
            />
            <h3 className="text-xl font-bold my-4 relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out">
              {feature.title}
            </h3>
            <p className="text-gray-600 my-4 h-[120px] relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out">
              {feature.description}
            </p>
            <a
              href="https://rachhadiyayash.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 relative z-10 group-hover:text-cyan-900 transition-colors duration-300 ease-in-out cursor-pointer"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
