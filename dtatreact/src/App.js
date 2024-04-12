import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainwelcome from "./components/mainWelcome";
import Login from "./components/login";
import SignUp from "./components/signUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainwelcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
