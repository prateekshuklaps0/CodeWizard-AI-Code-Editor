import "./index.css";
import App from "./App.tsx";
import Theme from "./Styles/Theme";
import ContextProvider from "./Data/Context.tsx";

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={Theme}>
    <ContextProvider>
      <App />
    </ContextProvider>
  </ChakraProvider>
);
