import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Booking, HomePage, InvalidPage, Navbar } from './components'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/booking' element={<Booking />}/>
        <Route path='*' element={<InvalidPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
