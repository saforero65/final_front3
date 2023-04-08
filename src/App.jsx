import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { DataUsersProvider } from "./Context/DataUsers";

function App() {
  useEffect(() => {
    console.log("renderizando contacto");
  }, []);
  return (
    <DataUsersProvider>
      <div className="App">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
    </DataUsersProvider>
  );
}

export default App;
