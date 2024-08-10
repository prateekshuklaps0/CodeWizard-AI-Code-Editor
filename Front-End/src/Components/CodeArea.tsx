import * as css from "../Styles/CodeAreaStyles";
import BtnCustom from "./BtnCustom";
import EditorComponent, { EditorThemes } from "./EditorComponent";
import { CODE_INP_CHANGE, Context } from "../Data/Context";
import {
  // ConnectServer,
  updateDivWidth,
  handleFontSize,
  handleCopy,
  handleConvert,
  handleDebug,
  handleCheckQuality,
} from "../Data/Action";

import { useEffect, useState, useContext } from "react";
import { BallTriangle } from "react-loader-spinner";
import {
  Box,
  Select,
  useTheme,
  Image,
  Text,
  useToast,
  Spinner,
  Center,
} from "@chakra-ui/react";

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
    ConnectingToServer,
    reqActive,
    codeInpVal,
    outputVal,
  } = useContext(Context);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>("JavaScript");
  const [fontSize, setFontSize] = useState<number>(16);
  const [currImg, setCurrImg] = useState(Languages[0].img);
  const [currentTheme, setTheme] = useState<string>("cobalt");
  const [divWidth, setDivWidth] = useState<number | null>(null);
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [messages, setMessages] = useState<string[]>([]);

  // useEffect for showing processing messages in output editor while a request is made.
  useEffect(() => {
    let messageTimer: any;
    const startProcessing = async () => {
      let messageArray: string[] = [];
      if (reqActive == "convert") {
        messageArray = ConversionMessages;
      } else if (reqActive == "debug") {
        messageArray = DebuggingMessages;
      } else if (reqActive == "quality") {
        messageArray = QualityCheckMessages;
      } else if (reqActive == "ConnectingToServer") {
        messageArray = ConnectingMessages;
      }
      setMessages(messageArray);
      setMessageIndex(0);
      messageTimer = setInterval(() => {
        setMessageIndex((prevIndex) => (prevIndex + 1) % messageArray.length);
      }, 3000);
    };
    if (reqActive) {
      startProcessing();
    } else {
      clearInterval(messageTimer);
    }
    return () => {
      clearInterval(messageTimer);
    };
  }, [reqActive]);

  // useEffect for changing the Editor's Width for responsiveness.
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

  // useEffect for Connecting the server on page mount, this request is made to homeroute on backend to wakeup the server
  // useEffect(() => {
  //   ConnectServer(dispatch, reqActive, toast);
  // }, []);

  // useEffect for changing current language icon in language select menu.
  useEffect(() => {
    let selectedImg = Languages.filter((item: any) => {
      if (item.name == selectedLanguage) {
        return item.img;
      }
    });
    setCurrImg(selectedImg[0].img);
  }, [selectedLanguage]);

  // Change Input Code Editor value
  const handleInpEditorChange = (inpVal: any) => {
    dispatch({ type: CODE_INP_CHANGE, payload: inpVal });
  };

  return (
    <Box css={css.Outer}>
      {/* Input Component */}
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
          >
            Convert
            {ConvertLoading ? <Spinner /> : <Image as={ConvertIcon} />}
          </BtnCustom>

          <BtnCustom
            onClick={() => handleDebug(dispatch, reqActive, toast, codeInpVal)}
          >
            Debug
            {DebugLoading ? <Spinner /> : <Image as={DebugIcon} />}
          </BtnCustom>

          <BtnCustom
            onClick={() =>
              handleCheckQuality(dispatch, reqActive, toast, codeInpVal)
            }
          >
            Check Quality
            {QualityLoading ? <Spinner /> : <Image as={QualityIcon} />}
          </BtnCustom>

          <Box color="primary" css={css.FontBtnOuterBox(ContextColors.primary)}>
            <Image as={FontSizeIcon} />
            <Box>
              <Image
                onClick={() => handleFontSize(setFontSize, fontSize, -1)}
                as={DecIcon}
                color={fontSize <= 14 ? "blackB" : "blackA"}
              />
              <Text>{fontSize}</Text>
              <Image
                onClick={() => handleFontSize(setFontSize, fontSize, 1)}
                as={IncIcon}
                color={fontSize >= 42 ? "blackB" : "blackA"}
              />
            </Box>
          </Box>
        </Box>

        {/* Input Editor */}
        <EditorComponent
          name={"Input Code Editor"}
          fontSize={fontSize}
          currentTheme={currentTheme}
          divWidth={divWidth}
          readOnly={false}
          showNumberLines={true}
          mode="javascript"
          placeholder="Type or Paste your Code here"
          value={codeInpVal}
          handleOnChange={handleInpEditorChange}
        />
      </Box>

      {/* Output Component */}
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
            <BtnCustom onClick={() => handleCopy(toast, outputVal)}>
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

        {ConnectingToServer ? (
          <Center bg="bgA" color="primary" css={css.ConnectionOuterBox}>
            <Text>{messages[messageIndex] && messages[messageIndex]}</Text>
            <BallTriangle
              radius={5}
              color={ContextColors.primary}
              wrapperClass={"ConnectionSpinner"}
              ariaLabel="ball-triangle-loading"
              visible={true}
            />
          </Center>
        ) : (
          <EditorComponent
            name={"Output Editor"}
            fontSize={fontSize}
            currentTheme={currentTheme}
            divWidth={divWidth}
            readOnly={true}
            showNumberLines={false}
            mode="markdown"
            placeholder="Your Output Will Come here..."
            value={reqActive ? messages[messageIndex] : outputVal}
          />
        )}
      </Box>
    </Box>
  );
};

export default CodeArea;

const ConnectingMessages = [
  "Installing Dependencies...",
  "Establishing Connection...",
  "Connecting to Server...",
];

const ConversionMessages = [
  "Processing your code for conversion...",
  "Code magic in progress... Be patient!",
  "Code conversion in progress... Please wait!",
  "Hold tight! Code transformation underway.",
  "Your code is off to the conversion factory!",
  "Modified code's on its way!",
];

const DebuggingMessages = [
  "Debugging mode activated... Stand by!",
  "Your code is entering debugging phase...",
  "Analyzing your code for debugging insights...",
  "Your code is under the debugging microscope.",
  "Hold tight! Code analysis for debugging ongoing.",
  "Processing your code for debugging...",
];

const QualityCheckMessages = [
  "Processing your code for quality check...",
  "Quality check initiated for your code...",
  "Quality check engines at work...",
  "Code quality assessment in progress...",
  "Evaluating your code's quality...",
  "Hold on! Code quality report is underway.",
];

// Languages Array
const Languages = [
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
