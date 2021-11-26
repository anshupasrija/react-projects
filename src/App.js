import './App.css';
import data from './data.js';
import List from './List'
import { useState } from 'react';

function App() {
  const [people,setPeople] = useState(data)
  return (
    <div className="App">
      <h3>{people.length}birthday today</h3>
     <List people={people}/>
     <button onClick = {()=>setPeople([]) }> Clear All</button>
    </div>
  );
}

export default App;
