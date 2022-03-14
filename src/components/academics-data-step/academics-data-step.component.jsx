import { useState } from "react"
import { Input, Button, Radio, Select } from ".."

import "./academics-data-step.style.css"

const FORM_INITIAL = {}

function AcademicsDataStep({ handleClickNext }) {
  const [form, setForm] = useState(FORM_INITIAL)

  function handleChange({ target }) {
    const { name, value, checked, type } = target

    if (type === "radio") {
      setForm({ ...form, [name]: { ...form[name], value, checked } })
    } else {
      setForm({ ...form, [name]: { ...form[name], value } })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.info(form)
    handleClickNext()
  }

  return (
    <section className="academics-data section">
      <h1 className="section-title">Dados letivos</h1>
      <form>
        <Button onClick={handleClickNext}>Próximo</Button>
      </form>
    </section>
  )
}

export { AcademicsDataStep }
