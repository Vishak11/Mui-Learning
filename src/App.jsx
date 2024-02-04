import react from "react";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { Box, Stack, styled } from "@mui/material";
import SideBar from "./components/SideBar";
import Feeds from "./components/Feeds";
import RightBar from "./components/RightBar";
import NavBar from "./components/NavBAr";

function App() {
  return (
    <>
      <Box>
        <NavBar/>
       <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feeds />
        <RightBar />
        </Stack>
      </Box>
    </>
  );
}

export default App;
