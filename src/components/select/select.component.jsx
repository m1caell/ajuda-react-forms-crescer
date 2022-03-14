import "./select.style.css"

function Select({ label, name, options, ...props }) {
  const uniqueId = `${name}${new Date().getTime()}`

  function renderOptions() {
    return options.map(({ text, value }, index) => (
      <option key={index} value={value}>
        {text}
      </option>
    ))
  }

  return (
    <div className="select-field">
      <label className="label" htmlFor={uniqueId}>
        {label}
      </label>
      <select id={uniqueId} className="Select" {...props}>
        {renderOptions()}
      </select>
    </div>
  )
}

Select.defaultProps = {
  options: [],
}

export { Select }
