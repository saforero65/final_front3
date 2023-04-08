import React, { useContext } from "react";
import { DataUsers } from "../Context/DataUsers";

const Footer = () => {
  const { theme } = useContext(DataUsers);
  return (
    <footer style={{ background: theme.background, color: theme.color }}>
      <p style={{ background: theme.background, color: theme.color }}>
        Powered by
      </p>
      <img
        style={{ background: theme.background, color: theme.color }}
        src="./img/DH.png"
        alt="DH-logo"
      />
    </footer>
  );
};

export default Footer;
