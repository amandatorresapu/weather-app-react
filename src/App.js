import SearchEngine from "./SearchEngine";
import Loader from "react-loader-spinner";
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
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  );
}
export default App;
