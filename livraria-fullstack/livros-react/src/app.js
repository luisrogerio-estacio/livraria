import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import LivroLista
from "./componentes/LivroLista";

import LivroDados
from "./componentes/LivroDados";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <LivroLista />
          }
        />

        <Route
          path="/dados"
          element={
            <LivroDados />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;