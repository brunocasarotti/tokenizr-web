import './App.css'
import { Routes, Route } from 'react-router-dom'
import MainPage from "./pages/TokenizrMainPage"
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import About from './pages/About'

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/tokenizr-main-page" element={<MainPage></MainPage>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
    </div>
  );
}

export default App;
