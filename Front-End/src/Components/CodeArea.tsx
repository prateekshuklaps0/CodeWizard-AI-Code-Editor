import * as css from "../Styles/CodeAreaStyles";
import BtnCustom from "./BtnCustom";
import EditorComponent, { EditorThemes } from "./EditorComponent";
import { Context, CODE_INP_CHANGE } from "../Data/Context";
import {
  SetLsData,
  GetLsData,
  handleCopy,
  handleDebug,
  handleConvert,
  handleCheckQuality,
  CalculateWidthFromPercentage,
} from "../Data/Action";

import { useState, useEffect, useContext } from "react";
import { Box, Select, Image, Text, useToast, Spinner } from "@chakra-ui/react";
import { BallTriangle } from "react-loader-spinner";
import { useResizable } from "react-resizable-layout";
import { DiRuby as Ruby } from "react-icons/di";
import { FaJava as Java } from "react-icons/fa6";
import { VscDebug as DebugIcon } from "react-icons/vsc";
import {
  BiPlus as IncIcon,
  BiMinus as DecIcon,
  BiFontSize as FontSizeIcon,
} from "react-icons/bi";
import {
  MdOutlineImagesearchRoller as ThemeIcon,
  MdContentCopy as Copy,
} from "react-icons/md";
import {
  LiaExchangeAltSolid as ConvertIcon,
  LiaClipboardCheckSolid as QualityIcon,
} from "react-icons/lia";
import {
  SiPhp as PHP,
  SiRust as Rust,
  SiSwift as Swift,
  SiKotlin as Kotlin,
  SiPython as Python,
  SiCplusplus as CSharp,
  SiCplusplus as CPlusPlus,
  SiTypescript as TypeScript,
  SiJavascript as JavaScript,
} from "react-icons/si";
import { BsPlay } from "react-icons/bs";
import { HiOutlinePlay as RunIconOutline } from "react-icons/hi2";

