import React, { useState } from 'react';
import Goals from './components/goals'
import Newhandle from './components/Newhandle/Newhandle'

const App = () => {
   
  const [r, setsnap] = useState([{ id: 'f1', text: "Hello" },
  { id: 'f2', text: "Buffalo" },
  { id: 'f3', text: "Suar" }]);

  const f1 = newGoal => {
    // r.push(newGoal);
    // console.log(r);
    setsnap(r.concat(newGoal)); 
  };

  return (
    <div>
      <h1>Hello there</h1><br></br>
      <Newhandle nh={f1} />
      <Goals goal={r} />
      

    </div>
  );
};


export default App;
