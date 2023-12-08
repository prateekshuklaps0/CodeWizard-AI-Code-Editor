import axios from "axios";

// This function updates the editor width whenever there is change in width of div with id="myDiv".
export const updateDivWidth = (setDivWidth: any) => {
  let width = document.getElementById("myDiv")?.getBoundingClientRect().width;
  if (width) {
    setDivWidth(width);
  }
};

// Function for Code Convert Request
export const handleConvert = (
  dispatch: any,
  reqActive: boolean,
  toast: any,
  codeInpVal: any,
  selectedlanguage: string
) => {
  if (!reqActive) {
    dispatch({ type: "CONVERTLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/convert", {
        codeInpVal,
        selectedlanguage,
      })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.response });
        console.log("Convert Request Successfull :-", res.data);
      })
      .catch((err: any) => {
        dispatch({ type: "ISERROR" });
        toast({
          title: "Something Went Wrong!",
          description: "Please try again after sometime.",
          status: "error",
          isClosable: true,
        });
        console.log("Convert Request Error :-", err);
      });
  }
};

// Function for Debug Request
export const handleDebug = (
  dispatch: any,
  reqActive: boolean,
  toast: any,
  codeInpVal: any
) => {
  if (!reqActive) {
    dispatch({ type: "DEBUGLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/debug", {
        codeInpVal,
      })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.response });
        console.log("Debug Request Successfull :-", res.data);
      })
      .catch((err) => {
        dispatch({ type: "ISERROR" });
        toast({
          title: "Something Went Wrong!",
          description: "Please try again after sometime.",
          status: "error",
          isClosable: true,
        });
        console.log("Debug Request Error :-", err);
      });
  }
};

// Function for Code Quality Check Request
export const handleCheckQuality = (
  dispatch: any,
  reqActive: boolean,
  toast: any,
  codeInpVal: any
) => {
  if (!reqActive) {
    dispatch({ type: "DEBUGLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/debug", {
        codeInpVal,
      })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.response });
        console.log("Debug Request Successfull :-", res.data);
      })
      .catch((err) => {
        dispatch({ type: "ISERROR" });
        toast({
          title: "Something Went Wrong!",
          description: "Please try again after sometime.",
          status: "error",
          isClosable: true,
        });
        console.log("Debug Request Error :-", err);
      });
  }
};
