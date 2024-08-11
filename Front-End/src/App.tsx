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
  http://localhost:3000/
  https://chatgpt.com/c/dc16a189-532e-4877-b057-0608336d03cb
  */

  return (
    <Box id="App">
      <Particle />
      <Navbar isBelow768px={isBelow768px} isBelow480px={isBelow480px} />
      <CodeArea isBelow480px={isBelow480px} isBelow768px={isBelow768px} />
      <Footer />
    </Box>
  );
}

export default App;
