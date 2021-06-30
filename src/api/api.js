import * as axios from "axios";

// getting rid of url copy-pastes with instance
const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1/users",
});

export const usersAPI = {
  requestUsers() {
    return instance.get().then((res) => res.data);
  },
  requestSelectedUser(userId) {
    return instance.get(`${userId}`).then((res) => res.data);
  },
  createUser({Name, Age, Email, Address}) {
    return instance
      .post(
        ``,
        {"Name": Name, "Age": parseInt(Age), "Email":Email, "Address":Address },
        {
          "headers": {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => console.log(err));
  },
  deleteUser(userId) {
    return instance
      .delete(`${userId}`)
  },
};
