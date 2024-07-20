import React from "react";
import ImageCard from "../Elements/ImageCard";
import TextCard from "../Elements/TextCard";
import ButtonCard from "../Elements/ButtonCard";

const Card = ({ src, textImage, textContent, href, textButton }) => {
  return (
    <div className="max-w-lg p-6 border border-[#0079FF] rounded-lg shadow bg-white mt-6">
      <ImageCard src={src} textImage={textImage} />
      <TextCard textContent={textContent} />
      <ButtonCard href={href} textButton={textButton} />
    </div>
  );
};
export default Card;
