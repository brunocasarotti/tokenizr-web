import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import MainPage from "./pages/TokenizrMainPage"
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import About from './pages/About'
import SignUpFisica from './components/LoginAuth/SignUpFisica'
import SignUpJuridica from './components/LoginAuth/SignUpJuridica'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/tokenizr-main-page" element={<MainPage></MainPage>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/SignUpFisica" element={<SignUpFisica></SignUpFisica>}></Route>
        <Route path="/SignUpJuridica" element={<SignUpJuridica></SignUpJuridica>}></Route>
      </Routes>
    </div>
  );
}

export default App;
