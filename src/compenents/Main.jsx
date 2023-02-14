import React, { useState } from "react";
import "../style/main.css";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { BsCardImage } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { TbCalendarTime } from "react-icons/tb";
import { SlLocationPin } from "react-icons/sl";
import Tweet from "./Tweet";
import { useId } from "react";
import { v4 as uuid } from "uuid";

const Main = ({ tweets, setTweets, input, setInput }) => {
  const handleChange = (e) => {
    if (e.target.value.length <= 240) {
      setInput(e.target.value);
    }
  };
  const handleClick = (e) => {
    setTweets((prev) => [{ id: uuid(), message: input }, ...prev]);
    setInput("");
  };
  const id = uuid();
  console.log(id);

  return (
    <div>
      <div className="header">
        <div className="top">
          <h2>Home</h2>
        </div>
        <div className="bot">
          <div className="botleft">
            <h3>For you</h3>
            <div className="stick"></div>
          </div>
          <div className="botright">
            <h3>Following</h3>
            <div className="stick"></div>
          </div>
        </div>
      </div>
      <div className="conteiner">
        <div className="content">
          <div className="photo">
            <img src="images/profile.png" alt="" />
          </div>
          <div className="write">
            {" "}
            <input
              value={input}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="What's happening?"
            />
          </div>
        </div>
        <div className="send">
          <div className="sendicons">
            <div>
              <BsCardImage />
            </div>
            <div>
              <AiOutlineFileGif />
            </div>
            <div>
              <BiPoll />
            </div>
            <div>
              <BsEmojiSmile />
            </div>
            <div>
              <TbCalendarTime />
            </div>
            <div>
              <SlLocationPin />
            </div>
          </div>
          <div
            className="out"
            style={{
              background: `conic-gradient(from 0deg, #00acee 0deg ${
                (360 / 240) * input.length
              }deg, white ${(360 / 240) * input.length}deg 360deg)`,
            }}
          >
            <div className="in"></div>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="btn-send"
            disabled={input.length > 0 ? false : true}
            style={{
              opacity: input.trim().length ? 1 : 0.5,
            }}
          >
            Tweet
          </button>
        </div>
      </div>

      {tweets.map((tw, i) => {
        return <Tweet tw={tw} i={i} tweets={tweets} setTweets={setTweets} />;
      })}
    </div>
  );
};

export default Main;
