import React from "react";
import { useState } from "react";

export default function Main() {
  const [temparatueValue, setTemparatureValue] = useState(12);
  let increment = () => {
    {
      if (temparatueValue === 30) return;
      setTemparatureValue(temparatueValue + 1);
    }
  };

  let decrement = () => {
    {
      if (temparatueValue === 0) return;
      setTemparatureValue(temparatueValue - 1);
    }
  };

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="flex flex-col  bg-cyan-900 rounded-2xl h-96 w-80 shadow-2xl shadow-black overflow-hidden">
        <div className="flex justify-center items-center font-bold text-4xl   grow  text-white">
          <div
            className={`flex items-center justify-center rounded-full h-32 w-32 border-4 transition-bg transition delay-150 ease-in-out ${
              temparatueValue >= 15 ? "bg-orange-700" : "bg-blue-700"
            } border-white`}
          >
            {temparatueValue}° C
          </div>
        </div>
        <div className="flex items-center grow justify-evenly font-bold text-white text-3xl">
          <button onClick={increment}>
            <div className="flex items-center justify-center rounded-full h-20 w-20 border-4 bg-slate-600  border-white hover:bg-gray-400 transition-bg transition duration-300 ease-in-out">
              +
            </div>
          </button>

          <button onClick={decrement}>
            <div className="flex items-center justify-center rounded-full h-20 w-20 border-4 bg-slate-600 border-white hover:bg-gray-400 transition-bg transition duration-300 ease-in-out">
              -
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
