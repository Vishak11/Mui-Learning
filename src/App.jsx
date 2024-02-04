import react, { useState } from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Box, Stack, createTheme, styled } from "@mui/material";
import SideBar from "./components/SideBar";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBAr";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode,setMode]=useState("light")
  const darkTheme=createTheme({
    palette:{
      mode:mode
    }
  })
  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <NavBar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar setMode={setMode} mode={mode}/>
        <Feeds />
        <RightBar />
        </Stack>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
