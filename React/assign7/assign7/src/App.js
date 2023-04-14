
import { useState } from 'react';
import './App.css';
import Apps from './components/Apps';
import { Userprovider } from './components/Context';

function App() {

  const [value,setValue]=useState("")

  let selectedrole=(event)=>{
    console.log(event.target.value)
    setValue(event.target.value)
  }
  return (
    <div className="App">
      <div class="form-group mt-4">
        <label>Select Role:: </label>
        <select value={value} onChange={selectedrole}>
          <option value="user">user</option>
          <option value="support">support</option>
        </select>
      </div>
      <Userprovider value={value}>
        <Apps/>
      </Userprovider>
    </div>
  );
}

export default App;
