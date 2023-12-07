import { createContext, useReducer } from "react";

const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [{ isLoading, isError, reqActive }, dispatch] = useReducer(
    Reducer,
    initVal
  );

  return (
    <Context.Provider
      value={{
        dispatch,
        isLoading,
        isError,
        reqActive,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

const initVal: any = {
  isLoading: false,
  isError: false,
  outputContent: "",
};

const Reducer = (state = initVal, { type, payload }: any) => {
  switch (type) {
    case "ISLOADING": {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case "ISERROR": {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        isLoading: false,
        outputContent: payload,
      };
    }

    default: {
      return initVal;
    }
  }
};
