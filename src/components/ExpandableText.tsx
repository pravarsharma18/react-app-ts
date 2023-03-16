import React, { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}
const ExpandableText = ({ maxChars: maxChar = 100, children }: Props) => {
  const [isExpandable, setisExpandable] = useState(true);
  const handleClick = () => {
    setisExpandable(!isExpandable);
  };
  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpandable ? children.substring(0, maxChar) : children;
  return (
    <p>
      {text}...{" "}
      <button onClick={handleClick}>{isExpandable ? "More" : "Less"}</button>
    </p>
  );
};

export default ExpandableText;
