import { createContext, useState } from "react";

const MyFirstContext = createContext();

const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [quote, setQuote] = useState({});

  async function fetchData() {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    setQuote(data[0]);
  }
  return (
    <MyFirstContext.Provider value={{ isDark, setIsDark, quote, fetchData }}>
      {children}
    </MyFirstContext.Provider>
  );
};

export { ContextProvider, MyFirstContext };
