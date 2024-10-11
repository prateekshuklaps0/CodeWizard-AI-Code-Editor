const API_KEY = import.meta.env.VITE_API_KEY || "API_KEY not found.";
// const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN || "Token_Not_Found";

import {
  SUCCESS,
  IS_ERROR,
  IMPORT_ERROR,
  DEBUG_LOADING,
  IMPORT_LOADING,
  CODEWIZARD_KEY,
  CONVERT_LOADING,
  SUCCESS_USERNAME,
  RUN_CODE_LOADING,
  REPO_CLICK_ERROR,
  CONNECTION_LOADING,
  CONNECTION_SUCCESS,
  REPO_CLICK_SUCCESS,
  FILE_CLICKED_SUCCESS,
  FOLDER_CLICK_SUCCESS,
  QUALITY_CHECK_LOADING,
} from "./Context";

import axios from "axios";

// const githubConfig = {
//   headers: {
//     Authorization: `Bearer ${GITHUB_TOKEN}`,
//     "X-GitHub-Api-Version": "2022-11-28",
//   },
// };

// Function for Run Code Request
export const RunCodeReq = async (dispatch: any, reqActive: boolean, chakraToast: any, codeInpVal: any) => {
  if (reqActive) return;
  chakraToast.closeAll();
  if (!codeInpVal || codeInpVal.length <= 5)
    return chakraToast({ title: "Attention!", description: "No valid code snippet detected to run yet.", status: "warning", isClosable: true, });
  dispatch({ type: RUN_CODE_LOADING });
  try {
    const RunCodeRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `
                Consider you are code runtime environment, you have to compile and run the provided code by carefully and concisely following the instructions below :
                
                * If the provided input is not a valid code snippet, politely inform me about the input and why it cannot be compiled.
                * Remember, all the responses you generate will be shown directly to the user, so it should be calm, soothing, and descriptive.
                * If your descriptive response is more than one sentence, ensure each sentence is on a new line.
                * If the code includes imports or dependencies (e.g., CSS files, external libraries, components), and these are not accessible within the current environment, inform me of this as mentioned in the above instruction.
                * Carefully and thoroughly run, calculate, and compile the entire code line by line internally, then provide the output in your response.
                * Compile the code exactly as it is. Do not infer, optimize, or modify the input logic or code.
                * If the code contains syntax errors or other issues, highlight these errors in your response.
                * Any difference between the output you generate and the output from a real code runtime environment could compromise the reliablity of my project, so make sure to study the code line by line, only after a thorough examination provide the output you generated.
                * If the code is valid, compile it like a real runtime environment would do and return nothing else but the output of the code.
                * If the code is incomplete or ambiguous, provide a text alerting me to this, as instructed above.
                * If the code includes language-specific or environment-specific requirements (e.g., a specific runtime or library), make assumptions based on common defaults unless specified otherwise.
                * Do not provide any explanations or additional commentary beyond what is requested (i.e., the result of the compilation, error messages, or validation feedback).
                
                Here is the input code sample:
                
                '''
                ${codeInpVal}
                '''
                 `,
          }],
        }],
      }, { headers: { "Content-Type": "application/json" } }
    );

    dispatch({
      type: SUCCESS,
      payload: RunCodeRes?.data?.candidates[0]?.content?.parts[0]?.text || "Something went wrong while running your code, please contact the developer!" + "\n" + "\n",
    });
    // console.log("Run Code Response :-", RunCodeRes?.data);
  } catch (error) {
    dispatch({ type: IS_ERROR });
    chakraToast({ title: "Something Went Wrong!", description: "Please try again after sometime.", status: "error", isClosable: true, });
    console.log("Run Code Request Error :-", error);
  }
};

