import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <Box>
      <Sidebar />
      <Feed />
      <Rightbar />
    </Box>
  );
}

export default App;
