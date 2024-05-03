import { useEffect, useState } from "react";
import "./App.css";
import ThemeButton from "./components/ThemeButton";
import Quote from "./components/Quote";
import GenerateButton from "./components/GenerateButton";
import { useContext } from "react";
import { MyFirstContext } from "./context";

function App() {
  //lfonction dirhaja hatsra kindir refrech l page
  const { fetchData, isDark } = useContext(MyFirstContext);

  useEffect(function dirhaja() {
    console.log("fetching data");
    fetchData();
  }, []);
  return (
    <>
      <div
        className="container"
        style={{ backgroundColor: isDark === false ? "white" : "#1F2937" }}
      >
        <ThemeButton />
        <Quote />
        <GenerateButton />
      </div>
    </>
  );
}
export default App;
