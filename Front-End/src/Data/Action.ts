import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

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
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `
    [ Act as a Professional Developer and Code Converter ],
    You have to convert the given code into the ${selectedlanguage} language as per the Instructions below.
    Instructions : 
    - [ ! IMPORTANT ] If the language in which the given code written is same as the language asked to convert the code into, Just simply tell me in a good and soothing language, do not write any code.
    - Else, convert the code into the language asked.
    - Do not provide any explanation of the code and do not write anything extra other than the converted code, also you need not to provide any note as well.

    Here is the Code that needs to be converted :- ${codeInpVal}
    `,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload:
            res?.data?.candidates[0]?.content?.parts[0]?.text ||
            "Something went wrong while converting your code, please contact the developer!" +
              "\n" +
              "" +
              "\n",
        });
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
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `
    [ Act as a Professional Developer and Code Debugger ],
    You have to debug the given code as per the Instructions below.
    Instructions :
    - [ ! IMPORTANT ] If there is no errors in the given code or it seems to work fine, Just simply tell me that the code seems to work fine in good and soothing language, do not write any code or explaination for that.
    - Else Provide a least and precise markdown explaination of the errors detected in the the given code and how it is fixed with explaination heading: "Following Errors detected in the given Code:".
    - After providing the explaination, give the debugged code and do not write or add without any comments or explaination in between the code lines.
    - Don't go much deep into the explaination, keep it short and precise.

    Here is the Code that needs to be debugged :- ${codeInpVal}
    `,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload:
            res?.data?.candidates[0]?.content?.parts[0]?.text ||
            "Something went wrong while debugging your code, please contact the developer!" +
              "\n" +
              "" +
              "\n",
        });
        // console.log("Debug Request Successfull :-", res.data);
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
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `
    [ Act as a Professional Developer and Code Quality Checker ],
    Based on the below Criteria and Instructions, you have to check the quality of the given code.

    Criteria:
    - Consistency: Evaluate the code for consistent coding style, naming conventions, and formatting.
    - Performance: Assess the code for efficient algorithms, optimized data structures, and overall performance considerations.
    - Documentation: Review the code for appropriate comments, inline documentation, and clear explanations of complex logic.
    - Error Handling: Examine the code for proper error handling and graceful error recovery mechanisms.
    - Testability: Evaluate the code for ease of unit testing, mocking, and overall testability.
    - Modularity: Assess the code for modular design, separation of concerns, and reusability of components.
    - Complexity: Analyze the code for excessive complexity, convoluted logic, and potential code smells.
    - Duplication: Identify any code duplication and assess its impact on maintainability and readability.
    - Readability: Evaluate the code for readability, clarity, and adherence to coding best practices.

    Instructions :
    - Provide a summary of code quality in visually appealing points.
    - Provide quality check report showing the percentage-wise evaluation for each parameter mentioned above in the Criteria section.
    - In the summary also provide the areas where the code needs to be improved.
    - Don't go much deep into the explaination, keep it short and precise.
    - Use simple english language, do not use complex words.
    - Do not write anything extra other, also you need not to provide any note as well.

    Here is the Code that needs to be quality checked :- ${codeInpVal}
    `,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "SUCCESS",
          payload:
            res?.data?.candidates[0]?.content?.parts[0]?.text ||
            "Something went wrong while checking quality of your code, please contact the developer!" +
              "\n" +
              "" +
              "\n",
        });
        //  console.log("Quality Check Request Successfull :-", res.data);
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

// Function for Connecting the server on page mount, this request is made to homeroute on backend to wakeup the server
export const ConnectServer = (
  dispatch: any,
  reqActive: boolean,
  toast: any
) => {
  if (!reqActive) {
    toast.closeAll();
    dispatch({ type: "CONNECTIONLOADING" });
    axios
      .get(`${API_KEY}`)
      .then((res) => {
        dispatch({
          type: "CONNECTIONSUCCESS",
        });
        console.log("Connected to Server:-", res.data.msg);
      })
      .catch((err: any) => {
        dispatch({ type: "ISERROR" });
        toast({
          title: "Server Connection Error!",
          description: "Please contact the developer.",
          status: "error",
          isClosable: true,
        });
        console.log("Server Connection Error :-", err);
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
