
import './App.css';
import useTimeOut from './Hooks/UseTimeOut';

function App() {
  
  const toShow=useTimeOut(5);
  return (
    <div className="App">
     {/* -----------------Use Time Out Hook------------------------- */}
       {toShow? (<h3>Ready</h3>): (<h3>Waiting for Timer...</h3>)}
    </div>
  );
}

export default App;
