import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box>
      {/* navbar */}
      <Sidebar />
      <Feed />
      <Rightbar />
    </Box>
  );
}

export default App;
