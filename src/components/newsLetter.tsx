import React from "react";
import OutlinedComponent from "./outlinedComponent";
import Button from "./button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NewsLetter() {
  return (
    <div>
      <div>
        <OutlinedComponent
          title="newsletter"
          additionalClass=""
        ></OutlinedComponent>
      </div>
      <div>
        <h3>
          Subscribe to our newsletter to get the latest updates on mission
          projects & initiatives.
        </h3>
        <Button title="Subscribe" icons={<faArrowRight}></Button>
      </div>
    </div>
  );
}
