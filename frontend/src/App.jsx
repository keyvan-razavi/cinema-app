import "./App.css";
import { Route, Routes } from "react-router-dom";

import AuthenticationPage from "./components/AuthenticationPage";
import UserPage from "./components/user/UserPage";
import AdminPage from "./components/admin/AdminPage";
function App() {
  return (
    <div className="App-container">
      <Routes>
        <Route path="/" element={<AuthenticationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
