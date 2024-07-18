import React from "react";
import { SocialIcon } from "react-social-icons";

const SocialMediaTemplate = () => {
  return (
    <div className="flex space-x-4 mt-6">
      <SocialIcon
        url="https://github.com/fajardd"
        style={{ width: "24px", height: "24px" }}
      />
      <SocialIcon
        url="https://dribbble.com/efdici"
        style={{ width: "24px", height: "24px" }}
      />
      <SocialIcon
        network="linkedin"
        style={{ width: "24px", height: "24px" }}
      />
    </div>
  );
};
export default SocialMediaTemplate;
