import "./button.style.css"

function Button({ children, ...props }) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  )
}

export { Button }
