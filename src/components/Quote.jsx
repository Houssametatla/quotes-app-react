import React from "react";
import { MyFirstContext } from "../context";
import { useContext } from "react";

export default function Quote() {
  const { isDark, quote } = useContext(MyFirstContext);
  return (
    <div className="qte">
      <div
        className="quote"
        style={{
          backgroundColor: isDark === false ? "#bbc2cf" : "#111827",
          color: isDark === false ? "black" : "white",
        }}
      >
        {quote.content}
        <div className="type">
          <p>{quote.author}</p>
        </div>
      </div>
    </div>
  );
}
