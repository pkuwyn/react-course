//action creator
const SET_CURRENT_USER = "SET_CURRENT_USER";
function setCurrentUser(payload) {
  return {
    type: "SET_CURRENT_USER",
    payload,
  };
}

const initialState = {
  currentUser: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
