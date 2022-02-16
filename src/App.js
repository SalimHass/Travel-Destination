import logo from './logo.svg';
import './App.css';
import Home from './components/home/home.js'
import TourDetails from './components/TourDetails/TourDetails';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
const App = () => (

  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`/city/:id`} element={<TourDetails />} />
    </Routes>

  </Router>
);

export default App;
