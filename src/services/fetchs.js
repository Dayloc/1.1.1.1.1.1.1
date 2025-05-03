const url = "https://dragonball-api.com/api/";

export const GetAllPersonajes = async (dispatch) => {
  try {
    const response = await fetch(`${url}characters`);

    if (!response.ok) {
      throw new Error("Error fetching characters");
    }

    const data = await response.json();
    dispatch({ type: "Set_Personajes", payload: data });

    return data;
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
};

export const GetAllPlanetas = async (dispatch) => {
  try {
    const response = await fetch(`${url}planets`);

    if (!response.ok) {
      throw new Error("Error fetching planets");
    }

    const data = await response.json();
    dispatch({ type: "Set_Planetas", payload: data });

    return data;
  } catch (error) {
    console.error("Error al obtener planetas:", error);
  }
};
