import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import {Cart} from './Pages/Cart';
import { Navbar } from './Components/Navbar';
import { Context } from './Components/Context';
function App() {
  return (
    <div className="App">
      <Context>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
      </Context>
    </div>
  );
}

export default App;
