import * as axios from "axios";

// getting rid of url copy-pastes with instance
const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1/users",
});

export const usersAPI = {
  requestUsers() {
    return instance.get().then(res => res.data);
  },
};
