"use client";
import { faChevronRight, faCircle } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import ImageDesert from "@/public/imageDesert.jpg";
import Link from "next/link";
import OutlinedComponent from "./outlinedComponent";

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
  const FAiconClass =
    "text-[#ECF86E] border-2 border-[#ECF86E] p-1 rounded-full";
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {problemTitles.map((items, index) => (
        <div className="flex flex-wrap w-full p-2 overflow-hidden rounded-3xl relative">
          <div className="tags flex flex-wrap items-center gap-2 w-4/5">
            <FontAwesomeIcon icon={faCircle} className={FAiconClass} />
            {items.tags.map((items, index) => (
              <OutlinedComponent
                key={index}
                title={items}
                additionalClass="border-[#ECF86E] text-[#ECF86E]"
              />
            ))}
            <FontAwesomeIcon icon={faCircle} className={FAiconClass} />
          </div>
          <button
            onClick={() => handleToggle(index)}
            className="rounded-full bg-[#ECF86E] w-12 h-12"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <div className="w-full">
            <p className="text-white text-2xl manrope-600">{items.title}</p>
            <p className="text-white">{items.body}</p>
          </div>
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
