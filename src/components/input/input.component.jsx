import "./input.style.css"

function Input({ label, name, ...props }) {
  const uniqueId = `${name}${new Date().getTime()}`

  return (
    <div className="input-field">
      <label className="label" htmlFor={uniqueId}>
        {label}
      </label>
      <input id={uniqueId} name={name} className="input" {...props} />
    </div>
  )
}

export { Input }
