import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModuleOne from './ovas/module-one/ModuleOne';
import ModuleOneOne from './ovas/module-one/Units/One/One';
import ModuleOneTwo from './ovas/module-one/Units/Two/Two';

// Importa más unidades según sea necesario

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/module-one" element={<ModuleOne />} />
        <Route path="/module-one/one" element={<ModuleOneOne />} />
        <Route path="/module-one/two" element={<ModuleOneTwo />} />
        {/* Define más rutas para otros módulos y unidades */}
      </Routes>
    </Router>
  );
}

export default App;
