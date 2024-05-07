import { useThemeContext } from "../context/ThemeContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useThemeContext();
  return (
    <>
      <section className="toggle-container">
        <button className="dark-toggle toggle-icon" onClick={toggleDarkTheme}>
          {isDarkTheme ? <BsFillMoonFill /> : <BsFillSunFill />}
        </button>
      </section>
    </>
  );
};

export default ThemeToggle;
