import { useEffect } from "react";
import { useDispatch } from "react-redux";
import MainRouter from "./components/MainRouter";
import { initializeProducts } from "./store/actions/actions";
import "./scss/main.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <MainRouter />
    </div>
  );
};

export default App;
