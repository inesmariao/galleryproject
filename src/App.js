import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cccovenas from './components/Cccovenas';
import Ccovenas from './components/Ccovenas';
import Covenas1 from './components/Covenas1';
import Covenas2 from './components/Covenas2';
import Covenas3 from './components/Covenas3';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/cccovenas" element={<Cccovenas/>}/>
        <Route path="/ccovenas" element={<Ccovenas/>}/>
        <Route path="/covenas1" element={<Covenas1/>}/>
        <Route path="/covenas2" element={<Covenas2/>}/>
        <Route path="/covenas3" element={<Covenas3/>}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
