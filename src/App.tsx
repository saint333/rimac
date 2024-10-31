import Footer from "./shared/footer";
import Header from "./shared/header";
import Home from "./views/home";
import Planes from "./views/planes";
import { Route } from "react-router-dom";
import { AuthRouteProvider } from "./context/authrouterProvider";

function App() {
  return (
    <>
      <Header />
      <AuthRouteProvider>
        <Route path='/' element={<Home />} />
        <Route path='/plans' element={<Planes />} />
      </AuthRouteProvider>
      <Footer />
    </>
  );
}

export default App;
