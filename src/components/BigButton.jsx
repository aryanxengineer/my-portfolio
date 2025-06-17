const BigButton = ({text, design}) => {
  return (
    <button className={`w-54 py-3 text-sm font-semibold rounded border-2 cursor-pointer ${design}`}>{text}</button>
  )
}

export default BigButton