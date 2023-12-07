import * as css from "../Styles/CodeAreaStyles";
import BtnCustom from "./BtnCustom";
import { Languages } from "../Data/Languages";

import axios from "axios";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-xml";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/theme-kuroir";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-ambiance";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-nord_dark";
import { useEffect, useState, useRef } from "react";
import { Box, Select, useTheme, Image } from "@chakra-ui/react";
import { LiaExchangeAltSolid as ConvertIcon } from "react-icons/lia";
import { VscDebug as DebugIcon } from "react-icons/vsc";
import { LiaClipboardCheckSolid as QualityIcon } from "react-icons/lia";
import { MdContentCopy as Copy } from "react-icons/md";
import { AiOutlineDelete as Clear } from "react-icons/ai";
import { MdOutlineImagesearchRoller as ThemeIcon } from "react-icons/md";
import { BiFontSize as FontSizeIcon } from "react-icons/bi";
import { RxFontSize } from "react-icons/rx";
import { BiPlus as IncIcon, BiMinus as DecIcon } from "react-icons/bi";

const CodeArea = () => {
  const theme = useTheme();
  const ContextColors = theme.colors;
  const [currImg, setCurrImg] = useState(Languages[0].img);
  const [language, setLanguage] = useState("JavaScript");
  // const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [currentTheme, setTheme] = useState("monokai");
  const [fontSize, setFontSize] = useState(16);
  const [output, setOutput] = useState("Your Output Will Come here...");
  // const [hide, setHide] = useState(false);

  const [divWidth, setDivWidth] = useState<number | null>(null);

  // Function to update div width
  const updateDivWidth = () => {
    const width = document
      .getElementById("myDiv")
      ?.getBoundingClientRect().width;
    if (width) {
      setDivWidth(width);
    }
  };

  // Update div width on component mount and resize
  useEffect(() => {
    updateDivWidth();

    const handleResize = () => {
      updateDivWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCodeChange = (newCode: any) => {
    setCode(newCode);
  };

  const handleOutputChange = (newCode: any) => {
    setOutput(newCode);
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

  // const handleDebug = () => {
  //   setLoading(true);
  //   axios
  //     .post("https://code-converter-api-jjb2.onrender.com/debug", {
  //       code,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setOutput(res.data.response);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleClear = () => {
  //   setCode("");
  //   setOutput("Your Output Will Come here...");
  // };

  // const handleQualityCheck = () => {
  //   setLoading(true);
  //   axios
  //     .post("https://code-converter-api-jjb2.onrender.com/qualityCheck", {
  //       code,
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setOutput(res.data.response);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    let selectedImg = Languages.filter((item: any) => {
      if (item.name == language) {
        return item.img;
      }
    });
    setCurrImg(selectedImg[0].img);
  }, [language]);

  const handleCopy = () => {
    console.log("copied");
  };
  const handleClear = () => {
    console.log("copied");
  };

  return (
    <Box css={css.Outer}>
      {/* Input Editor */}
      <Box
        bg="bgD"
        boxShadow="shadowA"
        id="myDiv"
        css={css.BothEditorContainers}
      >
        <Box css={css.InputBtnsContainer}>
          <BtnCustom onClick={handleConvert} disabled={!code}>
            Convert
            <Image as={ConvertIcon} fontSize={["18px"]} fontWeight={["600"]} />
          </BtnCustom>

          <BtnCustom onClick={handleConvert} disabled={!code}>
            Debug
            <Image as={DebugIcon} />
          </BtnCustom>
          <BtnCustom onClick={handleConvert} disabled={!code}>
            Check Quality
            <Image as={QualityIcon} />
          </BtnCustom>
          <BtnCustom onClick={handleClear} disabled={!code}>
            <Image as={FontSizeIcon} />
            <Image as={DecIcon} />
            {fontSize}
            <Image as={IncIcon} />
          </BtnCustom>
        </Box>

        <AceEditor
          placeholder="Type or Paste your Code here"
          mode="javascript"
          theme={currentTheme}
          value={code}
          onChange={handleCodeChange}
          fontSize={fontSize}
          name="code-editor"
          readOnly={false}
          width={`${divWidth}px`}
          // height="480px"
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 2,
          }}
        />
      </Box>

      {/* Output */}
      <Box bg="bgD" boxShadow="shadowA" css={css.BothEditorContainers}>
        <Box css={css.OutputBtnsContainer}>
          <Box>
            <Select
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
              }}
              icon={currImg}
              focusBorderColor={ContextColors.black}
              css={css.SelectTagCss(
                ContextColors.black,
                ContextColors.black,
                500
              )}
            >
              {Languages.map((item: any, ind: number) => (
                <option value={item.name} key={ind}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>

          <Box display={["flex"]} gap={["10px"]} alignItems="center">
            <BtnCustom onClick={handleCopy} disabled={!code}>
              <Image as={Copy} />
            </BtnCustom>
            <Select
              value={currentTheme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
              icon={<ThemeIcon />}
              focusBorderColor={ContextColors.black}
              css={css.SelectTagCss(
                ContextColors.black,
                ContextColors.black,
                400
              )}
            >
              {EditorThemes.map((item: any, ind: number) => (
                <option value={item.theme} key={ind}>
                  {item.name}
                </option>
              ))}
            </Select>
          </Box>
        </Box>

        <AceEditor
          placeholder="Type or Paste your Code here"
          mode="xml"
          theme={currentTheme}
          value={output}
          onChange={handleOutputChange}
          fontSize={fontSize}
          name="code-editor"
          width={`${divWidth}px`}
          readOnly={true}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={false}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: false,
            tabSize: 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default CodeArea;

const EditorThemes = [
  {
    theme: "monokai",
    name: "Monokai",
  },
  {
    theme: "github",
    name: "Github",
  },
  {
    theme: "cobalt",
    name: "Cobalt",
  },
  {
    theme: "kuroir",
    name: "Kuroir",
  },
  {
    theme: "twilight",
    name: "Twilight",
  },
  {
    theme: "xcode",
    name: "Xcode",
  },
  {
    theme: "terminal",
    name: "Terminal",
  },
  {
    theme: "chaos",
    name: "Chaos",
  },
  {
    theme: "tomorrow",
    name: "Tomorrow",
  },
  {
    theme: "nord_dark",
    name: "Nord Dark",
  },
  {
    theme: "ambiance",
    name: "Ambiance",
  },
];
