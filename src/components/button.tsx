import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface buttonProps {
  title: string;
  icons: IconProp;
}

function Button(props: buttonProps) {
  return (
    <button className="bg-white flex items-center justify-between gap-2 rounded-full px-4 py-3 border-0 border-full hover:bg-[#ECF86E] ">
      <span>{props.title}</span>
      <FontAwesomeIcon icon={props.icons} className="w-4"></FontAwesomeIcon>
    </button>
  );
}

export default Button;
