import "./App.css";
import Fetch from "./Components/Fetch";
import Timer from "./Components/Timer";


function App() {
  
  return (
    <div className="App">
      {/* -----------------Use Time Out Hook------------------------- */}
      <Timer/>
      {/* -----------------Use Fetch Hook------------------------- */}
      <Fetch/>
    </div>
  );
}

export default App;