// Function for Debug Request
export const DebugReq = async (dispatch: any, reqActive: boolean, chakraToast: any, codeInpVal: any) => {
  if (reqActive) return;
  chakraToast.closeAll();
  if (!codeInpVal || codeInpVal.length <= 5)
    return chakraToast({ title: "Attention!", description: "A valid code is required for debugging.", status: "warning", isClosable: true, });
  dispatch({ type: DEBUG_LOADING });
  try {
    const DebugRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `
                [ Act as a Professional Developer and Code Debugger ]
                 You have to debug the provided code by strictly following the below instructions very carefully:
                 
                 Instructions:
                 - If the provided input is not a valid code snippet, politely inform me why it cannot be debugged. Remember, all the responses you generate will be shown directly to the user, so it should be calm, soothing, and descriptive.
                 - If your descriptive response is more than one sentence, ensure each sentence is on a new line.
                 - If the code appears to work fine and no errors are detected, calmly and politely inform me of this.
                 - Your response should be clear, concise, and reassuring, with each sentence on a new line.
                 - If errors or issues are found, first provide the debugged code, then offer a concise explanation of each error you fixed and any changes you made.
                 - For each error, describe what the issue was, why it occurred, and how you fixed it. Ensure your explanations are precise and to the point.
                 - The debugged code should be free of errors and should not include any additional comments or explanations within the code.
                 - If the code includes external dependencies or environmental factors that might cause issues, mention them as part of your debugging process.
                 - If the code is incomplete or ambiguous, suggest potential corrections or request clarification.
                 - In addition to debugging, check if the code follows proper syntax, has no mismatched brackets/parentheses, no missing semicolons, correct use of keywords, proper closing of tags, correct attribute usage, proper function binding, accurate variable and function names, correct imports, appropriate handling of asynchronous code, conditional rendering, and typo errors, along with any other relevant parameters.
                 - Do not provide any additional commentary beyond what is necessary for debugging (i.e., the explanation of errors and the corrected code).
                 - Do not wrap the response or debugged code in any markdown brackets, code blocks, backticks, or grave accents.
                 
                 Here is the code input from user that needs to be debugged: 
                 ${codeInpVal}
                 `,
          }],
        }],
      }, { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: SUCCESS,
      payload: DebugRes?.data?.candidates[0]?.content?.parts[0]?.text || "Something went wrong while debugging your code, please contact the developer!" + "\n" + "\n",
    });
    // console.log("Debug Response :-", DebugRes?.data);
  } catch (error) {
    dispatch({ type: IS_ERROR });
    chakraToast({ title: "Something Went Wrong!", description: "Please try again after sometime.", status: "error", isClosable: true, });
    console.log("Debug Request Error :-", error);
  }
};

