import React from "react";

interface OutlinedComponentProps {
  title: string;
  additionalClass: string;
}
function OutlinedComponent(props: OutlinedComponentProps) {
  const classN = `p-3 rounded-full border-2 flex m-2 ${props.additionalClass}`;

  return <div className={classN}>{props.title}</div>;
}

export default OutlinedComponent;
// export default function OutlinedComponent({ title, className }) {
//   return <div className={className}>{title}</div>;
// }
