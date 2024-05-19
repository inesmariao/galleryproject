import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Covenas1 from './components/Covenas1';
import Covenas2 from './components/Covenas2';
import Covenas4 from './components/Covenas4';
import Covenas5 from './components/Covenas5';
import Covenas6 from './components/Covenas6';
import Covenas8 from './components/Covenas8';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 id="title" className='text-center my-3'>Galería</h1>
      </div>
      <Routes>
        <Route path="/covenas1" element={<Covenas1 className="image-size" />}/>
        <Route path="/covenas2" element={<Covenas2 className="image-size" />}/>
        <Route path="/covenas4" element={<Covenas4 className="image-size" />}/>
        <Route path="/covenas5" element={<Covenas5 className="image-size" />}/>
        <Route path="/covenas6" element={<Covenas6 className="image-size" />}/>
        <Route path="/covenas8" element={<Covenas8 className="image-size" />}/>
      </Routes>
      <Navigation />
    </Router>
  );
}

export default App;