// Function for Code Quality Check Request
export const CheckQualityReq = async (dispatch: any, reqActive: boolean, chakraToast: any, codeInpVal: any) => {
  if (reqActive) return;
  chakraToast.closeAll();
  if (!codeInpVal || codeInpVal.length <= 5)
    return chakraToast({ title: "Attention!", description: "No valid code detected for quality check.", status: "warning", isClosable: true, });
  dispatch({ type: QUALITY_CHECK_LOADING });
  try {
    const QualityCheckRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `
                [ Act as a Professional Code Quality Checker & Developer ]
                 You have to assess the quality of the provided code based on the criteria and instructions below.
                 
                 Criteria:
                 - Consistency: Evaluate the code for consistent coding style, naming conventions, and formatting.
                 - Performance: Assess the code for efficient algorithms, optimized data structures, and overall performance considerations.
                 - Documentation: Review the code for appropriate comments, inline documentation, and clear explanations of complex logic.
                 - Error Handling: Examine the code for proper error handling, graceful error recovery, and the use of exceptions or error codes where applicable.
                 - Testability: Evaluate the code for ease of unit testing, mocking, and overall testability, including whether functions and modules are designed with testing in mind.
                 - Modularity: Assess the code for modular design, separation of concerns, and the reusability of components and functions.
                 - Complexity: Analyze the code for excessive complexity, convoluted logic, and potential code smells, such as deep nesting or long methods.
                 - Duplication: Identify any code duplication and assess its impact on maintainability, readability, and potential technical debt.
                 - Readability: Evaluate the code for readability, clarity, and adherence to coding best practices, ensuring that it can be easily understood by other developers.
                 
                 Instructions:
                 - If the provided input is not a valid code snippet, politely inform me. Use a calm and reassuring tone.
                 - Provide a summary of code quality in visually appealing bullet points.
                 - Remember, all responses you generate will be shown directly to the user, so they should be calm, soothing, and descriptive.
                 - If your response is more than one sentence, ensure each sentence is on a new line.
                 - In the quality check report, first you have to provide a brief and precise descriptive summary of the code provided.
                 - Then, generate a code quality summary based each of the criteria mentioned above.
                 - Then generate a percentage-wise evaluations of the provided code for each criterion mentioned above (the some decorative table method to present the report).
                 - Then highlight areas where the code excels and areas for improvement (must).
                 - Finally a closing remark about the provided code with a nice and decent heading.
                 - Keep explanations short, precise, and in simple English. Avoid using complex terminology.
                 - Do not include any additional commentary, notes, or irrelevant information.
                 - The quality report you generate will be shown in a markdown file so you are expected to decorate the the report as you want like a github repo ReadMe file.
                 
                 Here is the code that needs to be quality checked:
                 ${codeInpVal}
                 `,
          }],
        }],
      }, { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: SUCCESS,
      payload: QualityCheckRes?.data?.candidates[0]?.content?.parts[0]?.text || "Something went wrong while debugging your code, please contact the developer!" + "\n" + "\n",
    });
    // console.log("Quality Check Response :-", QualityCheckRes?.data);
  } catch (error) {
    dispatch({ type: IS_ERROR });
    chakraToast({ title: "Something Went Wrong!", description: "Please try again after sometime.", status: "error", isClosable: true, });
    console.log("Quality Check Request Error :-", error);
  }
};

// Function for Convert Request
export const ConvertReq = async (dispatch: any, reqActive: boolean, chakraToast: any, codeInpVal: any, selectedlanguage: string) => {
  if (reqActive) return;
  chakraToast.closeAll();
  if (!codeInpVal || codeInpVal.length <= 5)
    return chakraToast({ title: "Attention!", description: `Please provide a valid code to convert it to ${selectedlanguage}`, status: "warning", isClosable: true, });
  dispatch({ type: CONVERT_LOADING });
  try {
    const ConvertRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `
                [ Act as a Professional Code Converter ]
                 You need to convert the provided code into the ${selectedlanguage} language by strictly following the instructions below:
                 Instructions:
                 - If the provided input is not a valid code snippet, or if the code is already written in the ${selectedlanguage} language, politely inform me why it cannot be converted. Use a calm and reassuring tone, and do not provide any code.
                 - Provide only the converted code. Do not include any explanations, notes, or additional commentary.
                 - If the code cannot be converted to ${selectedlanguage} for any reason, mention this concisely.
                 - Remember, all responses you generate will be shown directly to the user, so they should be calm, soothing, and descriptive.
                 - If your response is more than one sentence, ensure each sentence is on a new line.
                 - Ensure that the converted code is accurate and adheres strictly to the syntax and conventions of the ${selectedlanguage} language.
                 - If the code includes constructs or functions that are not directly translatable, make reasonable assumptions to convert them while ensuring the functionality remains consistent.
                 - Do not provide any additional commentary or explanation beyond what is necessary for the conversion of the code.
                 - If the code cannot be fully converted due to language-specific limitations or constraints, mention this clearly and concisely.
                 - [ ! IMPORTANT ] Do not wrap the response or code in any markdown brackets, code blocks, backticks, or grave accents.
                 
                 Here is the code input from user that needs to be converted:
                 ${codeInpVal}
                 `,
          }],
        }],
      }, { headers: { "Content-Type": "application/json" } }
    );
    dispatch({
      type: SUCCESS,
      payload: ConvertRes?.data?.candidates[0]?.content?.parts[0]?.text || "Something went wrong while converting your code, please contact the developer!" + "\n" + "\n",
    });
    // console.log("Convert Response :-", ConvertRes?.data);
  } catch (error) {
    dispatch({ type: IS_ERROR });
    chakraToast({ title: "Something Went Wrong!", description: "Please try again after sometime.", status: "error", isClosable: true, });
    console.log("Convert Request Error :-", error);
  }
};

