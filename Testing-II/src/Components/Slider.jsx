import React, { useState } from "react";
const data=[
    {
      q:"What is HTML?",
      id:1,
      a:"Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
    },
    {
      q:"What is CSS?",
      id:2,
      a:"CSS is used along with HTML and JavaScript in most websites to create user interfaces for web applications and user interfaces for many mobile applications."
    },
    {
      q:"WHat is React?",
      id:3,
      a:"React is a JavaScript library created by Facebook"
    },
    {
      q:"What is JS?",
      id:4,
      a:"JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions ."
    },
    {
      q:"What is Node?",
      id:5,
      a:" The term node may also refer to Node.js, a runtime environment for server-side JavaScript applications."
    }
  ]
const Slider = ()=> {
  const [value, setValue] = useState(1);
  return (
    <div data-testid="slider">
      {data.map((e) => {
        if (e.id === value) {
          return (
            <div key={e.id} data-testid="child">
              <h4 data-testid='q'>{e.q}</h4>
              <p data-testid='a'>{e.a}</p>
            </div>
          );
        }
        return false
      })}
      <div>
      <button data-testid='prev' disabled={value===1?true:false} onClick={()=>setValue(value-1)}>Prev</button>

        <button data-testid='next' disabled={value===data.length?true:false} onClick={()=>setValue(value+1)}>Next</button>
      </div>
    </div>
  );
};

export default Slider;