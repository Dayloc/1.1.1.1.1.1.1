import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { GetAllPersonajes } from "../services/fetchs";

function Personajes() {
  const { store, dispatch } = useGlobalReducer();
  const { personajes } = store;

  useEffect(() => {
    GetAllPersonajes(dispatch);
  }, [dispatch]);

  console.log("Personajes", personajes);
  return <div>Soy Personajes</div>;
}

export default Personajes;
