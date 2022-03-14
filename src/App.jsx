import { useState } from "react"
import {
  Button,
  Steps,
  PersonalDataStep,
  AcademicsDataStep,
} from "./components"

import "./style.css"

const STEPS = ["Dados pessoais", "Dados letivos", "Aulas"]

function Classes({ handleClickNext }) {
  return (
    <section className="personal-data section">
      <h1 className="section-title">Aulas</h1>
      <form>
        <Button onClick={handleClickNext}>Próximo</Button>
      </form>
    </section>
  )
}

export default function App() {
  const [stepNumber, setStepNumber] = useState(0)

  function handleClickNext() {
    const lastItemIndex = STEPS.length - 1

    if (stepNumber < lastItemIndex) {
      setStepNumber(stepNumber + 1)
    }
  }

  function handleClickStep(stepIndex) {
    setStepNumber(stepIndex)
  }

  function renderScreen() {
    switch (stepNumber) {
      case 0:
        return <PersonalDataStep handleClickNext={handleClickNext} />
      case 1:
        return <AcademicsDataStep handleClickNext={handleClickNext} />
      case 2:
        return <Classes handleClickNext={handleClickNext} />
      default:
        break
    }
  }

  return (
    <div className="app">
      <div className="container">
        <Steps
          options={STEPS}
          activeOption={stepNumber}
          handleClickStep={handleClickStep}
        />
        {renderScreen()}
      </div>
    </div>
  )
}
