import * as axios from "axios";

// getting rid of url copy-pastes with instance
const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const usersAPI = {
  requestUsers(name = "", age = "", email = "", address = "") {
    return instance
      .get(`users?Name=${name}&Age=${age}&Email=${email}&Address=${address}`)
      .then((res) => res.data);
  },
  requestSelectedUser(userId) {
    return instance.get(`users/${userId}`).then((res) => res.data);
  },
  createUser({ Name, Age, Email, Address }) {
    return instance
      .post(`users`, {
        Name: Name,
        Age: parseInt(Age),
        Email: Email,
        Address: Address,
      })
      .catch((err) => console.log(err));
  },
  updateUser({ Name, Age, Email, Address }, userId) {
    return instance.put(`users/${userId}`, {
      Name: Name,
      Age: parseInt(Age),
      Email: Email,
      Address: Address
    });
  },
  deleteUser(userId) {
    return instance.delete(`users/${userId}`);
  },
};
