import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { GetAllPlanetas } from "../services/fetchs";

function Planetas() {
  const { store, dispatch } = useGlobalReducer();
  const { planetas } = store;

  useEffect(() => {
    GetAllPlanetas(dispatch);
  }, [dispatch]);
  console.log("Planetas", planetas);
  console.log(planetas.items);
  return (
    <div>
      <h1>Soy Planetas</h1>
      {planetas.items.map((planeta) => {
        return (
          <div key={planeta.id}>
            <h2>{planeta.name}</h2>
            <p className="text-primary">Description: {planeta.description}</p>
          
   
          </div>
        );
      })}
      <div>{}</div>
    </div>
  );
}

export default Planetas;