// Search Github User
export const SearchGithubUser = async (dispatch: any, userNameInp: string) => {
  dispatch({ type: IMPORT_LOADING });
  try {
    const [userNameRes, repoListRes] = await Promise.all([
      axios.get<any>(`https://api.github.com/users/${userNameInp}`),
      axios.get<any>(`https://api.github.com/users/${userNameInp}/repos`),
    ]);
    const LsData = GetLsData() || {};
    let dataToBeStored: any = {
      ...LsData,
      avatar_url: userNameRes?.data?.avatar_url || "",
      githubId: userNameRes?.data?.login || "",
      userName: userNameRes?.data?.name || "",
    };
    SetLsData(dataToBeStored);
    const reposList = repoListRes?.data || [];
    dispatch(reposList.length > 0 ? { type: SUCCESS_USERNAME, payload: reposList, } : { type: IMPORT_ERROR, payload: "No Public Repository Found !", });
    //  console.log("Github User Search Response :", repoListRes?.data);
  } catch (error: any) {
    dispatch({ type: IMPORT_ERROR, payload: error?.response?.data?.message || "Something Went Wrong", });
    console.log("Github Username Search Error :", error || "Something Went Wrong");
  }
};

// Repo Click
export const GetRepoContents = async (dispatch: any, chakraToast: any, repoName: string) => {
  dispatch({ type: IMPORT_LOADING });
  chakraToast.closeAll();
  const githubId = GetLsData()?.githubId || "";
  try {
    const repoContentRes = await axios.get(`https://api.github.com/repos/${githubId}/${repoName}/contents`);
    const payload = {
      currentRepoName: repoName,
      contentsArr: repoContentRes?.data || [],
    };
    dispatch({ type: REPO_CLICK_SUCCESS, payload, });
    // console.log(`Repo Click Response  - ${repoName} :`, repoContentRes?.data);
  } catch (error: any) {
    chakraToast({ title: error?.response?.data?.message || "Something Went Wrong", status: "error", position: "top", });
    dispatch({ type: REPO_CLICK_ERROR, payload: error?.response?.data?.message || "Something Went Wrong", });
    console.log(`Repo Click Error - ${repoName} :`, error || "Something Went Wrong");
  }
};

// Folder Click
export const FolderClickReq = async (dispatch: any, chakraToast: any, repoName: string = "Repo Name Not Found", folderPath: string = "Folder Path Not Found") => {
  dispatch({ type: IMPORT_LOADING });
  const githubId = GetLsData()?.githubId || "";
  try {
    const folderClickRes = await axios.get(`https://api.github.com/repos/${githubId}/${repoName}/contents/${folderPath}`);
    const payload = { pathsArr: GeneratePathObjects(folderPath), contentsArr: folderClickRes?.data || [], };
    dispatch({ type: FOLDER_CLICK_SUCCESS, payload, });
    // console.log(`Folder Click Response - ${folderPath}  :`, folderClickRes?.data);
  } catch (error: any) {
    chakraToast({ title: error?.response?.data?.message || "Something Went Wrong", status: "error", position: "top", });
    dispatch({ type: REPO_CLICK_ERROR, payload: error?.response?.data?.message || "Something Went Wrong", });
    console.log(`Folder Click Error - ${folderPath} :`, error || "Something Went Wrong");
  }
};

