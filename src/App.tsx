import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModuleOne from './ovas/module-one/ModuleOne';
import ModuleOneOne from './ovas/module-one/Units/One/One';
import ModuleOneTwo from './ovas/module-one/Units/Two/Two';
import ModuleOneThree from './ovas/module-one/Units/Three/Three';
import ModuleOneFour from './ovas/module-one/Units/Four/Four';
import ModuleOneFive from './ovas/module-one/Units/Five/Five';

// Importa más unidades según sea necesario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/module-one" element={<ModuleOne />} />
        <Route path="/module-one/one" element={<ModuleOneOne />} />
        <Route path="/module-one/two" element={<ModuleOneTwo />} />
        <Route path="/module-one/three" element={<ModuleOneThree />} />
        <Route path="/module-one/four" element={<ModuleOneFour />} />
        <Route path="/module-one/five" element={<ModuleOneFive />} />
        {/* <Route path="/module-one/four" element={<ModuleOneFour />} />
        <Route path="/module-one/five" element={<ModuleOneFive />} /> */}
        {/* Define más rutas para otros módulos y unidades */}
      </Routes>
    </Router>
  );
}

export default App;
