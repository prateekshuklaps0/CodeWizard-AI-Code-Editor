import { useState, createContext } from "react";

const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [val, setVal] = useState(true);

  const ContextValues = {
    val,
    setVal,
  };

  return <Context.Provider value={ContextValues}>{children}</Context.Provider>;
};

export default ContextProvider;
