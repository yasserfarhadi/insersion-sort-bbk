import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Bar from '../components/Bar';
import Button from '../components/Button';
import Modal from '../components/Modal';

import { useDispatch, useSelector } from 'react-redux';
import { inputArrayAction, sort, modalAction } from '../redux/actions';

function AppContainer() {
  const [inputNumbers, setInputNumbers] = useState('');
  const [time, setTime] = useState(50);
  const dispatch = useDispatch();
  const { inputs, modal } = useSelector((state) => state);
  // console.log(store);

  useEffect(() => {
    const inputArray = inputNumbers.split(' ').map((item) => {
      const val = +item;
      if (isNaN(val)) return { percent: 0, color: 'greenyellow' };
      return { percent: item, color: 'greenyellow' };
    });
    dispatch(inputArrayAction(inputArray));
  }, [inputNumbers, dispatch]);
  const timeHandler = (e) => setTime(+e.target.value);

  const inputHandler = (e) => {
    const value = e.target.value;
    setInputNumbers(value);
  };

  const clearHandler = () => setInputNumbers('');

  const sortHandler = () => {
    dispatch(sort(inputs, time));
  };

  const bars =
    inputs &&
    inputs.map((item) => {
      return <Bar percent={item.percent} bg={item.color} key={Math.random()} />;
    });

  const modalClsoeHandler = () => dispatch(modalAction(false));
  console.log(modal);

  return (
    <div className="container">
      {modal && <Modal clicked={modalClsoeHandler} />}
      <div className="bar-container">{bars}</div>
      <div className="input-container">
        <Input
          label="Time(ms)"
          placeholder="time"
          changed={timeHandler}
          type="number"
          value={time}
        />
        <Input
          label="Inputs(number)"
          placeholder="inputs"
          changed={inputHandler}
          value={inputNumbers}
        />
      </div>
      <div className="button-container">
        <Button text="Sort" click={sortHandler} />
        <Button text="Clear" click={clearHandler} />
      </div>
    </div>
  );
}

export default AppContainer;
