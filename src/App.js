import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      <SetAllCountry></SetAllCountry>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Free all countries tour</h2>
      <h3>country {countries.length}</h3>

      {countries.map((country) => (
        <SetAllCountry
          name={country.name.common}
          area={country.area}
          border={country.borders + " "}
          capital={country.capital + " "}
          photo={country.flags.png}
          region={country.region}
        ></SetAllCountry>
      ))}
    </div>
  );
}

function SetAllCountry(props) {
  return (
    <div className="container">
      <div className="country-info">
        <h2>Country : {props.name}</h2>
        <h3>Area : {props.area}</h3>
        <h3>Area : {props.border}</h3>
        <h3>capital : {props.capital}</h3>
        <h3>region : {props.region}</h3>
        <img className="img-size" src={props.photo} alt="" />
      </div>
    </div>
  );
}

export default App;
