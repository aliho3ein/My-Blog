import axios from "axios";

const instance = axios.create({
  baseURL: "https://myblog-de-default-rtdb.europe-west1.firebasedatabase.app/",
  timeout: 7000,
});

export default instance;
