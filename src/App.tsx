import Footer from "./shared/footer";
import Header from "./shared/header";
import Home from "./views/home";
import Planes from "./views/planes";
import Detalle from "./views/detalle";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authrouterProvider";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={!isAuthenticated ? <Home /> : <Navigate to='/plans' />}
          />
          <Route
            path='/plans'
            element={isAuthenticated ? <Planes /> : <Navigate to='/' />}
          />
          <Route
            path='/summary'
            element={isAuthenticated ? <Detalle /> : <Navigate to='/' />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
