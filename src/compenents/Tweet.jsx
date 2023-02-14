import React, { useState } from "react";
import "../style/main.css";
import { BsThreeDots } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { HiOutlineHeart } from "react-icons/hi";
import { IoStatsChart, IoCodeSlashSharp } from "react-icons/io5";
import { FiShare } from "react-icons/fi";
import { RiDeleteBin6Line, RiFileList2Line } from "react-icons/ri";
import { VscPinned } from "react-icons/vsc";
import { useEffect } from "react";

const Tweet = ({ tw, i, setTweets, tweets }) => {
  const [open, setOpen] = useState("none");

  const handleOpen = () => {
    setOpen("block");
  };

  const handleDelete = (e) => {
    const tweetdelete = tweets.filter((t) => t.id !== e);
    setTweets(tweetdelete);
    setOpen("none");
    console.log(open);
  };

  return (
    <div className="tweet">
      <div className="twtphoto">
        <img className="photot" src="images/profile.png" alt="" />
      </div>

      <div className="twtcontent">
        <div className="contentheader">
          <div className="nameid2">
            <span className="name">Engin YILDIRIM</span>{" "}
            <span className="id">@EnginYI73466332</span>
          </div>

          <div className="twtdelete">
            <div
              style={{
                display: open,
              }}
              className="deleteabsolute"
            >
              <div className="topabsolute" onClick={() => handleDelete(tw.id)}>
                <span className="reddelete">
                  <RiDeleteBin6Line />
                </span>
                <span className="reddelete2">Delete</span>
              </div>
              <div>
                <span className="absoluteicons">
                  <VscPinned />
                </span>
                <span className="absolutespan">Pin to your profile</span>
              </div>
              <div>
                <span className="absoluteicons">
                  <RiFileList2Line />
                </span>
                <span className="absolutespan">
                  Add/Remove @@EnginYI73466332 from Lists
                </span>
              </div>
              <div>
                <span className="absoluteicons">
                  <FaRegComment />
                </span>
                <span className="absolutespan">Change who can reply</span>
              </div>
              <div>
                <span className="absoluteicons">
                  <IoCodeSlashSharp />
                </span>
                <span className="absolutespan">Embet Tweet</span>
              </div>
              <div className="botabsolute">
                <span className="absoluteicons">
                  <IoStatsChart />
                </span>
                <span className="absolutespan ">View Tweet analytics</span>
              </div>
            </div>
            <span className="threetw" onClick={() => handleOpen()}>
              <BsThreeDots />
            </span>
          </div>
        </div>
        <div className="softtweet">{tw.message}</div>
        <div className="like">
          <div className="likeicons">
            <FaRegComment />
          </div>
          <div className="retweet">
            <AiOutlineRetweet />
          </div>
          <div className="heart">
            <HiOutlineHeart />
          </div>
          <div className="likeicons">
            <IoStatsChart />
          </div>
          <div className="likeicons">
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
