import { usersAPI } from "../api/api.js";

const SET_USERS = "SET_USERS";
const SET_SELECTED_USER = "SET_SELECTED_USER"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  usersList: {},
  selectedUser: {},
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };

    case SET_USERS: {
      return {...state, usersList: action.usersList } ;
    }

    case SET_SELECTED_USER: {
      return {...state, selectedUser: action.user}
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

const setSelectedUser = (user) => ({
  type: SET_SELECTED_USER,
  user
})

export const requestUsers = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await usersAPI.requestUsers();
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data));
};

export const requestSelectedUser = (userId) => async (dispatch) => {
  let user = await usersAPI.requestSelectedUser(userId)
  dispatch(setSelectedUser(user))
} 

export default usersReducer;
