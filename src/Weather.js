import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }
  let apiKey = "54a19520a091f37a82f561cb9de8d7b4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="White"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}
