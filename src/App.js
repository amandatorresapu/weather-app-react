import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="SearchEngine">
      <h1>Weather App</h1>
      <SearchEngine />
      <p>
        <a href="https://github.com/amandatorresapu/weather-app-react">
          Open source
        </a>{" "}
        by Amanda Torres-Brooks
      </p>
    </div>
  );
}
export default App;
