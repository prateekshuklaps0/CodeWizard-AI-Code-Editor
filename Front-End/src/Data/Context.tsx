import { createContext, useReducer } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [states, dispatch] = useReducer(Reducer, initVal);

  return (
    <Context.Provider value={{ ...states, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

const initVal: any = {
  ConvertLoading: false,
  DebugLoading: false,
  QualityLoading: false,
  ConnectingToServer: false,
  reqActive: false,
  isError: false,
  codeInpVal: "",
  outputVal: "",
  searchUserReqMade: false,
  loadingImport: false,
  errorImport: false,
  reposList: [],
  importMessage: "",
  repoLoading: false,
  currentPath: "",
  contentsArr: [],
  toggleToFile: false,
  fetchedCodeData: "",
  downloadFileLink: "",
  clikedFileName: "",
};

const Reducer = (state = initVal, { type, payload }: any) => {
  switch (type) {
    case CONVERT_LOADING: {
      return {
        ...state,
        reqActive: "convert",
        ConvertLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case DEBUG_LOADING: {
      return {
        ...state,
        reqActive: "debug",
        DebugLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case QUALITY_CHECKLOADING: {
      return {
        ...state,
        reqActive: "quality",
        QualityLoading: true,
        isError: false,
        outputVal: "",
      };
    }
    case CONNECTION_LOADING: {
      return {
        ...state,
        reqActive: "ConnectingToServer",
        ConnectingToServer: true,
        isError: false,
        outputVal: "",
      };
    }
    case CONNECTION_SUCCESS: {
      return {
        ...state,
        reqActive: false,
        ConnectingToServer: false,
      };
    }
    case "ISERROR": {
      return {
        ...state,
        reqActive: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        ConnectingToServer: false,
        isError: true,
        outputVal: "",
      };
    }
    case CODEINPCHANGE: {
      return {
        ...state,
        codeInpVal: payload,
        contentsArr: [],
        toggleToFile: false,
        errorImport: false,
        importMessage: "",
        repoList: [],
      };
    }
    case "SUCCESS": {
      return {
        ...state,
        reqActive: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        ConnectingToServer: false,
        outputVal: payload,
      };
    }

    // Import - OLD
    case GET_REPO_PATH_LOADING: {
      return {
        ...state,
        repoLoading: true,
      };
    }
    case GET_REPO_PATH_ERROR: {
      return {
        ...state,
        repoLoading: false,
      };
    }
    case PATH_CHANGE: {
      return {
        ...state,
        repoLoading: false,
        toggleToFile: false,
        currentPath: payload?.currentPath,
        contentsArr: payload?.contentsArr,
      };
    }
    case FILE_CLICKED_SUCCESS: {
      return {
        ...state,
        repoLoading: false,
        toggleToFile: true,
        fetchedCodeData: payload?.fetchedCodeData,
        downloadFileLink: payload?.downloadFileLink,
        clikedFileName: payload?.clikedFileName,
      };
    }
    case TOGGLE_TO_FILE: {
      return {
        ...state,
        toggleToFile: state?.toggleToFile,
      };
    }
    case HIDE_TOGGLE_TO_FILE: {
      return {
        ...state,
        toggleToFile: false,
        errorImport: false,
        importMessage: "",
        reposList: [],
        contentsArr: [],
      };
    }
    case SHOW_REPO_TOGGLE: {
      return {
        ...state,
        toggleToFile: false,
        contentsArr: [],
      };
    }

    // Import - New
    case IMPORT_LOADING: {
      return {
        ...state,
        loadingImport: true,
        errorImport: false,
        importMessage: "",
      };
    }
    case IMPORT_ERROR: {
      return {
        ...state,
        loadingImport: false,
        errorImport: true,
        importMessage: payload || "",
      };
    }
    case SUCCESS_USERNAME: {
      return {
        ...state,
        loadingImport: false,
        errorImport: false,
        reposList: payload,
      };
    }
    case CLEAR_USERNAME_INP: {
      return {
        ...state,
        loadingImport: false,
        errorImport: false,
        importMessage: "",
        reposList: [],
      };
    }

    default: {
      return initVal;
    }
  }
};

// Action Types
export const CODEWIZARD_KEY = "CODEWIZARD_KEY";
export const IMPORT_LOADING = "IMPORT_LOADING";
export const IMPORT_ERROR = "IMPORT_ERROR";
export const SUCCESS_USERNAME = "SUCCESS_USERNAME";
export const CONVERT_LOADING = "CONVERT_LOADING";
export const DEBUG_LOADING = "DEBUG_LOADING";
export const QUALITY_CHECKLOADING = "QUALITY_CHECKLOADING";
export const CONNECTION_LOADING = "CONNECTION_LOADING";
export const CONNECTION_SUCCESS = "CONNECTION_SUCCESS";
export const IS_ERROR = "IS_ERROR";
export const SUCCESS = "SUCCESS";
export const CODE_INP_CHANGE = "CODE_INP_CHANGE";
export const GET_REPO_PATH_LOADING = "GET_REPO_PATH_LOADING";
export const GET_REPO_PATH_ERROR = "GET_REPO_PATH_ERROR";
export const PATH_CHANGE = "PATH_CHANGE";
export const FILE_CLICKED_SUCCESS = "FILE_CLICKED_SUCCESS";
export const TOGGLE_TO_FILE = "TOGGLE_TO_FILE";
export const HIDE_TOGGLE_TO_FILE = "HIDE_TOGGLE_TO_FILE";
export const SHOW_REPO_TOGGLE = "SHOW_REPO_TOGGLE";
export const CODEINPCHANGE = "CODEINPCHANGE";
export const CLEAR_USERNAME_INP = "CLEAR_USERNAME_INP";
