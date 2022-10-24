import axios from "axios";

const uri = axios.create({
  baseURL: "http://localhost:3333",
});

export const useApi = () => ({
  signin: async (username: string, password: string) => {
    const { data } = await uri.post("/auth/signin", { username, password });
    return data;
  },
});
