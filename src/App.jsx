import { useState } from "react";
import "./App.css";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import axios from "axios";
import { Spinner } from "@chakra-ui/react";

function App() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("Your Output Will Come here...");
  // const [hide, setHide] = useState(false);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleConvert = () => {
    setLoading(true);
    axios
      .post("https://code-converter-api-jjb2.onrender.com/convert", {
        code,
        language,
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDebug = () => {
    setLoading(true);
    axios
      .post("https://code-converter-api-jjb2.onrender.com/debug", {
        code,
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClear=()=>{
    setCode("")
    setOutput("Your Output Will Come here...")
  }

  const handleQualityCheck = () => {
    setLoading(true);
    axios
      .post("https://code-converter-api-jjb2.onrender.com/qualityCheck", {
        code
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="border border-black h-screen">
      <div className="p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white ">
        <h1 className="text-5xl font-mono font-semibold text-center">
          AI Code Fixer
        </h1>
      </div>

      <div className="m-auto flex  justify-center gap-3 items-center mt-3 mb-3">
        <p className="text-lg font-medium">Convert to : </p>
        <select
          name=""
          id=""
          className={`text-md p-1 rounded-lg bg-slate-300 font-medium`}
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="Javascript">Javascript</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Rust">Rust</option>
          <option value="Golang">Golang</option>
          <option value="C++">C++</option>
        </select>

        <button onClick={handleClear} disabled={!code} className="disabled:bg-orange-100 disabled:cursor-not-allowed block bg-orange-700 text-white text-md font-medium p-1 pl-2 pr-2 rounded-lg">Clear</button>

      </div>

      <div className="flex m-auto w-[100%] justify-evenly ">
        <div className="flex flex-col  justify-evenly gap-14">
          <button
            onClick={handleConvert}
            disabled={!code}
            className={` disabled:bg-sky-200 disabled:cursor-not-allowed block bg-sky-400 text-white text-lg font-medium p-2 rounded-lg`}
          >
            Convert
          </button>
          <button
          onClick={handleDebug}
            disabled={!code}
            className={`disabled:bg-orange-200 disabled:cursor-not-allowed block bg-orange-500 text-white text-lg font-medium p-2 rounded-lg`}
          >
            Debug
          </button>
          <button
          onClick={handleQualityCheck}
            disabled={!code}
            className={` disabled:bg-green-300 disabled:cursor-not-allowed block bg-green-600 text-white text-lg font-medium p-2 rounded-lg`}
          >
            Quality Check
          </button>

        </div>
        {/* editor input */}
        <div className="pt-4 bg-[#272822]">
          <AceEditor
            placeholder="Type or Paste your Code here"
            mode="javascript" // Set the editor mode
            theme="monokai" // Set the editor theme
            value={code} // Pass the code value
            onChange={handleCodeChange} // Handle code changes
            name="code-editor"
            fontSize={16}
            width="600px"
            height="480px"
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
              enableBasicAutocompletion: false,
              enableLiveAutocompletion: false,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
            }}
          />
        </div>

        {/* output */}
        <div
          className={`w-[600px] h-[500px] ${
            loading && "flex justify-center items-center"
          }  h-500px border text-slate-300 p-1 pl-5 font-mono bg-black overflow-scroll`}
        >
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200" 
              color="blue.500"
              size="xl"
            />
          ) : (
            <pre className="whitespace-pre-wrap">{output}</pre>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
