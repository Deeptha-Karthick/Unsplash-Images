import React, {
  createContext,
  useReducer,
  useState,
  useContext,
  useEffect,
} from "react";

const ThemeContext = createContext({
  isDarkTheme: null,
  toggleDarkTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(function () {
    const isDarkTheme = localStorage.getItem("darkTheme");
    return JSON.parse(isDarkTheme) ? JSON.parse(isDarkTheme) : false;
  });

  const themeContext = {
    isDarkTheme: isDarkTheme,
    toggleDarkTheme: () => {
      setIsDarkTheme((prevTheme) => {
        return !prevTheme;
      });
      localStorage.setItem("darkTheme", !isDarkTheme);
    },
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("You dont have access to theme value");
  }
  return theme;
};
