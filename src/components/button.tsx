import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface buttonProps {
  title: string;
  icons: IconProp;
  additionalClass: string;
}

function Button(props: buttonProps) {
  const classN = `bg-white flex items-center justify-between gap-2 rounded-full px-4 py-3 border-0 border-full hover:bg-[#ECF86E] ${props.additionalClass}`;
  return (
    <button className={classN}>
      <span>{props.title}</span>
      <FontAwesomeIcon icon={props.icons} className="w-4"></FontAwesomeIcon>
    </button>
  );
}

export default Button;
