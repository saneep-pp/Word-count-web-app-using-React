import "./App.css";

function App() {
  const resultfun = () => {
    let sr = document.getElementById("input").value;
    const popUp = document.querySelector(".pop-up");
    const okbtnE = document.querySelector(".okbtn");
    if (sr === "" || sr === null) {
      // alert("Input Should not Empty...!");
      popUp.classList.add("pop-up-open");

      okbtnE.addEventListener("click", () => {
        popUp.classList.remove("pop-up-open");
      });
    } else {
      let c = wordCount(sr);

      document.getElementById("res").innerHTML = c;
    }
  };
  const wordCount = (s) => {
    return s.split(" ").length;
  };
  const clearfun = () => {
    document.getElementById("input").value = "";
    document.getElementById("res").innerHTML = 0;
  };
  return (
    <>
      <h1>Word - Count</h1>
      <div className="container">
        <div className="count">
          <h2>Word Count</h2>
          <p id="res">0</p>
        </div>

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
        <div className="pop-up">
          <img src={require("./images/warning.gif")} />
          <h2>Warning</h2>
          <p>Input Should not Empty..!</p>
          <button className="okbtn">OK</button>
        </div>
        <button id="btn1" type="button" onClick={clearfun}>
          Clear
        </button>
      </div>
    </>
  );
}

export default App;
