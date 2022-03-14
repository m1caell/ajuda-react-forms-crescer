import { React } from "react"

import "./button.style.css"

function Button({ children }) {
  return <button className="button">{children}</button>
}

export { Button }
