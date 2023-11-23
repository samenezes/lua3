import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'
import { Lista } from './components/lista'
import { Deleted } from './components/deleted';
function App() {
  const [allTemps, setAllTemps] = useState([])

  const [deleted, setDeleted] = useState([])

  useEffect(() => {
    console.log(deleted)
  }, [deleted])

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Lista setDeleted={setDeleted} setAllTemps={setAllTemps} allTemps={allTemps} />} />
          {<Route path="/trash" element={<Deleted deletedTemperatures={deleted} />} />
          }
        </Routes>
      </div>
    </Router>
  );
}
export default App
