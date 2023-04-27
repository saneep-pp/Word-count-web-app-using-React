import React from "react";
import "./App.css";

function App() {
  const resultfun = () => {
    let sr = document.getElementById("input").value;
    if (sr === "" || sr === null) {
      alert("Input Should not Empty...!");
    } else {
      let c = wordCount(sr);
      alert(`Total Number of words in this paragraph is ${c}`);
    }
  };
  const wordCount = (s) => {
    return s.split(" ").length;
  };
  const clearfun = () => {
    document.getElementById("input").value = "";
  };
  return (
    <>
      <h2>Word- Count</h2>
      <div className="container">
        <div className="box">
          <textarea
            id="input"
            rows="4"
            cols="60"
            placeholder="Paste the Paragraph Here...."
          ></textarea>
        </div>
        <button id="btn" type="button" onClick={resultfun}>
          Count
        </button>
        <button id="btn1" type="button" onClick={clearfun}>
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
