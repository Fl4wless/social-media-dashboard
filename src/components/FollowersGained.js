import React from "react";
import "./FollowersGained.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const FollowersGained = ({
  icon,
  name,
  followers,
  color,
  change,
  negative = false,
  darkmode,
}) => {
  return (
    <div
      className={`${darkmode ? "followersGained" : "followersGained FGLight"}`}
    >
      <div
        className="color-line"
        style={{
          background: color,
        }}
      ></div>
      <div className="followersGained__content">
        <div className="socialMedia">
          <img src={icon} alt="socialMedia" /> <p>{name}</p>
        </div>
        <div className="followersCount">
          <h1>{followers}</h1>
          <p>F O L L O W E R S</p>
        </div>
        <div className={`todayGained ${negative && "negative"}`}>
          {negative ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}{" "}
          <p>{change} Today</p>
        </div>
      </div>
    </div>
  );
};

export default FollowersGained;
