import { createContext, useReducer } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [
    {
      ConvertLoading,
      DebugLoading,
      QualityLoading,
      isError,
      reqActive,
      codeInpVal,
      outputVal,
    },
    dispatch,
  ] = useReducer(Reducer, initVal);

  return (
    <Context.Provider
      value={{
        dispatch,
        ConvertLoading,
        DebugLoading,
        QualityLoading,
        isError,
        reqActive,
        codeInpVal,
        outputVal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

const initVal: any = {
  ConvertLoading: false,
  DebugLoading: false,
  QualityLoading: false,
  reqActive: false,
  isError: false,
  codeInpVal: "",
  outputVal: "",
};

const Reducer = (state = initVal, { type, payload }: any) => {
  switch (type) {
    case "CONVERTLOADING": {
      return {
        ...state,
        reqActive: "convert",
        ConvertLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case "DEBUGLOADING": {
      return {
        ...state,
        reqActive: "debug",
        DebugLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case "QUALITYCHECKLOADING": {
      return {
        ...state,
        reqActive: "quality",
        QualityLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case "ISERROR": {
      return {
        ...state,
        reqActive: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        isError: true,
        outputVal: "",
      };
    }
    case "CODEINPCHANGE": {
      return {
        ...state,
        codeInpVal: payload,
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        reqActive: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        outputVal: payload,
      };
    }

    default: {
      return initVal;
    }
  }
};
