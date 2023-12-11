import React from "react";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-cobalt";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-nord_dark";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-gob";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";

const EditorComponent: React.FC<{
  name: string;
  fontSize: number;
  currentTheme: string;
  divWidth: number | null;
  readOnly: boolean;
  showNumberLines: boolean;
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
  showNumberLines,
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
      showGutter={showNumberLines}
      showPrintMargin={false}
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
    theme: "cobalt",
    name: "Cobalt",
  },
  {
    theme: "tomorrow_night_blue",
    name: "Night Blue",
  },
  {
    theme: "dracula",
    name: "Dracula",
  },
  {
    theme: "gob",
    name: "Gob",
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
    theme: "nord_dark",
    name: "Nord Dark",
  },
];
