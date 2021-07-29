import React from "react";
import "./Overview.css";
import OverviewItem from "./OverviewItem";

import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";

const Overview = ({ darkmode }) => {
  return (
    <div className="overview">
      <h1>Overview - Today</h1>
      <div className="overview__content">
        <OverviewItem
          title="Page Views"
          icon={facebook}
          count={87}
          percentage={3}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Likes"
          icon={facebook}
          count={52}
          percentage={2}
          negative={true}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Likes"
          icon={instagram}
          count={5462}
          percentage={2257}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Profile Views"
          icon={instagram}
          count={"52k"}
          percentage={1375}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Retweets"
          icon={twitter}
          count={117}
          percentage={303}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Likes"
          icon={twitter}
          count={507}
          percentage={553}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Likes"
          icon={youtube}
          count={107}
          percentage={19}
          negative={true}
          darkmode={darkmode}
        />
        <OverviewItem
          title="Total Views"
          icon={youtube}
          count={1407}
          percentage={12}
          negative={true}
          darkmode={darkmode}
        />
      </div>
    </div>
  );
};

export default Overview;
