import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./styles.css";

export default function Themer() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="theme-container">
        <p>Hello Welt!!!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}
