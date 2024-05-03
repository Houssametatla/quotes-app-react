import React from "react";
import { MyFirstContext } from "../context";
import { useContext } from "react";

export default function ThemeButton() {
  const { isDark, setIsDark } = useContext(MyFirstContext);
  return (
    <div className="btn">
      <button
        onClick={() => {
          setIsDark(!isDark);
        }}
        style={{
          justifyContent: isDark === false ? "flex-start" : "flex-end",
          backgroundColor: isDark === false ? "" : "blue",
        }}
      >
        <div className="btn-1 "></div>
      </button>
    </div>
  );
}
