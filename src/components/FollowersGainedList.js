import "./FollowersGainedList.css";
import FollowersGained from "./FollowersGained";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import youtube from "../images/icon-youtube.svg";

const FollowersGainedList = ({ darkmode }) => {
  return (
    <div className="followersList">
      <FollowersGained
        icon={facebook}
        name={"@nathanf"}
        followers={1987}
        color="hsl(208, 92%, 53%)"
        change={12}
        darkmode={darkmode}
      />
      <FollowersGained
        icon={twitter}
        name={"@nathanf"}
        followers={1044}
        color="hsl(203, 89%, 53%)"
        change={1099}
        darkmode={darkmode}
      />
      <FollowersGained
        icon={instagram}
        name={"@realnathanf"}
        followers={"11k"}
        color=" linear-gradient(273deg, rgba(131,58,180,1) 0%, rgba(253,29,29,0.8932714617169374) 50%, rgba(252,176,69,1) 100%)"
        change={99}
        darkmode={darkmode}
      />

      <FollowersGained
        icon={youtube}
        name={"Nathan F."}
        followers={8239}
        color="hsl(348, 97%, 39%)"
        change={144}
        negative={true}
        darkmode={darkmode}
      />
    </div>
  );
};
export default FollowersGainedList;
