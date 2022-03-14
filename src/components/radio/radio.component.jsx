import "./radio.style.css"

function Radio({ id, label, name, ...props }) {
  return (
    <label className="radio-field" htmlFor={id}>
      <div className="circle">
        <input id={id} name={name} type="radio" className="input" {...props} />
        <div className="dot"></div>
      </div>
      <span className="label">{label}</span>
    </label>
  )
}

export { Radio }
