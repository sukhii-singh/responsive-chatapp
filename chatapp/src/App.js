import logo from './logo.svg';
import './App.css';
import ChatPage from './Pages/ChatPage';
import Login from './Pages/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './Pages/Signup';
import Protected from './Components/protected/Protected';
function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
