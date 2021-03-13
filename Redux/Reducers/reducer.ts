const initialState = {
  name: "",
  nasa_jpl_url: "",
  is_potentially_hazardous_asteroid: "",
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_ASTEROID":
      return { ...state,  ...action.payload };

    default:
      return state;
  }
};
