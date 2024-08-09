"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import OutlinedComponent from "./outlinedComponent";
import Image from "next/image";
import ImageBeach from "@/public/imageBeach.jpeg";
import ImageTreePlanting from "@/public/imageTreePlanting.jpeg";
import ImageEducationalEvents from "@/public/imageEducationalEvents.jpg";
import ImageParkCleaning from "@/public/imageParkCleaning.jpeg";

const Initiatives = () => {
  const [showImage, setShowImage] = useState(null);

  const toggleSetImage = (id) => {
    setShowImage((prevId) => (prevId === id ? null : id));
    console.log(id);
  };
  const listDetails = [
    {
      title: "Tree Planting",
      tags: ["green and cleaner"],
      dates: "12/03/23",
      image: ImageTreePlanting,
      alt: "A tree planting experience",
    },
    {
      title: "Beach Cleanup",
      tags: ["future generations"],
      dates: "29/05/23",
      image: ImageBeach,
      alt: "Group of people cleaning a beach",
    },
    {
      title: "Educational Events",
      tags: ["courses", "green Initiatives"],
      dates: "06/06/23",
      image: ImageEducationalEvents,
      alt: "An educational event on the climate battle",
    },
    {
      title: "Park Cleaning",
      tags: ["day off cleaning"],
      dates: "18/08/23",
      image: ImageParkCleaning,
      alt: "A group of people cleaning a park",
    },
  ];
  const subHeader = [
    { title: "titles", className: "w-2/6 text-[#898C8D] capitalize" },
    { title: "tags", className: "w-3/6 text-[#898C8D] capitalize" },
    { title: "dates", className: "1-2/6 text-[#898C8D] capitalize" },
    { title: "", className: "w-12 text-[#898C8D] capitalize" },
  ];
  return (
    <div className="p-4">
      {/* the header*/}
      <div className="flex flex-wrap justify-between mb-4 mt-2">
        <h1 className="text-4xl manrope-600 w-full">
          Our initiatives for 2023
        </h1>
        <p className="text-sm text-[#898C8D] w-72">
          Find out what projects we are implementing to protect nature
        </p>
      </div>

      <div className="lists">
        <div className="subheadings flex justify-between gap-2">
          {subHeader.map((item, index) => (
            <p className={item.className} key={index}>
              {item.title}
            </p>
          ))}
        </div>
        {listDetails.map((item, index) => (
          <div
            className="listItem relative flex flex-wrap border-t mt-2 py-2 "
            key={index}
          >
            <div className="w-full flex justify-between items-center gap-2">
              {/* title  */}
              <p className="w-2/6 text-lg manrope-600 lg:w-1/6 text-wrap">
                {item.title}
              </p>

              {/* tags */}
              <div className="w-3/6 lg:w-3/8 flex flex-wrap items-start">
                {item.tags.map((items, index) => (
                  <OutlinedComponent
                    title={items}
                    additionalClass="w-fit text-xsm manrope-500"
                  />
                ))}
              </div>

              {/* dates */}
              <p className="w-1/6 lg:w-3/8">{item.dates}</p>

              {/* The button that drops it down */}
              <div className="w-12 lg:w-1/8 flex justify-center items-center">
                <button className="w-8 h-8 text-base rounded-full bg-white">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    onClick={() => toggleSetImage(index)}
                  />
                </button>
              </div>
            </div>
            {showImage === index && (
              <div
                className={`w-full lg:h-128 lg:absolute lg:top-0 relative lg:mt-4 w-full h-auto flex justify-center items-center my-8`}
              >
                <div className="rounded-xl overflow-hidden absolute lg:relative h-48 w-2/3 lg:w-48 lg:h-36 lg:ml-92 -rotate-6">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#ECF86E] w-2/3 h-48 lg:w-48 lg:h-36 rounded-xl"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
