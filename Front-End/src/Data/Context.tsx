import { createContext, useReducer } from "react";

export const Context = createContext<any>(null);

const ContextProvider = ({ children }: any) => {
  const [states, dispatch] = useReducer(Reducer, initVal);

  return <Context.Provider value={{ ...states, dispatch }}>{children}</Context.Provider>;
};

export default ContextProvider;

const initVal: any = {
  RunCodeLoading: false,
  DebugLoading: false,
  QualityLoading: false,
  ConvertLoading: false,
  ConnectingToServer: false,
  isError: false,
  reqActive: false,
  outputVal: "",
  codeInpVal: "",

  // Import Code states
  errorImport: false,
  toggleToFile: false,
  loadingImport: false,
  pathsArr: [],
  reposList: [],
  contentsArr: [],
  importMessage: "",
  currentRepoName: "",
  clickedFileData: "",
  clickedFileName: "",
  downloadFileLink: "",
};

const Reducer = (state = initVal, { type, payload }: any) => {
  switch (type) {
    case RUN_CODE_LOADING: {
      return {
        ...state,
        reqActive: "run",
        RunCodeLoading: true,
        isError: false,
        outputVal: "",
      };
    }
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
    case QUALITY_CHECK_LOADING: {
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
    case SUCCESS: {
      return {
        ...state,
        reqActive: false,
        RunCodeLoading: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        ConnectingToServer: false,
        outputVal: payload,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        reqActive: false,
        RunCodeLoading: false,
        ConvertLoading: false,
        DebugLoading: false,
        QualityLoading: false,
        ConnectingToServer: false,
        isError: true,
        outputVal: "",
      };
    }
    case CODE_INP_CHANGE: {
      return {
        ...state,
        importMessage: "",
        errorImport: false,
        codeInpVal: payload,
      };
    }

    // ************** Import Code **************
    case IMPORT_LOADING: {
      return {
        ...state,
        loadingImport: true,
        errorImport: false,
        importMessage: "",
        pathsArr: [],
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
        contentsArr: [],
        toggleToFile: false,
      };
    }
    case REPO_CLICK_SUCCESS: {
      return {
        ...state,
        loadingImport: false,
        currentRepoName: payload?.currentRepoName,
        contentsArr: payload?.contentsArr,
        reposList: [],
        toggleToFile: false,
      };
    }
    case FOLDER_CLICK_SUCCESS: {
      return {
        ...state,
        loadingImport: false,
        pathsArr: payload?.pathsArr,
        contentsArr: payload?.contentsArr,
        reposList: [],
        toggleToFile: false,
      };
    }
    case FILE_CLICKED_SUCCESS: {
      return {
        ...state,
        loadingImport: false,
        pathsArr: payload?.pathsArr,
        clickedFileData: payload?.clickedFileData,
        downloadFileLink: payload?.downloadFileLink,
        clickedFileName: payload?.clickedFileName,
        reposList: [],
        contentsArr: [],
        toggleToFile: true,
      };
    }
    case REPO_CLICK_ERROR: {
      return {
        ...state,
        loadingImport: false,
        errorImport: false,
        importMessage: "",
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

// Local Storage Key
export const CODEWIZARD_KEY = "CODEWIZARD_KEY";

// Action Types
export const SUCCESS = "SUCCESS";
export const IS_ERROR = "IS_ERROR";
export const IMPORT_ERROR = "IMPORT_ERROR";
export const DEBUG_LOADING = "DEBUG_LOADING";
export const IMPORT_LOADING = "IMPORT_LOADING";
export const CONVERT_LOADING = "CONVERT_LOADING";
export const CODE_INP_CHANGE = "CODE_INP_CHANGE";
export const SUCCESS_USERNAME = "SUCCESS_USERNAME";
export const RUN_CODE_LOADING = "RUN_CODE_LOADING";
export const REPO_CLICK_ERROR = "REPO_CLICK_ERROR";
export const CLEAR_USERNAME_INP = "CLEAR_USERNAME_INP";
export const CONNECTION_LOADING = "CONNECTION_LOADING";
export const CONNECTION_SUCCESS = "CONNECTION_SUCCESS";
export const REPO_CLICK_SUCCESS = "REPO_CLICK_SUCCESS";
export const HIDE_TOGGLE_TO_FILE = "HIDE_TOGGLE_TO_FILE";
export const FILE_CLICKED_SUCCESS = "FILE_CLICKED_SUCCESS";
export const FOLDER_CLICK_SUCCESS = "FOLDER_CLICK_SUCCESS";
export const QUALITY_CHECK_LOADING = "QUALITY_CHECK_LOADING";
