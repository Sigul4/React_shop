import { Router }   from 'react-router-dom';
import "./App.css";
import { Content } from "./components/Content";
import { Header }  from "./components/Header.js";
import history      from "./data/history.js";


const App = () =>
    <Router history={history}>
        <div className="App wrapper">
          <Header/>
          <Content/>
        </div>
    </Router>

export default App
