import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CodeArea from "./Components/CodeArea";
import Particle from "./Components/Particles";

import { Box, useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isBelow480px] = useMediaQuery("(max-width: 480px)");
  const [isBelow768px] = useMediaQuery("(max-width: 768px)");

  /*
http://localhost:3000
https://chatgpt.com/c/6b9f4ebf-a825-4475-a615-d9b8af0a2cda
https://react-icons.github.io/react-icons/search/#q=loader
https://stackoverflow.com/questions/60039469/github-api-returns-bad-credentials-even-with-oauth-token
  */

  return (
    <Box id="App">
      <Particle />
      <Navbar isBelow768px={isBelow768px} isBelow480px={isBelow480px} />
      <CodeArea />
      <Footer />
    </Box>
  );
}

export default App;
