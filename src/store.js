export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    planetas: [],
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "Set_Personajes":
      return {
        ...store,
        personajes: action.payload,
      };
    case "Set_Planetas":
      return {
        ...store,
        planetas: action.payload,
      };
    default:
      throw Error("Unknown action.");
  }
}
