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
  Image,
  Text,
  Spinner,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Center,
} from "@chakra-ui/react";

const CodeArea = () => {
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

  const handleClear = () => {
    setCode("");
    setOutput("Your Output Will Come here...");
  };

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
              <Box css={css.CurrLangSelectBox}>
                <Text css={css.TextCurrLang}>{`Convert to : `}</Text>
                <Image src={currImg} />
                <Text>{language}</Text>
              </Box>
            </MenuButton>
            <MenuList defaultValue="JavaScript">
              {Languages.map((item: any, ind: number) => (
                <MenuItem
                  onClick={() => {
                    setLanguage(item.name);
                    setCurrImg(item.img);
                  }}
                  value={item.name}
                  css={css.LangOptionsCss}
                  key={ind}
                >
                  <Image src={item.img} />
                  <span>{item.name}</span>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
        <Box display="flex" flexDirection="column" marginTop="50px">
          <Button onClick={handleConvert} disabled={!code}>
            Convert
          </Button>
          <Button onClick={handleDebug} disabled={!code}>
            Debug
          </Button>
          <Button onClick={handleQualityCheck} disabled={!code}>
            Quality Check
          </Button>
        </Box>
      </Box>

      <Box css={css.EditorCont}>
        {/* editor input */}
        <Box className="pt-4 bg-[#272822]">
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
        <Box
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
        </Box>
      </Box>
    </Box>
  );
};

export default CodeArea;
