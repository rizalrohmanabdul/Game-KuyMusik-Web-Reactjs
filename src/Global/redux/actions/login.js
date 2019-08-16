import axios from "axios";
let URL = 'https://kuymusik.herokuapp.com';


export const currentLogin = (data) => {
  console.log(data)
  return {
    type: "LOGIN_USER",
    payload: axios.post(URL + "/users/login", data[0],{
      headers: {
        'authorization' : 'w3lc0meto4pp',
      }
    })
  };
};
export const logout = () => {
return {
  type: "LOGIN_USER",
  payload: axios.post(URL + "/authuser/login"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
};
};