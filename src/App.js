import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Exercise1 from './container/Exercise1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Exercise1 />} />
      </Routes>
    </Router>
  );
}

export default App;
