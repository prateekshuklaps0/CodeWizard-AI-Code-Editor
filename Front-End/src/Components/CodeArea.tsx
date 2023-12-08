import * as css from "../Styles/CodeAreaStyles";
import BtnCustom from "./BtnCustom";
import { Context } from "../Data/Context";
import {
  updateDivWidth,
  handleConvert,
  handleDebug,
  handleCheckQuality,
} from "../Data/Action";

import { useEffect, useState, useContext } from "react";
import { Box, Select, useTheme, Image, Text, useToast } from "@chakra-ui/react";

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

import { FaJava as Java } from "react-icons/fa6";
import { DiRuby as Ruby } from "react-icons/di";
import { VscDebug as DebugIcon } from "react-icons/vsc";
import {
  LiaExchangeAltSolid as ConvertIcon,
  LiaClipboardCheckSolid as QualityIcon,
} from "react-icons/lia";
import {
  MdOutlineImagesearchRoller as ThemeIcon,
  MdContentCopy as Copy,
} from "react-icons/md";
import {
  BiPlus as IncIcon,
  BiMinus as DecIcon,
  BiFontSize as FontSizeIcon,
} from "react-icons/bi";
import {
  SiJavascript as JavaScript,
  SiPython as Python,
  SiCplusplus as CPlusPlus,
  SiCplusplus as CSharp,
  SiSwift as Swift,
  SiTypescript as TypeScript,
  SiPhp as PHP,
  SiKotlin as Kotlin,
  SiRust as Rust,
} from "react-icons/si";

const CodeArea = () => {
  const toast = useToast();
  const theme = useTheme();
  const ContextColors = theme.colors;
  const {
    dispatch,
    ConvertLoading,
    DebugLoading,
    QualityLoading,
    isError,
    reqActive,
    codeInpVal,
    outputVal,
  } = useContext(Context);
  // Other States
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("JavaScript");
  const [currImg, setCurrImg] = useState(Languages[0].img);

  const [currentTheme, setTheme] = useState<string>("monokai");
  const [fontSize, setFontSize] = useState<number>(16);
  //const [output, setOutput] = useState("Your Output Will Come here...");

  const [divWidth, setDivWidth] = useState<number | null>(null);

  // This useEffect is responsible for changing the Editor's Width for responsiveness.
  useEffect(() => {
    updateDivWidth(setDivWidth);
    setFontSize(16);
    const handleResize = () => {
      updateDivWidth(setDivWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Change Input Code Editor value
  const handleInpEditorChange = (inpVal: any) => {
    dispatch({ type: "CODEINPCHANGE", payload: inpVal });
  };

  // const handleCheckQuality = () => {
  //   setLoading(true);
  //   axios
  //     .post("https://code-converter-api-jjb2.onrender.com/qualityCheck", {
  //       codeInpVal,
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
      if (item.name == selectedLanguage) {
        return item.img;
      }
    });
    setCurrImg(selectedImg[0].img);
  }, [selectedLanguage]);

  const handleCopy = () => {
    console.log("copied");
  };

  const handleFontChange = (val: number) => {
    const newFontSize = fontSize + val;
    if (newFontSize >= 14 && newFontSize <= 42) {
      setFontSize(newFontSize);
    }
  };

  return (
    <Box css={css.Outer}>
      {/* Input Code Editor */}
      <Box
        bg="bgA"
        boxShadow="shadowA"
        id="myDiv"
        css={css.BothEditorContainers}
      >
        <Box css={css.InputBtnsContainer}>
          <BtnCustom
            onClick={() =>
              handleConvert(
                dispatch,
                reqActive,
                toast,
                codeInpVal,
                selectedLanguage
              )
            }
            disabled={!codeInpVal}
          >
            Convert
            <Image as={ConvertIcon} />
          </BtnCustom>

          <BtnCustom
            onClick={() => handleDebug(dispatch, reqActive, toast, codeInpVal)}
            disabled={!codeInpVal}
          >
            Debug
            <Image as={DebugIcon} />
          </BtnCustom>
          <BtnCustom
            onClick={() =>
              handleCheckQuality(dispatch, reqActive, toast, codeInpVal)
            }
            disabled={!codeInpVal}
          >
            Check Quality
            <Image as={QualityIcon} />
          </BtnCustom>
          <Box color="primary" css={css.FontBtnOuterBox(ContextColors.primary)}>
            <Image as={FontSizeIcon} />
            <Box>
              <Image
                onClick={() => handleFontChange(-1)}
                as={DecIcon}
                color={fontSize <= 14 ? "blackB" : "blackA"}
              />
              <Text>{fontSize}</Text>
              <Image
                onClick={() => handleFontChange(1)}
                as={IncIcon}
                color={fontSize >= 42 ? "blackB" : "blackA"}
              />
            </Box>
          </Box>
        </Box>

        <AceEditor
          placeholder="Type or Paste your Code here"
          mode="javascript"
          fontSize={fontSize}
          theme={currentTheme}
          value={codeInpVal}
          width={`${divWidth}px`}
          onChange={handleInpEditorChange}
          name="Input Code Editor"
          readOnly={false}
          showPrintMargin={false}
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

      {/* Output Editor */}
      <Box bg="bgA" boxShadow="shadowA" css={css.BothEditorContainers}>
        <Box css={css.OutputBtnsContainer}>
          <Box>
            <Select
              value={selectedLanguage}
              onChange={(e) => {
                setSelectedLanguage(e.target.value);
              }}
              icon={currImg}
              focusBorderColor={"none"}
              css={css.SelectTagCss(
                ContextColors.primary,
                ContextColors.primary,
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
            <BtnCustom onClick={handleCopy} disabled={!outputVal}>
              <Image as={Copy} />
            </BtnCustom>
            <Select
              value={currentTheme}
              onChange={(e) => {
                setTheme(e.target.value);
              }}
              icon={<ThemeIcon />}
              focusBorderColor={"none"}
              css={css.SelectTagCss(
                ContextColors.primary,
                ContextColors.primary,
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
          placeholder="Your Output Will Come here..."
          // mode="javascript"
          mode="xml"
          value={outputVal}
          // value={"this is output"}
          fontSize={fontSize}
          theme={currentTheme}
          width={`${divWidth}px`}
          // onChange={handleOutputChange}
          name="Output Editor"
          readOnly={true}
          showPrintMargin={false}
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

// Editor Themes Array
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

// Languages Array
export const Languages = [
  {
    img: <JavaScript />,
    name: "JavaScript",
  },
  {
    img: <Python />,
    name: "Python",
  },
  {
    img: <Java />,
    name: "Java",
  },
  {
    img: <CPlusPlus />,
    name: "C++",
  },
  {
    img: <CSharp />,
    name: "C#",
  },
  {
    img: <Ruby />,
    name: "Ruby",
  },
  {
    img: <Swift />,
    name: "Swift",
  },
  {
    img: <TypeScript />,
    name: "TypeScript",
  },
  {
    img: <PHP />,
    name: "PHP",
  },
  {
    img: <Kotlin />,
    name: "Kotlin",
  },
  {
    img: <Rust />,
    name: "Rust",
  },
];
