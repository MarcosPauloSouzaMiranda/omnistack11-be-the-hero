import React, { useState } from 'react';

import Header from './Header';

function App() {

  const [counter, setCounter] = useState(0);

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <Header>
      Semana Omnistack <br />
      <strong>Counter: </strong> { counter } <br />
      <button onClick={increment}>Adicionar</button>
    </Header>
  );
}

export default App;
