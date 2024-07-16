import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface buttonProps {
  title: string;
  icons: React.ReactNode;
}

function Button(props: buttonProps) {
  return (
    <button className="bg-white p-4 border-2 border-gray-200">
      {props.title}
      {props.icons}
    </button>
  );
}

export default Button;
