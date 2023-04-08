import React, { createContext, useEffect, useState } from "react";

export const DataUsers = createContext();

export const DataUsersProvider = ({ children }) => {
  const themes = [
    {
      name: "light",
      background: "#fff",
      color: "#000",
    },
    {
      name: "dark",
      background: "#000",
      color: "#fff",
    },
  ];
  const [users, setUsers] = useState([]);
  const [theme, setTheme] = useState({
    name: "light",
    background: "#fff",
    color: "#000",
  });
  const [user, setUser] = useState({});

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };
  const getUserFromId = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUsers();
  }, []);

  const changeTheme = () => {
    setTheme(theme.name === "light" ? themes[1] : themes[0]);
  };

  return (
    <DataUsers.Provider
      value={{ users, changeTheme, getUserFromId, user, theme }}
    >
      {children}
    </DataUsers.Provider>
  );
};
