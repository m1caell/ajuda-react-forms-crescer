import { useState } from "react"
import { Input, Button, Radio, Select } from "../"

import "./personal-data-step.style.css"

const FORM_INITIAL = {
  fullName: { label: "Nome completo", name: "fullName", value: "" },
  addressLetter: {
    label: "Endereço para cartas",
    name: "addressLetter",
    value: "",
  },
  number: { label: "Nº", name: "number", value: "", type: "number" },
  pet: {
    label: "Animal de estimação",
    name: "pet",
    options: [
      { text: "Coelho", value: "habit" },
      { text: "Rato", value: "mouse" },
      { text: "Gato", value: "cat" },
    ],
  },
  pureBlood: {
    id: "pureBloodId",
    label: "Pure-blood",
    name: "bloodType",
    checked: null,
  },
  halfBlood: {
    id: "halfBloodId",
    label: "half-blood",
    name: "bloodType",
    checked: null,
  },
}

function PersonalDataStep({ handleClickNext }) {
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
    <section className="personal-data-step section">
      <h1 className="section-title">Dados pessoais</h1>
      <form onSubmit={handleSubmit} className="form">
        <Input onChange={handleChange} {...form.fullName} />
        <div className="single-row">
          <Input onChange={handleChange} {...form.addressLetter} />
          <Input onChange={handleChange} {...form.number} />
        </div>
        <div className="single-row">
          <Select onChange={handleChange} {...form.pet} />
          <Radio onChange={handleChange} {...form.pureBlood} />
          <Radio onChange={handleChange} {...form.halfBlood} />
        </div>
        <div className="controls-row">
          <Button type="submit">Próximo</Button>
        </div>
      </form>
    </section>
  )
}

export { PersonalDataStep }
