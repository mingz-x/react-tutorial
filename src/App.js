import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'

import './App.css';
import Main from './pages/Main';
import Css from './pages/Css';
import Not from './pages/Not';
import RouterPage from './pages/Router';
import StateProps from './pages/StateProps';
import Deploy from './pages/Deploy';

function App() {
  return (
    //basename='/react-tutorial'
    <Router >
      <header>
        <Link to="/">HOME</Link>
        <Link to="/css">CSS</Link>
        <Link to="/router" state={{page:100}}>Router</Link>
        <Link to="/state">State&Props</Link>
        <Link to="/deploy">Github Deploy</Link>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/css" element={<Css />} />
        <Route path="/router" element={<RouterPage />} />
        <Route path="/state" element={<StateProps />} />
        <Route path="/deploy" element={<Deploy />} />
        <Route path="/*" element={<Not />} />
      </Routes>
    </Router>
  );
}

export default App;
