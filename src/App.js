
import './App.css';
import Ex1 from './hw1902/Ex1'
import Ex2 from './hw1902/Ex2'
import Ex3 from './practical1902/Ex3'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'

function App() {
  return (
    <div className="App">
     <Ex5/>
     <Ex6 value = {true}/>
     <Ex7 position = 'right'/>

    </div>
  );
}

export default App;
