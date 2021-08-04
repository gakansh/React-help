import React from 'react';
import Goals from './components/goals'
import Newhandle from './components/Newhandle/Newhandle'

const App = () => {



  const r = [{ id: 'f1', text: "Hello" },
  { id: 'f2', text: "Buffalo" },
  { id: 'f3', text: "Suar" }];



  const f1= (newGoal) =>{
    r.push(newGoal);
    console.log(r);
  };

  return (
    <div>
      <h1>Hello there</h1><br></br>
      <Goals goal={r} />
      <Newhandle nh={f1} />
      
    </div>
  );
};


export default App;
