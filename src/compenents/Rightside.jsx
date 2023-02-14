import React from "react";
import "../style/rightside.css";
import { FiSearch } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";
import Data from "./data.json";
const Rightside = () => {
  return (
    <div>
      <div className="searchout">
        {" "}
        <div className="search">
          <span>
            <FiSearch />
          </span>
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>

      <div className="foryou">
        <div className="rightheader">
          {" "}
          <h3 className="left">Trends for you</h3>{" "}
        </div>

        {Data.map((post) => {
          return (
            <div className="subject">
              <span className="left">{post.header}</span>
              <span className="three">
                <BsThreeDots />
              </span>
              <h4 className="left">{post.title}</h4>
              <span className="left">{post.view}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rightside;
