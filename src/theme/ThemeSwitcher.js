import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../theme/AppProvider";
// import { IoMdMoon as Moon, IoMdSunny as Sun } from "react-icons/io";
import Sun from "./Sun";
import Moon from "./Moon";
export { default as theme } from "../styles/theme";


const ThemeSwitcher = () => {
  const { toggleTheme, themeMode } = useContext(AppContext);
  // const handleThemeChange = (e) => {
  //   console.log(e);
  //   toggleTheme();
  // };
  const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.button_col};
  border: 2px solid ${({ theme }) => theme.colors.button_col};
  color: ${({ theme }) => theme.text};
  outline: none;
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  color: white;
  text-align: center;
  position: fixed;
  cursor: pointer;
  right: 30px;
  bottom: 30px;
  width: 70px;
  height: 70px;
  outline: none;
  border-radius: 50%;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
  }`;
  return (
    <Button onClick={toggleTheme}>
      {themeMode === "lightTheme" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ThemeSwitcher;
