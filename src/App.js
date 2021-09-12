import SearchEngine from "./SearchEngine";
import Loader from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <div className="SearchEngine">
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />

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
