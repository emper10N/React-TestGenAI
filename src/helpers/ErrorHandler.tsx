import axios from "axios";
import { toast } from "react-toastify";

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    var err = error.response;
    if (Array.isArray(err?.data)) {
      for (let val of err.data) {
        toast.warning(val.description);
      }
    } else if (err?.status == 401) {
      toast.warning("Login, please");
      window.history.pushState({}, "LoginPage", "/login");
    }
  }
};
