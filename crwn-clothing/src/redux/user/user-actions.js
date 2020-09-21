//action creator
const SET_CURRENT_USER = "SET_CURRENT_USER";

function setCurrentUser(user) {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
}

export { setCurrentUser, SET_CURRENT_USER };
