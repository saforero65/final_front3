import React, { useContext, useEffect } from "react";
import Card from "../Components/Card";
import { DataUsers } from "../Context/DataUsers";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { users, theme } = useContext(DataUsers);
  useEffect(() => {
    console.log("renderizando home");
  }, []);
  useEffect(() => {
    console.log("renderizando home con users");
    console.log(users);
  }, [users]);

  return (
    <main style={{ background: theme.background, color: theme.color }}>
      <h1>Home</h1>
      <div className="card-grid">
        {users.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
