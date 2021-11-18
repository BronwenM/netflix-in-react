import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

//components
import { Navbar } from "./components/Navbar";
import { HomePage } from './components/pages/HomePage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<h1>This is the login page</h1>}></Route>
        <Route path="/movies" element={<h1>This is the list of movies page Grouped by category and watch list (maybe)</h1>}></Route>
        <Route path="/watchlist" element={<h1>This is the user's watch list</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
