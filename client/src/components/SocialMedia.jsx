import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsInstagram } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaFacebook />
      </div>
      <div>
        <BsTwitter />
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
