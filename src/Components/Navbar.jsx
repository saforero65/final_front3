import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataUsers } from "../Context/DataUsers";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, changeTheme } = useContext(DataUsers);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  return (
    <nav style={{ background: theme.background, color: theme.color }}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => changeTheme()}>Change theme</button>
      <nav style={{ background: theme.background, color: theme.color }}>
        <ul>
          <li>
            <Link
              style={{ background: theme.background, color: theme.color }}
              to="/home"
            >
              Home{" "}
            </Link>
          </li>
          <li>
            <Link
              style={{ background: theme.background, color: theme.color }}
              to="/favs"
            >
              Favoritos{" "}
            </Link>
          </li>
          <li>
            <Link
              style={{ background: theme.background, color: theme.color }}
              to="/contacto"
            >
              Contacto{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
