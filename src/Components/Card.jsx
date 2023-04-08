import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataUsers } from "../Context/DataUsers";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(DataUsers);

  const [isFav, setIsFav] = React.useState(false);
  const addFav = () => {
    // Aqui iria la logica para guardar la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...favs, { name, username, id }];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setIsFav(true);
  };
  const removeFav = () => {
    // Aqui iria la logica para remover la Card en el localStorage
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    console.log(favs);
    const newFavs = favs.filter((fav) => fav.id !== id);
    console.log(newFavs);
    localStorage.setItem("favs", JSON.stringify(newFavs));
    console.log(localStorage.getItem("favs"));
    setIsFav(false);
  };
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const isFav = favs.some((fav) => fav.id === id);
    setIsFav(isFav);
  }, [id]);

  return (
    <div
      style={{ background: theme.background, color: theme.color }}
      className="card"
    >
      <Link to={`/dentist/${id}`}>
        <h3 style={{ background: theme.background, color: theme.color }}>
          {name}{" "}
        </h3>
        <p style={{ background: theme.background, color: theme.color }}>
          {username}
        </p>
        <p style={{ background: theme.background, color: theme.color }}>{id}</p>
      </Link>
      {isFav ? (
        <button onClick={removeFav}>Remove fav</button>
      ) : (
        <button onClick={addFav}>Add fav</button>
      )}
    </div>
  );
};

export default Card;
