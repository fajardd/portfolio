import React from "react";
import Link from "next/link";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const ButtonCard = ({ textButtonLink, textButton }) => {
  return (
    <Link target="_blank" href={textButtonLink}>
      <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#0079FF] rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none gap-x-2 ">
        {textButton}
        <ArrowCircleRightIcon className="w-6 h-6" />
      </div>
    </Link>
  );
};
export default ButtonCard;
