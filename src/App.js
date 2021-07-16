import React from "react";

// Components
// import Counter from './Components/Counter/Counter'
// import Toggle from "./Components/Toggle/Toggle";
import SignUpForm from "./Components/SignUpForm/SignUpForm";

function App() {
  return (
    <div className="App">
      {/* <Counter initialValue={10} />
      <Toggle /> */}
      <SignUpForm/>
        {/* <button onClick={e=> console.log(e)}>Click me!</button> */}
    </div>
  );
}

export default App;
