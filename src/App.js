import './css/bootstrap.min.css';
import './css/style.css';
import './js/script.js';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Options from './components/Options';
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
<Router>
      <Navbar />
      <Options />
      <Body />
      <Footer />
      </Router>

    </>
  );
}

export default App;