// File Click
export const FileClickReq = async (dispatch: any, chakraToast: any, repoName: string = "Repo Name Not Found", filePath: string = "Folder Path Not Found") => {
  dispatch({ type: IMPORT_LOADING });
  const githubId = GetLsData()?.githubId || "";
  try {
    const fileClickRes = await axios.get(`https://api.github.com/repos/${githubId}/${repoName}/contents/${filePath}`);
    const payload = {
      pathsArr: GeneratePathObjects(filePath),
      clickedFileData: atob(fileClickRes?.data?.content) || "",
      downloadFileLink: fileClickRes?.data?.download_url || "",
      clickedFileName: fileClickRes?.data?.name || "",
    };
    dispatch({ type: FILE_CLICKED_SUCCESS, payload, });
    // console.log(`File Click Response - ${filePath}  :`, fileClickRes?.data);
  } catch (error: any) {
    chakraToast({ title: error?.response?.data?.message || "Something Went Wrong", status: "error", position: "top", });
    dispatch({ type: REPO_CLICK_ERROR, payload: error?.response?.data?.message || "Something Went Wrong", });
    console.log(`File Click Error - ${filePath} :`, error || "Something Went Wrong");
  }
};

// Function for Connecting the server on page mount, this request is made to homeroute on backend to wakeup the server
export const ConnectServer = (dispatch: any, reqActive: boolean, chakraToast: any) => {
  if (!reqActive) {
    chakraToast.closeAll();
    dispatch({ type: CONNECTION_LOADING });
    axios.get(`${API_KEY}`).then((res) => { dispatch({ type: CONNECTION_SUCCESS, }); console.log("Connected to Server:-", res.data.msg) })
      .catch((err: any) => {
        dispatch({ type: IS_ERROR });
        chakraToast({ title: "Server Connection Error!", description: "Please contact the developer.", status: "error", isClosable: true, });
        console.log("Server Connection Error :-", err);
      });
  }
};

// Function for copying output to the clipboard
export const handleCopy = (chakraToast: any, valueToCopy: any) => {
  chakraToast.closeAll();
  if (!valueToCopy) {
    return chakraToast({ title: "Output is empty.", status: "info", isClosable: true, });
  }
  navigator.clipboard.writeText(valueToCopy).then(() => {
    chakraToast({ title: "Output copied to clipboard.", status: "info", isClosable: true, });
  }).catch((error) => {
    console.error("Error copying to output :", error);
  });
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

// This function takes a file/folder path and returns all the paths and name of folders inbetween
export function GeneratePathObjects(path: string) {
  const pathArray = path.split("/").filter((name: any) => name !== "");
  return pathArray.map((name: any, index: number) => ({ name, path: pathArray.slice(0, index + 1).join("/"), index, }));
}

// This function takes a number as percentage and returns percentage of window.innerWidth in pixels
export const CalculateWidthFromPercentage = (percentage: number): number => {
  const windowWidth = window.innerWidth;
  const calculatedWidth = (percentage / 100) * windowWidth;
  return Math.floor(calculatedWidth);
};

// This function returns the stored font-size
export const GetStoredFontSize = () => {
  let storedFont = GetLsData()?.fontSize || 16;
  let numFont = Number(storedFont) || 16;
  if (numFont < 12) {
    numFont = 12;
  } else if (numFont > 42) {
    numFont = 27;
  }
  return numFont;
};

// This function returns the stored editor theme
export const GetStoredEditorTheme = (ThemesArr: any) => {
  const storedEditorTheme = GetLsData()?.editorTheme || "cobalt";
  const isThemePresent = ThemesArr.some((obj: any) => obj?.theme === storedEditorTheme);
  return isThemePresent ? storedEditorTheme : ThemesArr[1]?.theme || "cobalt";
};

// This function returns name of the stored programming language
export const GetStoredLanguage = (LanguageArr: any) => {
  const storedLanguage = GetLsData()?.convertLanguage || "Javascript";
  const isLanguagePresent = LanguageArr.some((obj: any) => obj?.name === storedLanguage);
  return isLanguagePresent ? storedLanguage : LanguageArr[0]?.name || "Javascript";
};
