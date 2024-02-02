import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, InputVal } from './App/reducer/counterSlice';

function App() {

  const count= useSelector((state) => state.counter.value);
  const inputVal= useSelector((state) => state.counter.inputVal);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(InputVal(event.target.value));
  };

  return (
    <div className="App">

        <input type='text' value={inputVal} onChange={handleChange}></input>

        <span>Count : {count}</span>

        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
