export const juegoReducer = (state=[], action) => {
  switch (action.type) {
    case "crear":
        return [...state, action.payload];
  
    case "borrar":
    
    break;

    default:
        return state;
  }
}
