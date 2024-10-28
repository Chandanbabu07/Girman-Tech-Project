import "./App.css";
import Homepage from "./MyComponents/Homepage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileInfoModal from "./MyComponents/ProfileInfoModal";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
        </Routes>
      </Router>
      <ProfileInfoModal></ProfileInfoModal>
    </>
  );
}

export default App;
