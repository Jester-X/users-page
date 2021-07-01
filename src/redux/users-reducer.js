import { usersAPI } from "../api/api.js";

const SET_USERS = "SET_USERS";
const SET_SELECTED_USER = "SET_SELECTED_USER";
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
      return { ...state, usersList: action.usersList };
    }

    case SET_SELECTED_USER: {
      return {
        ...state,
        selectedUser: {
          ...action.user,
          id: action.userId,
        },
      };
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

const setSelectedUser = (user, userId) => ({
  type: SET_SELECTED_USER,
  user,
  userId,
});

export const requestUsers = (obj) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  if (obj) {
    let { Name, Age, Email, Address } = obj;
    let data = await usersAPI.requestUsers(Name, Age, Email, Address);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data));
  } else {
    let data = await usersAPI.requestUsers();
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data));
  }
};

export const requestSelectedUser = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let user = await usersAPI.requestSelectedUser(userId);
  dispatch(toggleIsFetching(false));
  dispatch(setSelectedUser(user, userId));
};

export const createUser = (user) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  await usersAPI.createUser(user);
  dispatch(toggleIsFetching(false));
  dispatch(requestUsers());
};

export const updateUser = (user, userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  await usersAPI.updateUser(user, userId).then((result) => {
    dispatch(setSelectedUser(result.data, userId));
    dispatch(requestUsers());
  });
  dispatch(toggleIsFetching(false));
};

export const deleteUser = (userId) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  await usersAPI.deleteUser(userId);
  dispatch(toggleIsFetching(false));
  dispatch(setSelectedUser({}));
  dispatch(requestUsers());
};

export default usersReducer;
