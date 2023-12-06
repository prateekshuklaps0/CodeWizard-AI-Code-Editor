import * as css from "../Styles/CodeAreaStyles";
import { Languages } from "../Data/Languages";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import axios from "axios";
import { useState } from "react";
import {
  Box,
  Button,
  useTheme,
  Image,
  Text,
  Spinner,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // Center,
  Flex,
} from "@chakra-ui/react";
import { IoMdArrowDropdown as DownArrow } from "react-icons/io";
import { GiCheckMark as TickMark } from "react-icons/gi";
import { LiaExchangeAltSolid as ConvertIcon } from "react-icons/lia";
import { VscDebug as DebugIcon } from "react-icons/vsc";
import { LiaClipboardCheckSolid as QualityIcon } from "react-icons/lia";

const CodeArea = () => {
  const theme = useTheme();
  const ContextColors = theme.colors;
  const [currImg, setCurrImg] = useState(Languages[0].img);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JavaScript");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("Your Output Will Come here...");
  // const [hide, setHide] = useState(false);

  const handleCodeChange = (newCode: any) => {
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

  // const handleClear = () => {
  //   setCode("");
  //   setOutput("Your Output Will Come here...");
  // };

  const handleQualityCheck = () => {
    setLoading(true);
    axios
      .post("https://code-converter-api-jjb2.onrender.com/qualityCheck", {
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

  return (
    <Box css={css.Outer}>
      <Box bg="bgD" boxShadow="shadowA" css={css.ButtonsCont}>
        <Box css={css.CurrLangCont}>
          <Menu closeOnSelect={true}>
            <MenuButton>
              <Flex color="greyA" css={css.CurrLangSelectBox}>
                <Text css={css.TextCurrLang}>{`Convert to : `}</Text>
                <Box
                  bg="bgD"
                  border={[`1px solid ${ContextColors.greyA}`]}
                  css={css.CurrOptionBox}
                >
                  <Box>
                    <Image src={currImg} />
                    <Text>{language}</Text>
                  </Box>
                  <Image as={DownArrow} />
                </Box>
              </Flex>
            </MenuButton>
            <MenuList
              bg="bgA"
              color="whiteA"
              defaultValue="JavaScript"
              css={css.MenuListCont}
            >
              {Languages.map((item: any, ind: number) => (
                <MenuItem
                  onClick={() => {
                    setLanguage(item.name);
                    setCurrImg(item.img);
                  }}
                  _hover={{ bg: language != item.name ? "bgC" : "transparent" }}
                  bg="transparent"
                  value={item.name}
                  css={css.LangItemCss}
                  key={ind}
                >
                  <Box>
                    <Image src={item.img} />
                    <span>{item.name}</span>
                  </Box>

                  {language == item.name && <Image as={TickMark} />}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Box
          css={css.BtnContainer(
            ContextColors.greyA,
            ContextColors.greyA,
            ContextColors.redB
          )}
        >
          <Button onClick={handleConvert} disabled={!code}>
            Convert
            <Image as={ConvertIcon} />
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </Button>
          <Button onClick={handleDebug} disabled={!code}>
            Debug
            <Image as={DebugIcon} />
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </Button>
          <Button onClick={handleQualityCheck} disabled={!code}>
            Check Quality
            <Image as={QualityIcon} />
            <span className="first"></span>
            <span className="second"></span>
            <span className="third"></span>
            <span className="fourth"></span>
          </Button>
        </Box>
      </Box>

      <Box css={css.EditorCont}>
        {/* editor input */}
        <Box bg="bgD" boxShadow="shadowA">
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
        </Box>
        {/* output */}
        <Box bg="bgD" boxShadow="shadowA">
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
        </Box>
      </Box>
    </Box>
  );
};

export default CodeArea;
