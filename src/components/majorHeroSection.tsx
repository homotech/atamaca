"use client";
import {
  faArrowRight,
  faArrowUp,
  faCircle,
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
import Volunteers from "@/public/Volunteers.jpg";

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
      <div className="bg-[#ECF86E] px-4 pt-8 rounded-2xl">
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
      <div className="icon relative z-10 flex justify-center items-center h-4">
        <FontAwesomeIcon icon={faMouse} className="text-4xl" />
      </div>
      <div className="rounded-2xl overflow-hidden relative">
        <div className="curved-rectangle-buttom w-16 mx-auto h-8 bg-white relative"></div>

        {/* We and our Volunteers  */}
        <div className="we-and-our-volunteers flex flex-row w-48 ml-2 overflow-hidden relative">
          <div className="bg-[#ECF86E] w-8 h-8 rounded-full flex justify-center items-center absolute right-0">
            <FontAwesomeIcon className="rotate-45 text-2xl" icon={faArrowUp} />
          </div>
          <div className="overflow-hidden w-1/2 p-2">
            <Image
              src={Volunteers}
              className="rounded-xl"
              alt="A photo of one of our team mates"
            />
          </div>
          <div className="w-1/2 mt-auto p-2">
            <FontAwesomeIcon
              icon={faCircle}
              className="p-1 border-2 text-xs border-[#ECF86E] rounded-full text-[#ECF86E]"
            />
            <p className="manrope-600 leading-5 text-sm">We & our volunteers</p>
          </div>
          <div className="absolute w-full h-full flex">
            <div className=" z-[-1] w-4/5 h-full rounded-l-2xl rounded-t-2xl bg-white bottom-0 left-0"></div>
            <div className="half-rect relative z-[-1] w-1/5 h-24 rounded-r-2xl bg-white top-0 left-0 mt-auto"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border-2 text-[#ECF86E] border-[#ECF86E] rounded-full"
          />
          <OutlinedComponent
            title="GHG Emissions"
            additionalClass="text-[#ECF86E] border-[#ECF86E]"
          />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border-2 text-[#ECF86E] border-[#ECF86E] rounded-full"
          />
          <OutlinedComponent
            title="Ocean Pollution"
            additionalClass="text-[#ECF86E] border-[#ECF86E]"
          />
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCircle}
            className="p-1 border-2 text-[#ECF86E] border-[#ECF86E] rounded-full"
          />
          <OutlinedComponent
            title="Deforestations"
            additionalClass="text-[#ECF86E] border-[#ECF86E]"
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex p-1 border-2 text-[#ECF86E] border-[#ECF86E] rounded-full w-8 h-8 justify-center items-center">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="flex p-1 border-2 text-[#ECF86E] border-[#ECF86E] rounded-full w-8 h-8 justify-center items-center">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <p className="text-[#ECF86E]">Find us on social networks</p>
        </div>
        <div className="bg-white flex w-64 ml-auto rounded-l-2xl px-2">
          <p className="text-xs ">
            We are an organization dedicated to protecting the environment &
            nature.
          </p>
        </div>
        <div className="rotate-12 bg-white absolute h-16 w-8 top-80 left-[124px] z-[-1] rounded-t-2xl"></div>
        <Image
          src={MHSImage}
          alt="An Image of a desert"
          className="w-full h-full object-cover absolute top-0 left-0 z-[-5]"
        />
      </div>
    </div>
  );
};
export default MajorHeroSection;
