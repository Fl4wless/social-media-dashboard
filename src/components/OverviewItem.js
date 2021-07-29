import React from "react";
import "./OverviewItem.css";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const OverviewItem = ({
  title,
  icon,
  count,
  percentage,
  negative = false,
  darkmode,
}) => {
  return (
    <div
      className={`${darkmode ? "overviewItem" : "overviewItem overviewDark"}`}
    >
      <div className="overviewItem__top">
        <p>{title}</p>
        <img src={icon} alt="social media logo" />
      </div>
      <div className="overviewItem__bottom">
        <h2>{count}</h2>
        <span className={`overview__percentage ${negative && "negative"}`}>
          {negative ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
          <p>{percentage}%</p>
        </span>
      </div>
    </div>
  );
};

export default OverviewItem;
