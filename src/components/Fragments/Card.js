import React from "react";
import ImageCard from "../Elements/ImageCard";
import TextCard from "../Elements/TextCard";
import ButtonCard from "../Elements/ButtonCard";

const Card = ({
  src,
  textImageLink,
  textImage,
  textContent,
  textButtonLink,
  textButton,
}) => {
  return (
    <div className="max-w-lg p-6 border border-[#0079FF] rounded-lg shadow bg-white mt-6">
      <ImageCard
        src={src}
        textImageLink={textImageLink}
        textImage={textImage}
      />
      <TextCard textContent={textContent} />
      <ButtonCard textButtonLink={textButtonLink} textButton={textButton} />
    </div>
  );
};
export default Card;
