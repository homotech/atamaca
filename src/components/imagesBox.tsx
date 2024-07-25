import { faArrowDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";
import imageOne from "@/public/imagesbox1.jpg";
import imageTwo from "@/public/imagesbox2.jpg";

function ImagesBox() {
  const imageBoxClassName =
    "w-full h-64 rounded-[96px] overflow-hidden flex justify-center items-center relative";
  const paragraphClassName = "relative z-10 text-white text-6xl";
  const imageClassName = "w-full h-full object-cover absolute top-0 left-0";
  return (
    <div className="flex flex-col lg:flex-row px-4">
      <div className={`bg-[#F6F6F6] ${imageBoxClassName}`}>
        <p className={`text-black relative z-10 text-6xl`}>We</p>
      </div>
      <div className={`${imageBoxClassName}`}>
        <p className={paragraphClassName}>Protect</p>
        <Image
          src={imageOne}
          alt="Antartica Image"
          className={imageClassName}
        ></Image>
      </div>
      <div className={`bg-[#ECF86E] ${imageBoxClassName}`}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-8xl hidden md:flex"
        />
        <FontAwesomeIcon icon={faArrowDown} className="text-8xl md:hidden" />
      </div>
      <div className={`${imageBoxClassName} relative flex`}>
        <p className={` ${paragraphClassName}`}>Nature</p>
        <Image
          src={imageTwo}
          alt="Images of rocks"
          className={imageClassName}
        ></Image>
      </div>
    </div>
  );
}

export default ImagesBox;
