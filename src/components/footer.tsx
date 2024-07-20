import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import OutlinedComponent from "./outlinedComponent";

export default function Footer() {
  const classN =
    "border-gray-400 text-gray-400 text-center hover:bg-[#ECF86E] hover:text-black hover:border-[#ECF86E] cursor-pointer";
  const outLinedComps = [
    {
      titles: "facebook",
    },
    { titles: "twitter" },
    {
      titles: "instagram",
    },
  ];

  return (
    <footer className="mx-8 flex flex-col md:flex-row md:items-center md:justify-between border-t-2">
      <span className="mt-4 mb-4 md:m-0 md:w-4/12 text-[#898C8D]">
        @2023. All Rights Reserved
      </span>
      <Image src={Logo} alt="The brands logo" className="opacity-50"></Image>
      <div className="outlined flex w-full justify-between md:justify-end md:py-8 my-6 md:m-0 md:w-4/12">
        {outLinedComps.map((item) => (
          <OutlinedComponent
            title={item.titles}
            key={item.titles}
            additionalClass={classN}
          ></OutlinedComponent>
        ))}
      </div>
    </footer>
  );
}
