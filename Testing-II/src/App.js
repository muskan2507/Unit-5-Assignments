import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
const data=[
  {
    q:"What is HTML?",
    a:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
  },
  {
    q:"What is CSS?",
    a:"CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications."
  },
  {
    q:"WHat is React?",
    a:"React is a JavaScript library created by Facebook"
  },
  {
    q:"What is JS?",
    a:"JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions ."
  },
  {
    q:"What is Node?",
    a:" The term node may also refer to Node.js, a runtime environment for server-side JavaScript applications."
  }
]
function App() {
  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;
