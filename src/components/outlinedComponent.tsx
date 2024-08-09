import React from "react";

interface OutlinedComponentProps {
  title: React.ReactNode;
  additionalClass: React.ReactNode;
}
function OutlinedComponent(props: OutlinedComponentProps) {
  const classN = `px-3 py-1 rounded-full box-border manrope-400 w-fit text-sm ${props.additionalClass}`;

  return <p className={classN}>{props.title}</p>;
}

export default OutlinedComponent;
// export default function OutlinedComponent({ title, className }) {
//   return <div className={className}>{title}</div>;
// }
