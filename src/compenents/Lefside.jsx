import React, { useState } from "react";
import "../style/leftside.css";
import { SiTwitter } from "react-icons/si";
import { RiHome7Fill, RiFileList2Line } from "react-icons/ri";
import { BiHash, BiEnvelope } from "react-icons/bi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineBookmark, HiOutlineUser } from "react-icons/hi";
import { BsThreeDots } from "react-icons/bs";

import { CgMoreO } from "react-icons/cg";
import {} from "react-icons/si";

const Lefside = () => {
  const [logout, setLogout] = useState(false);
  const handleOpen2 = () => {
    setLogout(true);
  };
  const handleClose = () => {
    setLogout(false);
  };
  return (
    <div className="icons">
      <div className="logo">
        <SiTwitter />
      </div>
      <div className="same">
        <h1>
          <RiHome7Fill />
        </h1>
        <a href="/">Home</a>
      </div>
      <div className="same">
        <h1>
          <BiHash />
        </h1>
        <a href="/">Exlore</a>
      </div>
      <div className="same">
        <h1>
          <h3>
            <HiOutlineBell />
          </h3>
        </h1>
        <a href="/">Notifications</a>
      </div>
      <div className="same">
        <h1>
          <BiEnvelope />
        </h1>
        <a href="/">Messages</a>
      </div>
      <div className="same">
        <h1>
          <HiOutlineBookmark />
        </h1>
        <a href="/">Bookmarks</a>
      </div>
      <div className="same">
        <h1>
          <RiFileList2Line />
        </h1>
        <a href="/">List</a>
      </div>
      <div className="same">
        <h1>
          <HiOutlineUser />
        </h1>
        <a href="/">Profile</a>
      </div>
      <div className="same">
        <h1>
          <CgMoreO />
        </h1>
        <a href="/">More</a>
      </div>
      <div className="twt">
        <button className="btn-twt">Tweet</button>
      </div>
      {logout && (
        <div onClick={handleClose} className="logout">
          <div>
            <span>Add an existing account</span>
          </div>
          <div>
            <span>Log out @EnginYI73466332</span>
          </div>
        </div>
      )}
      <div onClick={handleOpen2} className="account">
        <div className="menu-photo">
          <img src="images/profile.png" alt="" />
        </div>
        <div className="nameid">
          <div className="namea">Engin YILDIRIM</div>
          <div className="ida">@EnginYI73466332</div>
        </div>
        <div className="threea">
          <span>
            <BsThreeDots />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Lefside;
