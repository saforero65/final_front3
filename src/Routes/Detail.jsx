import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataUsers } from "../Context/DataUsers";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { getUserFromId, user } = useContext(DataUsers);
  useEffect(() => {
    console.log("renderizando detail");
    getUserFromId(id);
  }, [id]);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <h1>Detail Dentist id </h1>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
