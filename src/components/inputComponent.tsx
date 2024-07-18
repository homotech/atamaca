import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface inputProps {
  placeholder: string;
}

function InputComponent(props: inputProps) {
  return (
    <input
      type="text"
      className="px-4 py-3 rounded-full w-full focus:outline-0"
      placeholder={props.placeholder}
    />
  );
}
export default InputComponent;
