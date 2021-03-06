import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

//components
import { Navbar } from "./components/Navbar";
import { HomePage } from './components/pages/HomePage';
import { LoginPage } from './components/pages/LoginPage';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
