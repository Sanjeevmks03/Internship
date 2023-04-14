import './App.css';
import Search from './components/Search'
import Jsondisplay from './components/Jsondisplay';
import Todolist from './components/Todolist';

function App() {
  const name=['Sanjeev','Manish','Shreyansh','Nitish','Aaruhi','Aarushi','tushar','Tushar','Sunil']

  class task {
    constructor(text, status) {
      this.text = text;
      this.done = status;
    }
  }

  
  const items = [
    new task("Assignment 2 Done", false),
    new task("Quizess done", false),
    new task("Theory done", false)
  ]

  return (
    <div className="App">
      <Search names={name}/>
      <Jsondisplay/>
      <Todolist items={items}/>
    </div>
  );
}

export default App;
