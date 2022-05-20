import "./App.css";
import Fetch from "./Components/Fetch";
import Merge from "./Components/Merge";
import Timer from "./Components/Timer";


function App() {
  
  return (
    <div className="App">
      {/* -----------------Use Time Out Hook------------------------- */}
      <Timer/>
      {/* -----------------Use Fetch Hook------------------------- */}
      <Fetch/>
       {/* -----------------Use Merge state Hookk------------------------- */}
       <Merge/>
    </div>
  );
}

export default App;
