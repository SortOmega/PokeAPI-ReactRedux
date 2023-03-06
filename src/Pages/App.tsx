import { useState, ChangeEvent } from 'react';
import { RootState } from '../ReduxStore/store';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByValue,
} from '../ReduxStore/Slices/Counter';
import StyledArrowDiv from '#/Assets/Components/StyledArrowDiv';

import './Styles/App.scss';

function App() {
  // ----------- STARTING HOOKS ----------- //
  const initInputValues = { incrementBy: 0 };
  const [inputValues, setInputValues] = useState(initInputValues);

  /*REDUX HOOKS*/
  const { counter } = useSelector((state: RootState) => state.counter);
  const CounterDispatch = useDispatch(); //Auto detects the redux slice used

  // ----------- HANDLE ACTION EVENTS ----------- //
  const handleOnChange = (event: ChangeEvent) => {
    const { name, value } = event.target as HTMLInputElement;
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue))
      setInputValues({ ...inputValues, [name]: parsedValue });
  };
  // ----------- RETURN COMPONENT ----------- //
  return (
    <div className='Wenas'>
      <h1>Usando Redux</h1>
      <span>El contador: {counter}</span>
      <div className='counterActions'>
        <button onClick={() => CounterDispatch(increment())}>
          + Incrementar
        </button>
        <button onClick={() => CounterDispatch(decrement())}>
          Decrementar -
        </button>
      </div>
      <div className='customIncrement'>
        <label htmlFor='inputIncrementBy'> Aumentar por Valor: </label>
        <input
          type='number'
          name='incrementBy'
          id='inputIncrementBy'
          onChange={handleOnChange}
          value={inputValues.incrementBy}
        />
        <button
          onClick={() => {
            CounterDispatch(incrementByValue(inputValues.incrementBy));
          }}
        >
          Apply
        </button>
      </div>
      <StyledArrowDiv className='arrow' angle={counter} />
    </div>
  );
}

export default App;
