import axios from "axios";
import {
  CODEWIZARD_KEY,
  CONNECTION_LOADING,
  CONNECTION_SUCCESS,
  CONVERT_LOADING,
  DEBUG_LOADING,
  IMPORT_ERROR,
  FILE_CLICKED_SUCCESS,
  GET_REPO_PATH_ERROR,
  GET_REPO_PATH_LOADING,
  IMPORT_LOADING,
  PATH_CHANGE,
  QUALITY_CHECKLOADING,
  SUCCESS_USERNAME,
} from "./Context";

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
    dispatch({ type: CONVERT_LOADING });
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
    dispatch({ type: DEBUG_LOADING });
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
    dispatch({ type: QUALITY_CHECKLOADING });
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

// Search Github User
export const SearchGithubUser = async (dispatch: any, userNameInp: string) => {
  // dfgdfgd
  dispatch({ type: IMPORT_LOADING });
  const editorTheme = GetLsData()?.editorTheme || "Cobalt";
  let dataToBeStored: any = { editorTheme };
  SetLsData(dataToBeStored);
  try {
    const [userNameRes, repoListRes] = await Promise.all([
      axios.get<any>(`https://api.github.com/users/${userNameInp}`),
      axios.get<any>(`https://api.github.com/users/${userNameInp}/repos`),
    ]);

    (dataToBeStored.avatar_url = userNameRes?.data?.avatar_url || ""),
      (dataToBeStored.githubId = userNameRes?.data?.login || ""),
      (dataToBeStored.userName = userNameRes?.data?.name || ""),
      SetLsData(dataToBeStored);
    const reposList = repoListRes?.data || [];
    dispatch(
      reposList.length > 0
        ? {
            type: SUCCESS_USERNAME,
            payload: reposList,
          }
        : {
            type: IMPORT_ERROR,
            payload: "No Public Repositories Found !",
          }
    );
    //  console.log("Github User Search Response :", repoListRes?.data);
    //  console.log("User Repos Response :", repoListRes?.data);
  } catch (error: any) {
    dispatch({
      type: IMPORT_ERROR,
      payload: error?.response?.data?.message || "Something Went Wrong",
    });
    console.log(
      "Github Username Search Error :",
      error?.response?.data?.message || "Something Went Wrong"
    );
  }
};

// Repo Path Click
export const GetRepoPaths = async (dispatch: any, repoName: string) => {
  // dfgdfgd
  dispatch({ type: GET_REPO_PATH_LOADING });
  try {
    const userNamesRes = await axios.get(
      `https://api.github.com/repos/prateekshuklaps0/${repoName}/contents`
    );
    dispatch({
      type: PATH_CHANGE,
      payload: { currentPath: repoName, contentsArr: userNamesRes?.data },
    });
    console.log("Repo Name Click Response :", userNamesRes?.data || []);
  } catch (error: any) {
    dispatch({
      type: GET_REPO_PATH_ERROR,
      payload: error?.response?.data?.message || "Something Went Wrong",
    });
    console.log(
      "Repo Name Click Error :",
      error?.response?.data?.message || "Something Went Wrong"
    );
  }
};

// Folder Click
export const FolderClickReq = async (
  dispatch: any,
  repoName: string = "Repo Name Not Found",
  folderName: string = "Folder Path Not Found"
) => {
  // dfgdfgd
  dispatch({ type: GET_REPO_PATH_LOADING });
  try {
    const userNamesRes = await axios.get(
      `https://api.github.com/repos/prateekshuklaps0/${repoName}/contents/${folderName}`
    );
    dispatch({
      type: PATH_CHANGE,
      payload: { currentPath: repoName, contentsArr: userNamesRes?.data },
    });
    console.log("Folder Click Response :", userNamesRes?.data || []);
  } catch (error: any) {
    dispatch({
      type: GET_REPO_PATH_ERROR,
      payload: error?.response?.data?.message || "Something Went Wrong",
    });
    console.log(
      "Folder Click Error :",
      error?.response?.data?.message || "Something Went Wrong"
    );
  }
};

// File Click
export const FileClickReq = async (
  dispatch: any,
  repoName: string = "Repo Name Not Found",
  filePath: string = "Folder Path Not Found"
) => {
  // dfgdfgd
  dispatch({ type: GET_REPO_PATH_LOADING });
  try {
    const userNamesRes = await axios.get(
      `https://api.github.com/repos/prateekshuklaps0/${repoName}/contents/${filePath}`
    );
    dispatch({
      type: FILE_CLICKED_SUCCESS,
      payload: {
        fetchedCodeData: atob(userNamesRes?.data?.content) || "",
        downloadFileLink: userNamesRes?.data?.download_url,
        clikedFileName: userNamesRes?.data?.name,
      },
    });
    console.log("File Click Response :", userNamesRes?.data || []);
  } catch (error: any) {
    dispatch({
      type: GET_REPO_PATH_ERROR,
      payload: error?.response?.data?.message || "Something Went Wrong",
    });
    console.log(
      "File Click Error :",
      error?.response?.data?.message || "Something Went Wrong"
    );
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
    dispatch({ type: CONNECTION_LOADING });
    axios
      .get(`${API_KEY}`)
      .then((res) => {
        dispatch({
          type: CONNECTION_SUCCESS,
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

// Set Data in localstorage
export const SetLsData = (objData: { [key: string]: any }) => {
  localStorage.setItem(CODEWIZARD_KEY, JSON.stringify(objData));
};

// Get Data in localstorage
export const GetLsData = () => {
  const storedData = localStorage.getItem(CODEWIZARD_KEY);
  return storedData ? JSON.parse(storedData) : {};
};
