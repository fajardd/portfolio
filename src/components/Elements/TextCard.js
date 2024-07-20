import React from "react";

const TextCard = ({ textContent }) => {
  return (
    <p className="mt-3 mb-3 font-normal text-gray-700 dark:text-gray-400">
      {textContent}
    </p>
  );
};
export default TextCard;
