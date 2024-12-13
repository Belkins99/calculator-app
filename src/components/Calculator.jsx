import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval cautiously; consider alternatives.
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md sm:max-w-lg">
        {/* Display */}
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right bg-gray-200 p-4 rounded-lg text-3xl focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-4">
          {/* Clear and Delete Buttons */}
          <button onClick={handleClear} className="btn btn-clear col-span-2">
            AC
          </button>
          <button onClick={handleBackspace} className="btn btn-delete">
            DEL
          </button>
          <button onClick={() => handleClick("/")} className="btn btn-operator">
            /
          </button>

          {/* Number Buttons */}
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="btn btn-number"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleClick("*")} className="btn btn-operator">
            *
          </button>

          {[4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="btn btn-number"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleClick("-")} className="btn btn-operator">
            -
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="btn btn-number"
            >
              {num}
            </button>
          ))}
          <button onClick={() => handleClick("+")} className="btn btn-operator">
            +
          </button>

          {/* Special Buttons */}
          <button
            onClick={() => handleClick("0")}
            className="btn btn-number col-span-2"
          >
            0
          </button>
          <button onClick={() => handleClick(".")} className="btn btn-number">
            .
          </button>
          <button onClick={calculateResult} className="btn btn-equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
