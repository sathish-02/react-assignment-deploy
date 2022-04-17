import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export const City = () => {
  useEffect(() => {
    axios.get("http://localhost:8080/country").then((e) => {
      setData([...e.data]);
    });
  }, []);

  const [Data, setData] = useState([]);

  const [City, setCity] = useState({
    country: "",
    city: "",
    population: "",
  });

  const handleChange = (e) => {
    setCity({
      ...City,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/city", City).then((e) => {
      setCity({
        country: "",
        city: "",
        population: "",
      });
    });
  };

  return (
    <div>
      <form action=" " onSubmit={handleSubmit}>
        <label
          style={{
            margin: "10px 2px 10px 8px",
            border: "2px solid transparent",
            padding: "5px",
          }}
        >
          City
        </label>
        <input
          value={City.city}
          onChange={handleChange}
          name="city"
          type="text"
        />

        <label
          style={{
            margin: "10px 2px 10px 8px",
            border: "2px solid transparent",
            padding: "5px",
          }}
        >
          Country
        </label>
        <select onChange={handleChange} name="country">
          <option>Country</option>
          {Data.map((el, index) => {
            return (
              <option key={index} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>

        <label
          style={{
            margin: "10px 2px 10px 8px",
            border: "2px solid transparent",
            padding: "5px",
          }}
        >
          Population
        </label>
        <input
          value={City.population}
          onChange={handleChange}
          type="Number"
          name="population"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
