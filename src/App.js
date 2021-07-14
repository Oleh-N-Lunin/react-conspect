import React from "react";

// Components
import Counter from './Components/Counter/Counter'

function App() {
  return (
    <div className="App">
        <Counter step={5} />
        <button onClick={e=> console.log(e)}>Click me!</button>
    </div>
  );
}

export default App;
