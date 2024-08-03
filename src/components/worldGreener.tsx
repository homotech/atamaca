import React from "react";
import Button from "./button";
import { faArrowRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ImageOne from "@/public/ImageOne.jpg";
import ImageTwo from "@/public/ImageTwo.jpg";
import ImageThree from "@/public/ImageThree.jpg";
import ImageFour from "@/public/ImageFour.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function WorldGreener() {
  const ImageDetailsOne = [
    {
      ImageSrc: ImageOne,
      alt: "Image of the Carribean",
      classname:
        "border border-[#ECF86E] w-12 h-12 overflow-hidden md:relative rounded-full",
    },
    {
      ImageSrc: ImageTwo,
      alt: "Image of the Desert",
      classname:
        "border border-[#ECF86E] w-12 h-12 overflow-hidden md:relative rounded-full md:ml-8 lg:ml-16 md:mt-16",
    },
  ];
  const ImageDetailsTwo = [
    {
      ImageSrc: ImageThree,
      alt: "Image of the Sea Waves",
      classname:
        "border border-[#ECF86E] w-12 h-12 overflow-hidden md:relative rounded-full md:mr-8 lg:mr-16 md:mt-16",
    },
    {
      ImageSrc: ImageFour,
      alt: "Image of the Mountain",
      classname:
        "border border-[#ECF86E] w-12 h-12 overflow-hidden md:relative rounded-full ",
    },
  ];
  return (
    <div className="my-8 h-auto md:relative">
      <div className="flex justify-center md:justify-between my-4 md:absolute md:top-1/4 md:w-full md:px-12 lg:px-18 xl:px-24 ">
        <div className="flex">
          {ImageDetailsOne.map((item, index) => (
            <div className={item.classname} key={index}>
              <Image src={item.ImageSrc} alt={item.alt}></Image>
            </div>
          ))}
        </div>
        <div className="flex">
          {ImageDetailsTwo.map((item, index) => (
            <div className={item.classname} key={index}>
              <Image src={item.ImageSrc} alt={item.alt}></Image>
            </div>
          ))}
        </div>
      </div>
      <h3 className="px-8 text-4xl text-center manrope-500 sm:text-4xl md:text-4xl lg:text-6xl md:w-2/3 md:m-auto">
        Let's make our world Cleaner & Greener!
      </h3>
      <p className="w-2/3 m-auto text-center mt-4 md:w-1/3">
        We work with our partners & communities to ensure nature thrives and
        climate change is reversed
      </p>
      <div className="buttons flex justify-center mt-4">
        <Button
          title="View Projects"
          icons={faArrowRight}
          additionalClass="border-gray-400 border-2 hover:border-0"
        />
        <Link
          href="/learn-more"
          className="bg-white flex items-center gap-2 rounded-full px-4 py-3 border-0 border-full  w-fit"
        >
          <span className="text-[#ECF86E]">
            <FontAwesomeIcon
              icon={faCircleDot}
              className="text-[#ECF86E] w-3"
            />
          </span>
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default WorldGreener;
