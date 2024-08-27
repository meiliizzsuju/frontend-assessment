import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Exercise1 from './container/Exercise1';
import Exercise2 from './container/Exercise2';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/*' element={<Exercise1 />} />
        <Route path='/exercise2' element={<Exercise2 />} />
      </Routes>
    </Router>
  );
}

export default App;
