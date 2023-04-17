
import './App.css';
import Buttonclicked from './components/Buttonclicked';
import Button5times from './components/Button5times';
import Customimage from './components/Customimage';
import Table from './components/Table'
import List from './components/List';
import Subjective from './components/Subjective';
// import Todoitems from './components/Todoitems';


function App() {
  const image={
    src: "images/iot.jpg",
    title: "Image",
    alttext: "Image is there",
    href: "www.google.com" 
  }
  return (
    <div className="App">
      <Subjective />
      <Buttonclicked />
      <Table />

      <Customimage details={image}/>
      <Button5times />
      <List />
      
    </div>
  );
}

export default App;
