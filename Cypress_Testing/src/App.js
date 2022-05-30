import './App.css';
import Form from './Components/Form';
import InputForm from './Components/InputForm';
import Todos from './Components/Todos';

function App() {
  return (
    <div className="App">
    <br/>
    <br/>
     <InputForm/>
     <br/>
     <hr/>
     <br/>
     <Todos/>
     <br/>
     <hr/>
     <br/>
     <Form/>
     <br/>
     <br/>
    </div>
  );
}

export default App;
