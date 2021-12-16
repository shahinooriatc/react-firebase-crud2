import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AddContact from './Components/AddContact';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addcontact" element={<AddContact />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

      </Routes>
      
    </div>
  );
}

export default App;
