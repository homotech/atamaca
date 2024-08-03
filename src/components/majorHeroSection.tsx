"use client";
import {
  faArrowLeftRotate,
  faArrowRight,
  faArrowUp,
  faCircle,
  faCircleArrowRight,
  faCircleDot,
  faMouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarOne from "@/public/avatarOne.png";
import AvatarTwo from "@/public/avatarTwo.png";
import AvatarThree from "@/public/avatarThree.png";
import DottedCircle from "@/public/DottedCircle.svg";
import React from "react";
import Image from "next/image";
import InputComponent from "./inputComponent";
import Button from "./button";
import OutlinedComponent from "./outlinedComponent";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import MHSImage from "@/public/majorHeroSectionImage.jpg";

const MajorHeroSection = () => {
  const avatars = [
    {
      id: 1,
      img: AvatarOne,
      classN:
        "rounded-full w-12 h-12 overflow-hidden relative  border-4 border-white z-one",
      alt: "Matthew",
    },
    {
      id: 2,
      img: AvatarTwo,
      classN:
        "rounded-full w-12 h-12 overflow-hidden relative -ml-4 border-4 border-white z-two",
      alt: "Andrew",
    },
    {
      id: 3,
      img: AvatarThree,
      classN:
        "rounded-full w-12 h-12 overflow-hidden relative -ml-4 border-4 border-white z-three",
      alt: "Roland",
    },
  ];
  return (
    <div className="flex flex-col p-4">
      <div className="bg-[#ECF86E] px-4 pt-4 rounded-2xl">
        <p className="text-4xl text-center">
          Saving{" "}
          <Image
            src={DottedCircle}
            className="inline w-1/12"
            alt="A dotted circle Icon"
          />{" "}
          Nature & Fighting <u>Climate</u> Change together.
        </p>
        <form
          action=""
          className="flex justify-between mt-4 w-full gap-2 md:mb-6 "
        >
          <InputComponent
            additionalClass="bg-[#F4FBA8] placeholder:text-black"
            placeholder="Enter Email Address"
          ></InputComponent>
          <Button
            title="Subscribe"
            icons={faArrowRight}
            additionalClass=""
          ></Button>
        </form>
        <div className="flex gap-4 mt-4  w-10/12 align-center mx-auto">
          <div className="flex">
            {avatars.map((item) => (
              <div key={item.id} className={item.classN}>
                <Image src={item.img} alt={item.alt} />
              </div>
            ))}
          </div>
          <p className="">1.7M+ members of our charity organization</p>
        </div>
        <div className="curved-rectangle w-16 mx-auto mt-4 h-8 bg-white relative"></div>
      </div>
      <div className="icon relative z-10 flex justify-center align-center h-4 border-2 border-red-200">
        <FontAwesomeIcon icon={faMouse} className="text-4xl -m-4" />
      </div>
      <div className="rounded-2xl overflow-hidden">
        Testing
        <div className="we-and-our-volunteers">
          <div className="bg-[#ECF86E] w-12 h-12 rounded-full flex justify-center items-center">
            <FontAwesomeIcon className="rotate-45 text-2xl" icon={faArrowUp} />
          </div>
          <div></div>
          <div>
            <FontAwesomeIcon
              icon={faCircle}
              className="p-1 border border-red-200 rounded-full"
            />
            <p>We & our volunteers.</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border border-red-200 rounded-full"
          />
          <OutlinedComponent title="GHG Emissions" additionalClass="" />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border border-red-200 rounded-full"
          />
          <OutlinedComponent title="Ocean Pollution" additionalClass="" />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border border-red-200 rounded-full"
          />
          <OutlinedComponent title="Deforestations" additionalClass="" />
        </div>
        <div className="flex">
          <OutlinedComponent
            title={<FontAwesomeIcon icon={faInstagram} />}
            additionalClass=""
          />
          <OutlinedComponent
            title={<FontAwesomeIcon icon={faFacebook} />}
            additionalClass=""
          />{" "}
          Find us on social networks
        </div>
        <Image src={MHSImage} alt="An Image of a desert" className="" />
      </div>
    </div>
  );
};
export default MajorHeroSection;
