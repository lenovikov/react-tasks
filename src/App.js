
import './App.css';
import Ex1 from './hw1902/Ex1'
import Ex2 from './hw1902/Ex2'

function App() {
  return (
    <div className="App">
      <Ex1 
        ccsClass = "big-square"
        label = "Привет"
      />
      <Ex1 
        ccsClass = "square"
        label = "Привет"
      />
      <Ex1 
        ccsClass = "small-square"
        label = "Привет"
      />
      <Ex2 />
      
    </div>
  );
}

export default App;
