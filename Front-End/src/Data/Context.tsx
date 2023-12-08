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
        ConvertLoading: true,
        reqActive: true,
        isError: false,
      };
    }
    case "DEBUGLOADING": {
      return {
        ...state,
        ConvertLoading: true,
        reqActive: true,
        isError: false,
      };
    }
    case "QUALITYCHECKLOADING": {
      return {
        ...state,
        ConvertLoading: true,
        reqActive: true,
        isError: false,
      };
    }
    case "ISERROR": {
      return {
        ...state,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        reqActive: false,
        isError: true,
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
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        reqActive: false,
        outputVal: payload,
      };
    }

    default: {
      return initVal;
    }
  }
};
