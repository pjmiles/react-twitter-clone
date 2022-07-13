import { Routes, Route } from "react-router-dom";
import './App.css';
import Feed from './components/Feed/Feed';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Feed />}/>
        <Route path="login" element={<Login />}/>
        <Route path="signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
