import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainwelcome from "./components/mainWelcome";
import Login from "./components/login";
import SignUp from "./components/signUp";
import ChangePassword from "./components/changePassword";
import AdminWelcome from "./components/adminWelcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainwelcome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/changePassword" element={<ChangePassword />}></Route>
          <Route path="/adminWelcome" element={<AdminWelcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
