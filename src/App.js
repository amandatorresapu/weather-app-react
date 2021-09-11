import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DeBugging</h1>
        <Weather city="merced" />
        <a
          href="https://www.shecodes.io/learn/workshops"
          target="_blank"
          rel="noreferrer"
        >
          shecodes
        </a>
        <img src="test.png" alt="hello" />
      </header>
    </div>
  );
}

export default App;
