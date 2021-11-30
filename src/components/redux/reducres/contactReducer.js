const initialState = [
  {
    id: 0,
    name: "Raman",
    number: 1234567890,
  },
  {
    id: 1,
    name: "Test Name",
    number: 1234567891,
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default contactReducer;
