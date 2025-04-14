import { useEffect } from "react";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";

interface props {
  theme: string;
  onClick: () => void;
}

const Header = ({ onClick, theme }: props) => {
  useEffect(() => {
    //Set the theme on <html> element
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="flex justify-between items-center">
      <h1 className="header-title">TODO</h1>
      {theme === "light" ? (
        <img
          src={moon}
          alt="moon icon"
          onClick={onClick}
          className="header-icon"
        />
      ) : (
        <img
          src={sun}
          alt="sun icon"
          onClick={onClick}
          className="header-icon"
        />
      )}
    </header>
  );
};

export default Header;
