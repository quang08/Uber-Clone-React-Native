import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

//push info to the data layer (redux) using ACTIONS
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload; //payload: information inside of the action
    },
    setDestination: (state, action) => {
      state.destination = action.payload; //payload: information inside of the action
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload; //payload: information inside of the action
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions; //for import of other modules

//extract info from the data layer using SELECTORS
export const selectOrigin = (state) => state.nav.origin; //extract origin
export const selectDestination = (state) => state.nav.destination; //extract origin
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation; //extract origin

//export all
export default navSlice.reducer;