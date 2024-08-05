import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CodeArea from "./Components/CodeArea";
import Particle from "./Components/Particles";

import { Box, useMediaQuery } from "@chakra-ui/react";

function App() {
  const [isBelow480px] = useMediaQuery("(max-width: 480px)");

  return (
    <Box id="App">
      <Particle />
      <Navbar isBelow480px={isBelow480px} />
      <CodeArea />
      <Footer />
    </Box>
  );
}

export default App;
