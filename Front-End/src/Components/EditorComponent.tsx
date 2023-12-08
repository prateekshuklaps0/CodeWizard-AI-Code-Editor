import React from "react";

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

const EditorComponent: React.FC<{
  name: string;
  fontSize: number;
  currentTheme: string;
  divWidth: number | null;
  readOnly: boolean;
  mode: string;
  placeholder: string;
  value: any;
  handleOnChange?: any;
}> = ({
  name,
  fontSize,
  currentTheme,
  divWidth,
  readOnly,
  mode,
  placeholder,
  value,
  handleOnChange,
}) => {
  return (
    <AceEditor
      mode={mode}
      placeholder={placeholder}
      fontSize={fontSize}
      theme={currentTheme}
      value={value}
      width={`${divWidth}px`}
      onChange={handleOnChange}
      name={name}
      readOnly={readOnly}
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
  );
};

export default EditorComponent;

// Editor Themes Array
export const EditorThemes = [
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
