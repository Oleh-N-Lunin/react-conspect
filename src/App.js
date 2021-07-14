import React from "react";

// Components
import Counter from './Components/Counter/Counter'
import Toggle from "./Components/Toggle/Toggle";

function App() {
  return (
    <div className="App">
      <Counter initialValue={10} />
      <Toggle/>
        <button onClick={e=> console.log(e)}>Click me!</button>
    </div>
  );
}

export default App;
