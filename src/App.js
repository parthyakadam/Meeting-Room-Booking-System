import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { HomePage, InvalidPage } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='*' element={<InvalidPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
