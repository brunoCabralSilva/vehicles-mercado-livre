import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to='/vehicles' />} />
        <Route path="/vehicles" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
