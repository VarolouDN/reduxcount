import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { countMinusAction, countPlusAction } from "./store/countReducer";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((prev) => prev.count);

  function countPlus() {
    dispatch(countPlusAction(1));
  }

  function countMinus() {
    dispatch(countMinusAction(1));
  }

  return (
    <div className="App">
      <button onClick={() => countMinus()}>Count -</button>
      <h1>Count:{count}</h1>
      <button onClick={() => countPlus()}>Count +</button>
    </div>
  );
}

export default App;
