import "./styles.css";
import React, { useState } from "react";
import { useStore } from "./store";

export default function App() {
  const store = useStore();
  const [firstName, setFirstName] = useState(store.firstName);
  const [lastName, setLastName] = useState(store.lastName);
  const [state, setState] = useState(store.state);
  const [city, setCity] = useState(store.city);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="container">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="control"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="control"
        />
        <br />
        <div className="tree-view">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="control"
          >
            <option value="">Select State</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="New York">New York</option>
          </select>
          <br />
          <label htmlFor="city" className="city-control">
            City:
          </label>
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="city-control"
          >
            <option value="">Select City</option>
            {state === "California" && (
              <>
                <option value="San Francisco">San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="San Diego">San Diego</option>
              </>
            )}
            {state === "Texas" && (
              <>
                <option value="Houston">Houston</option>
                <option value="Dallas">Dallas</option>
                <option value="Austin">Austin</option>
              </>
            )}
            {state === "New York" && (
              <>
                <option value="New York">New York</option>
                <option value="Buffalo">Buffalo</option>
                <option value="Rochester">Rochester</option>
              </>
            )}
          </select>
        </div>
      </div>
      <p>
        {firstName} {lastName} from {city}, {state}
      </p>
    </div>
  );
}
