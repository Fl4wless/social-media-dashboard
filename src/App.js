import "./App.css";
import { useState } from "react";
import FollowersGainedList from "./components/FollowersGainedList";
import Overview from "./components/Overview";
import Header from "./components/Header";

function App() {
  const [darkmode, setDarkmode] = useState(true);

  const handleChange = (event) => {
    setDarkmode(event.target.checked);
  };
  return (
    <div className={`${darkmode ? "app" : "app lightmode"}`}>
      <div className={`${darkmode ? "hero" : "hero lightmodeHero"}`}></div>
      <div className="content">
        <Header handleChange={handleChange} darkmode={darkmode} />
        <FollowersGainedList darkmode={darkmode} />
        <Overview darkmode={darkmode} />
      </div>
    </div>
  );
}

export default App;
