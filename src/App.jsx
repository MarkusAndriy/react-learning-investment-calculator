import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import {Results} from "./components/Results.jsx";

function App() {

  const [userInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expectedReturn: 6,
      duration: 10
    }
  );

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prevInputValue => {
      return {
        ...prevInputValue,
        [inputIdentifier]: +newValue
      }
    })

  }

  return (
    <>
      <UserInput onChangeInput={handleInputChange} userInput={userInput}/>
      <Results userInput={userInput}/>
    </>
  );
}

export default App