const CodeArea = ({ isBelow768px, isBelow480px }: any) => {
  const toast = useToast();
  const {
    dispatch,
    outputVal,
    reqActive,
    codeInpVal,
    DebugLoading,
    QualityLoading,
    ConvertLoading,
  } = useContext(Context);
  const [currentTheme, setTheme] = useState<string>(
    GetLsData()?.editorTheme || "cobalt"
  );
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    GetLsData()?.convertLanguage || "JavaScript"
  );
  const [messages, setMessages] = useState<string[]>([]);
  const [currImg, setCurrImg] = useState(Languages[0].img);
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [fontSize, setFontSize] = useState<number>(GetLsData()?.fontSize || 16);

  let initialDivWidth =
    Math.floor(CalculateWidthFromPercentage(97.5) / 2) - 7.5;
  const {
    isDragging: HorizontalDragging,
    position: HorizontalPosition,
    separatorProps: HorizontalSeperatorProps,
  } = useResizable({
    axis: "x",
    initial: initialDivWidth,
  });
  const {
    isDragging: VerticalDragging,
    position: VerticalPosition,
    separatorProps: VerticalSeperatorProps,
  } = useResizable({
    axis: "y",
    initial: isBelow480px ? 400 : 500,
  });

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
  const handleInputEditorChange = (inpVal: any) => {
    dispatch({ type: CODE_INP_CHANGE, payload: inpVal });
  };

  // Theme Change
  const handleThemeChange = (e: any) => {
    const LsData = GetLsData() || {};
    const DataToBeSaved = { ...LsData, editorTheme: e.target.value };
    SetLsData(DataToBeSaved);
    setTheme(e.target.value);
  };

  // Convert Language Change
  const handleLanguageChange = (e: any) => {
    const LsData = GetLsData() || {};
    const DataToBeSaved = { ...LsData, convertLanguage: e.target.value };
    SetLsData(DataToBeSaved);
    setSelectedLanguage(e.target.value);
  };

  // Font Size Change
  const handleFontSizeChange = (value: number) => {
    const LsData = GetLsData() || {};
    const newFontSize = fontSize + value;
    if (newFontSize >= 12 && newFontSize <= 42) {
      const DataToBeSaved = { ...LsData, fontSize: newFontSize };
      SetLsData(DataToBeSaved);
      setFontSize(newFontSize);
    }
  };

  return (
    <Box h={["160vh", "130vh", "80vh"]} css={css.Outer}>
      {/* Control Panel */}
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
          {ConvertLoading ? <Spinner /> : <Image as={RunIconOutline} />}
          <Text>Run</Text>
        </BtnCustom>
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
          {ConvertLoading ? <Spinner /> : <Image as={ConvertIcon} />}
          <Text>Convert</Text>
        </BtnCustom>
        <BtnCustom
          onClick={() => handleDebug(dispatch, reqActive, toast, codeInpVal)}
        >
          {DebugLoading ? <Spinner /> : <Image as={DebugIcon} />}
          <Text>Debug</Text>
        </BtnCustom>
        <BtnCustom
          onClick={() =>
            handleCheckQuality(dispatch, reqActive, toast, codeInpVal)
          }
        >
          {QualityLoading ? <Spinner /> : <Image as={QualityIcon} />}
          <Text>Check Quality</Text>
        </BtnCustom>
        <Box color="primary" css={css.FontBtnOuterBox}>
          <Image as={FontSizeIcon} />
          <Box>
            <Image
              onClick={() => handleFontSizeChange(-1)}
              as={DecIcon}
              color={fontSize <= 14 ? "blackB" : "blackA"}
            />
            <Text>{fontSize}</Text>
            <Image
              onClick={() => handleFontSizeChange(1)}
              as={IncIcon}
              color={fontSize >= 42 ? "blackB" : "blackA"}
            />
          </Box>
        </Box>
        <Box>
          <Select
            value={selectedLanguage}
            onChange={handleLanguageChange}
            icon={currImg}
            focusBorderColor={"none"}
            css={css.SelectTagCss}
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
            onChange={handleThemeChange}
            icon={<ThemeIcon />}
            focusBorderColor={"none"}
            css={css.SelectTagCss}
          >
            {EditorThemes.map((item: any, ind: number) => (
              <option value={item.theme} key={ind}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      </Box>

      <Box className="wrapper" flexGrow={1} css={css.BothEditorContainers}>
        {/* Input Editor */}
        <Box
          width={isBelow768px ? "100%" : HorizontalPosition}
          h={isBelow768px ? VerticalPosition : "100%"}
          minW={["100%", "100%", "300px"]}
          minH={["400px", "500px", "79.5vh"]}
          className="left-block"
        >
          <EditorComponent
            name={"Input Code Editor"}
            fontSize={fontSize}
            currentTheme={currentTheme}
            width="100%"
            height="100%"
            readOnly={false}
            showNumberLines={true}
            mode="javascript"
            placeholder="Type or Paste your Code here"
            value={codeInpVal}
            handleOnChange={handleInputEditorChange}
          />
        </Box>

        {/* Splitter */}
        <Box
          h={["7.5px", "79.5vh"]}
          w={["100%", "7.5px"]}
          bg={HorizontalDragging || VerticalDragging ? "red" : "green"}
          cursor="col-resize"
          {...(isBelow768px
            ? VerticalSeperatorProps
            : HorizontalSeperatorProps)}
        ></Box>

        {/* Output Editor */}
        <Box
          h={isBelow768px ? VerticalPosition : "100%"}
          w={isBelow768px ? "100%" : VerticalPosition}
          flex={1}
          minW={["100%", "100%", "300px"]}
          minH={["400px", "500px", "79.5vh"]}
          className="right-block"
        >
          <EditorComponent
            name={"Output Editor"}
            fontSize={fontSize}
            currentTheme={currentTheme}
            width="100%"
            height="100%"
            readOnly={true}
            showNumberLines={false}
            mode="markdown"
            placeholder="Your Output Will Come here..."
            value={reqActive ? messages[messageIndex] : outputVal}
          />
        </Box>
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
