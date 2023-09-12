import { useState } from "react";
import { API } from "./constants";
import axios from "axios";
function App() {
  const [from, setFrom] = useState("light-year");
  const [to, setTo] = useState("kilometer");
  const [value, setValue] = useState("1");
  const [convertedValue, setConvertedValue] = useState("9460730472580.8");
  const convert = () => {
    axios.get(`${API}${from}/${to}/${value}`).then(function(response) {
      setConvertedValue(response.data);
    });
  };
  const options = () => {
    return (
      <>
        {" "}
        <option value="astronomical-unit">Astronomical Unit</option>
        <option value="kilometer">Kilometer</option>
        <option value="light-minute">Light Minute</option>
        <option value="light-second">Light Second</option>
        <option value="light-year">Light Year</option>
        <option value="miles">Miles</option>
        <option value="parsec">Parsec</option>
      </>
    );
  };
  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="container mx-auto w-fit">
          <div className="flex justify-around w-96">
            <label className="p-2">
              <p className="font-medium">From</p>
              <select
                className="bg-neutral-800 block p-2 text-center rounded bg-transparent border-2 border-violet-600 outline-none focus:bg-violet-600 duration-150"
                name="from"
                defaultValue="light-year"
                onChange={(e) => setFrom(e.target.value)}
              >
                {options()}
              </select>
            </label>
            <label className="p-2">
              <p className="font-medium">To</p>
              <select
                className="bg-neutral-800 block p-2 text-center rounded bg-transparent border-2 border-violet-600 outline-none focus:bg-violet-600 duration-150"
                name="to"
                defaultValue="kilometer"
                onChange={(e) => setTo(e.target.value)}
              >
                {options()}
              </select>
            </label>
          </div>
          <input
            type="text"
            defaultValue={1}
            className="block w-64 mt-4 h-10 text-center text-lg mx-auto rounded-md bg-transparent border-2  border-violet-600 outline-none focus:border-violet-700 duration-150"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            onClick={convert}
            className="mx-auto mt-4 block bg-violet-600 p-2 rounded font-medium text-lg hover:bg-violet-700 duration-150"
          >
            Convert
          </button>
          <h1 className="w-fit mx-auto text-center text-2xl m-4 bg-violet-600 p-2 rounded-lg font-bold">
            {convertedValue}
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
