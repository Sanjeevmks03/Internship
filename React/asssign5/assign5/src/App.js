
import './App.css';
import Errorboundary from './components/Errorboundary';
import ErrorComponent from './components/ErrorComponent';
import Focus from './components/Focus';
import Formparent from './components/Formparent';
import PetSelector from './components/PetSelector';
import Subjective from './components/Subjective';


function App() {
  return (
    <div className="App">
      <Subjective/>
      <Errorboundary>
        <ErrorComponent name="Sanjeev"/>
      </Errorboundary>
      <Errorboundary>
      <ErrorComponent name="Nitish"/>
      </Errorboundary>
      <Errorboundary>
      <ErrorComponent name="Gaurav"/>
      </Errorboundary>
      <Errorboundary>
      <ErrorComponent name="Tushar"/>
      </Errorboundary>
      <Errorboundary>
      <ErrorComponent name="Baburao"/>
      </Errorboundary>

      <Focus />
      <PetSelector />
      <Formparent/>
    </div>
  );
}

export default App;
