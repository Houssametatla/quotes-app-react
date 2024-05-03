import React from "react";
import icon from "../assets/shuffle.svg";
import { MyFirstContext } from "../context";
import { useContext } from "react";

export default function GenerateButton() {
  const { fetchData } = useContext(MyFirstContext);
  return (
    <div className="generate">
      <button className="GenerateButton" onClick={fetchData}>
        <img className="img" src={icon}></img>
      </button>
    </div>
  );
}
