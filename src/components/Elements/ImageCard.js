import React from "react";
import Image from "next/image";

const ImageCard = ({ src, textImage }) => {
  return (
    <div className="relative rounded-lg">
      <Image src={src} alt={textImage} className="rounded-lg" />

      <h5 className="absolute bottom-0 left-0  font-semibold bg-[#0079FF] hover:bg-[#0079FF] w-full text-white bg-opacity-50 p-2 rounded-b-lg cursor-pointer">
        {textImage}
      </h5>
    </div>
  );
};
export default ImageCard;
