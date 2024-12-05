import axios from "axios";
import { handleError } from "../helpers/ErrorHandler";
import { IUserData } from "../interfaces/IUserData";

const loginAPI: string = "http://localhost:5001/api/v1/auth/login";
const registerAPI = "http://localhost:5001/api/v1/users";

export const login = async (username: string, password: string) => {
  try {
    const data = await axios.post<IUserData>(loginAPI, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const register = async (username: string, password: string) => {
  try {
    const data = await axios.post<IUserData>(registerAPI, {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
