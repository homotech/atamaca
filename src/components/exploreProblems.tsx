"use client";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import ImageDesert from "@/public/imageDesert.jpg";
import Link from "next/link";

const ExploreProblems = () => {
  const [openProblems, setOpenProblems] = useState(null);
  const handleToggle = (index: any | React.SetStateAction<null>) => {
    setOpenProblems(openProblems === index ? null : index);
    console.log(index);
    console.log(openProblems);
  };
  const problemTitles = [
    {
      title: "Ocean Pollution",
      tags: ["Ecological Catastrophy", "Pollution Issues"],
      body: "Millions of tons of plastic threaten the lives of aquatic animals and ecosystem",
      image: ImageDesert,
      alt: "",
    },
    {
      title: "Ocean Pollution",
      tags: ["Ecological Catastrophy", "Pollution Issues"],
      body: "Millions of tons of plastic threaten the lives of aquatic animals and ecosystem",
      image: ImageDesert,
      alt: "",
    },
    {
      title: "Ocean Pollution",
      tags: ["Ecological Catastrophy", "Pollution Issues"],
      body: "Millions of tons of plastic threaten the lives of aquatic animals and ecosystem",
      image: ImageDesert,
      alt: "",
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {problemTitles.map((items, index) => (
        <div className="w-full p-2 overflow-hidden rounded-3xl relative">
          <div>
            <p className="text-white text-2xl manrope-600">{items.title}</p>
            <p className="text-white">{items.body}</p>
          </div>
          <button
            onClick={() => handleToggle(index)}
            className="p-4 rounded-full bg-[#ECF86E]"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <Link
            href="/"
            className="uppercase bg-white p-4 flex justify-between items-center rounded-full w-full"
          >
            <span>Explore Problems</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
          <Image
            src={ImageDesert}
            alt="image of a desert meeting a water body"
            className="absolute w-full h-full top-0 left-0 z-[-1] object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ExploreProblems;
