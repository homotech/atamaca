import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarOne from "@/public/avatarOne.png";
import AvatarTwo from "@/public/avatarTwo.png";
import AvatarThree from "@/public/avatarThree.png";
import DottedCircle from "@/public/DottedCircle.png";
import React from "react";
import Image from "next/image";

const MajorHeroSection = () => {
  const avatars = [AvatarOne, AvatarTwo, AvatarThree];
  return (
    <div className="flex flex-col">
      <div className="bg-[#ECF86E] p-4">
        <p>
          Saving <Image src={DottedCircle} alt="A dotted circle Icon" /> Nature
          & Fighting <u>Climate</u> Change together.
        </p>
        <form action="">
          <input type="email" placeholder="Enter your email" />
          <button>
            Subscribe <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
        <div>
          <div>
            {avatars.map((item, index) => (
              <div key={index} className="rounded-full overflow-hidden">
                <Image src={item} alt="" />
              </div>
            ))}
          </div>
          <p>1.7M+ members of our charity organization</p>
        </div>
      </div>
      <div>Testing</div>
    </div>
  );
};
export default MajorHeroSection;
