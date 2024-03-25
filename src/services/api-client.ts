import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b9a4e9ef56bd4417ba3af1478bf196b8",
  },
});
