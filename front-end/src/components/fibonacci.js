import { useState } from "react";
import axios from "axios";

function Fibonacci() {
  const [result, setResult] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const headers = {
    "Content-Type": "text/json",
    "Access-Control-Allow-Origin": "*",
  };

  function validateInput(num) {
    if (/^\d+$/.test(num) && num < 2144908973) {
      if (showError) {
        setShowError(false);
      }
      return true;
    } else {
      if (!showError) {
        setShowError(true);
      }
      return false;
    }
  }

  async function getFibonacci(num) {
    if (validateInput(num)) {
      try {
        const response = await axios.post(
          "http://ec2-3-12-102-63.us-east-2.compute.amazonaws.com:8080/fibonacci",
          num,
          { name: "fibonacci", headers: headers }
        );
        console.log(response);
        setResult(response.data);
        setShowResult(true);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div id="fibonacci-component" className="component">
      <div className="component-header">
        <h2 className="component-title">Fibonacci Calculator</h2>
        <p className="component-description">
          Enter a number in the text input, hit enter to see what the next
          number in the fibonacci squence is!
        </p>
      </div>
      <div className="component-body">
        <form className="component-form">
          <label className="component-form-label" for="fibonacci-text-input">
            Number:
          </label>
          <div className="component-inputs">
            <input
              className="component-text-input"
              type="text"
              id="fibonacci-text-input"
              name="fibonacci-text-input"
            />
            <input
              className="component-submit"
              type="submit"
              value="Enter"
              onClick={(e) => {
                e.preventDefault();
                getFibonacci(
                  document.getElementById("fibonacci-text-input").value
                );
              }}
            />
          </div>
          <div className="component-results">
            {showError ? (
              <p className="error">
                Please enter a number consisting of only digits 0 through 9! (The maximum supported value is 2144908972)
              </p>
            ) : showResult ? (
              <p className="result">{result}</p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Fibonacci;
