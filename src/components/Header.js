import "./Header.css";
import Switch from "@material-ui/core/Switch";

const Header = ({ handleChange, darkmode }) => {
  return (
    <div className="headerInfo">
      <header className="header">
        <div className="header__info">
          <h1>Social Media Dashboard</h1>
          <p>Total followers: 23,004</p>
        </div>
        <div className="header__darkmode">
          <p>Dark Mode</p>
          <Switch
            checked={darkmode}
            onChange={handleChange}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;
