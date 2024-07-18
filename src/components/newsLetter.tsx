import React from "react";
import OutlinedComponent from "./outlinedComponent";
import Button from "./button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputComponent from "./inputComponent";

export default function NewsLetter() {
  return (
    <div className="flex flex-col md:flex-row px-8 pb-8 pt-6 gap-4 bg-[#F6F6F6] md:justify-between">
      <div className="md:w-5/12 md:mt-10">
        <OutlinedComponent
          title="newsletter"
          additionalClass=""
        ></OutlinedComponent>
      </div>

      <div className="md:w-7/12 flex flex-col items-center">
        <h3 className="font-bold manrope-500 text-2xl md:text-4xl md:mt-10">
          Subscribe to our newsletter to get the latest updates on mission
          projects & initiatives.
        </h3>
        <form
          action=""
          className="flex justify-between mt-4 w-full gap-4 md:mb-6"
        >
          <InputComponent placeholder="Enter Email Address"></InputComponent>
          <Button title="Subscribe" icons={faArrowRight}></Button>
        </form>
      </div>
    </div>
  );
}
