import Header from "./components/Header"
import UserInput from "./components/UserInput";
import { useState } from 'react';
import Results from "./components/Results";

const defaultInputValues = {
  initialInvestment : 10000,
  annualInvestment : 1200,
  expectedReturn: 6,
  duration: 10
}

function App() {
  const [inputValues, setInputValues] = useState(defaultInputValues);

  const isInputValid = inputValues.duration >= 1;

  function handleInputChange(inputName, value){
    setInputValues((prevInputs) => {
      return { ...prevInputs,
        [inputName] : +value
      }
    })
  }

  return (<>
    <Header />
    <UserInput inputValues={inputValues} onInputChange={handleInputChange}/>
    {!isInputValid && <p className="center"> Please enter a duration greater than zero.</p>}
    {isInputValid && <Results inputValues={inputValues}/>}
  </>
  )
}

export default App
