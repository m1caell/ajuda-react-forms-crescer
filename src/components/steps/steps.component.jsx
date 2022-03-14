import { Fragment } from "react"
import bottleEmptySrc from "../../assets/bottle-empty.svg"
import bottleFullSrc from "../../assets/bottle-full.svg"

import "./steps.style.css"

function Step({ option, isActive, handleClick }) {
  const defineSrc = isActive ? bottleFullSrc : bottleEmptySrc

  return (
    <div onClick={handleClick} className="step">
      <img src={defineSrc} alt="Garrafa vazia" />
      <div className="step-text">{option}</div>
    </div>
  )
}

function Steps({ options, activeOption, handleClickStep }) {
  return (
    <div className="steps">
      {options.map((option, index) => {
        const isActive = index <= activeOption
        const lastItemIndex = options.length - 1
        const isLastOption = index === lastItemIndex

        return (
          <Fragment key={index}>
            <Step
              handleClick={() => handleClickStep(index)}
              option={option}
              isActive={isActive}
            />
            {!isLastOption && <div className="steps-divider"></div>}
          </Fragment>
        )
      })}
    </div>
  )
}

export { Steps }
