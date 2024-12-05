import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import HomePage from "./pages/home-page/home-page";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <ToastContainer />
      <HomePage />
    </>
  );
};

export default App;
