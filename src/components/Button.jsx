const Button = ({text}) => {
  return (
    <button className="cursor-pointer text-sm hover:text-red-600 transition-all duration-200 ease-in-out">{text}</button>
  )
}

export default Button