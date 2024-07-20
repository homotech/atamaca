import React from "react";

interface buttonProps {
  title: string;
  additionalClass: string;
}

function EmptyButton(props: buttonProps) {
  const classN = `bg-white flex items-center justify-between gap-2 rounded-full px-4 py-3 border-0 border-full hover:bg-[#ECF86E] ${props.additionalClass}`;
  return (
    <button className={classN}>
      <span>{props.title}</span>
    </button>
  );
}

export default EmptyButton;
