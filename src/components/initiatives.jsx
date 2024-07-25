import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Initiatives = () => {
  const listDetails = [
    {
      title: "Tree Planting",
      tags: ["green and cleaner"],
      dates: "12/03/23",
    },
    {
      title: "Beach Cleanup",
      tags: ["future generations"],
      dates: "29/05/23",
    },
    {
      title: "Educational Events",
      tags: ["courses", "green Initiatives"],
      dates: "06/06/23",
    },
    {
      title: "Park Cleaning",
      tags: ["day off cleaning"],
      dates: "18/08/23",
    },
  ];
  const subHeader = ["titles", "tags", "dates"];
  const titles = [
    "Tree planting",
    "Beach cleanup",
    "Education Events",
    "Park Cleaning",
  ];

  const tags = ["green and cleaner", "future generation", ""];
  const dates = ["12/03/23", "29/05/23", "06/06/23", "18/08/23"];
  return (
    <div>
      <div>
        <h1>Our initiatives for 2023</h1>
        <p>Find out what projects we are implementing to protect nature</p>
      </div>
      <div className="lists">
        <div className="subheadings flex">
          {subHeader.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        {listDetails.map((item, index) => (
          <div className="listItem flex flex-col border-t " key={index}>
            <p className="order-1 w-3/4 lg:w-1/4">{item.title}</p>
            {item.tags.map((items, index) => (
              <div className="order-3" key={index}>
                <p>{items}</p>
              </div>
            ))}
            <p className="order-4 w-2/4">{item.dates}</p>
            <button className="order-2 w-1/4">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
