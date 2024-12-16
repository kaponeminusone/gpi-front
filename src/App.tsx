import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModuleOne from './ovas/module-one/ModuleOne';
import ModuleTwo from './ovas/module-two/ModuleTwo';
import ModuleThree from './ovas/module-three/ModuleThree';
import ModuleFour from './ovas/module-four/ModuleFour';
import ModuleFive from './ovas/module-five/ModuleFive';
import ModuleSix from './ovas/module-six/ModuleSix';

import ModuleOneOne from './ovas/module-one/Units/One/One';
import ModuleOneTwo from './ovas/module-one/Units/Two/Two';
import ModuleOneThree from './ovas/module-one/Units/Three/Three';
import ModuleOneFour from './ovas/module-one/Units/Four/Four';
import ModuleOneFive from './ovas/module-one/Units/Five/Five';

import ModuleTwoOne from './ovas/module-two/Units/One/One';
import ModuleTwoTwo from './ovas/module-two/Units/Two/Two';
import ModuleTwoThree from './ovas/module-two/Units/Three/Three';
import ModuleTwoFour from './ovas/module-two/Units/Four/Four';

import ModuleTenOne from './ovas/module-ten/Units/One/One';
import ModuleTenTwo from './ovas/module-ten/Units/Two/Two';
import ModuleTenThree from './ovas/module-ten/Units/Three/Three';
import ModuleTenFour from './ovas/module-ten/Units/Four/Four';
import ModuleTenFive from './ovas/module-ten/Units/Five/Five';


import './App.css'
import ModuleTen from './ovas/module-ten/ModuleTen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/module-one" element={<ModuleOne />} />
        <Route path="/module-two" element={<ModuleTwo />} />
        <Route path="/module-three" element={<ModuleThree />} />
        <Route path="/module-four" element={<ModuleFour />} />
        <Route path="/module-five" element={<ModuleFive />} />
        <Route path="/module-six" element={<ModuleSix />} />

        <Route path="/module-one/one" element={<ModuleOneOne />} />
        <Route path="/module-one/two" element={<ModuleOneTwo />} />
        <Route path="/module-one/three" element={<ModuleOneThree />} />
        <Route path="/module-one/four" element={<ModuleOneFour />} />
        <Route path="/module-one/five" element={<ModuleOneFive />} />

        <Route path="/module-two/one" element={<ModuleTwoOne />} />
        <Route path="/module-two/two" element={<ModuleTwoTwo />} />
        <Route path="/module-two/three" element={<ModuleTwoThree />} />
        <Route path="/module-two/four" element={<ModuleTwoFour />} />

        <Route path="/module-ten" element={<ModuleTen />} />
        <Route path="/module-ten/one" element={<ModuleTenOne />} />
        <Route path="/module-ten/two" element={<ModuleTenTwo />} />
        <Route path="/module-ten/three" element={<ModuleTenThree />} />
        <Route path="/module-ten/four" element={<ModuleTenFour />} />
        <Route path="/module-ten/five" element={<ModuleTenFive />} />

        {/* <Route path="/module-one/four" element={<ModuleOneFour />} />
        <Route path="/module-one/five" element={<ModuleOneFive />} /> */}
        {/* Define más rutas para otros módulos y unidades */}
      </Routes>
    </Router>
  );
}

export default App;
