import { usersAPI } from "../api/api.js";

const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  usersList: {},
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_USERS: {
    
      return {...state, usersList: action.usersList } ;
    }

    default:
      return state;
  }
};

const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const setUsers = (usersList) => ({
  type: SET_USERS,
  usersList,
});

export const requestUsers = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.requestUsers();
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data));
};

export default usersReducer;
