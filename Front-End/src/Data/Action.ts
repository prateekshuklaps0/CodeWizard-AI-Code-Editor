import axios from "axios";

// Function for Code Convert Request
export const handleConvert = (
  dispatch: any,
  reqActive: boolean,
  toast: any,
  codeInpVal: any,
  selectedlanguage: string
) => {
  if (!reqActive) {
    toast.closeAll();
    if (!codeInpVal || codeInpVal.length <= 5) {
      toast({
        title: "Attention!",
        description: "No code detected to convert yet.",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    dispatch({ type: "CONVERTLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/convert", {
        code: codeInpVal,
        language: selectedlanguage,
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
    toast.closeAll();
    if (!codeInpVal || codeInpVal.length <= 5) {
      toast({
        title: "Debugging alert!",
        description: "Code required for debugging.",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    dispatch({ type: "DEBUGLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/debug", {
        code: codeInpVal,
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
    toast.closeAll();
    if (!codeInpVal || codeInpVal.length <= 5) {
      toast({
        title: "Hold up!",
        description: "No code detected for quality check.",
        status: "warning",
        isClosable: true,
      });
      return;
    }
    dispatch({ type: "QUALITYCHECKLOADING" });
    axios
      .post("https://code-converter-api-jjb2.onrender.com/qualityCheck", {
        code: codeInpVal,
      })
      .then((res) => {
        dispatch({ type: "SUCCESS", payload: res.data.response });
        console.log("Quality Check Request Successfull :-", res.data);
      })
      .catch((err) => {
        dispatch({ type: "ISERROR" });
        toast({
          title: "Something Went Wrong!",
          description: "Please try again after sometime.",
          status: "error",
          isClosable: true,
        });
        console.log("Quality Check Request Error :-", err);
      });
  }
};

// This function updates the editor width whenever there is change in width of div with id="myDiv".
export const updateDivWidth = (setDivWidth: any) => {
  let width = document.getElementById("myDiv")?.getBoundingClientRect().width;
  if (width) {
    setDivWidth(width);
  }
};

// Function for Increasing/Decreasing Font Size
export const handleFontSize = (
  setFontSize: any,
  fontSize: number,
  val: number
) => {
  const newFontSize = fontSize + val;
  if (newFontSize >= 14 && newFontSize <= 42) {
    setFontSize(newFontSize);
  }
};

// Function for copying output to the clipboard
export const handleCopy = (toast: any, valueToCopy: any) => {
  toast.closeAll();
  if (valueToCopy) {
    navigator.clipboard
      .writeText(valueToCopy)
      .then(() => {
        toast({
          title: "Output copied to clipboard.",
          status: "info",
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error copying to clipboard:-", error);
      });
  }
};
