const Lists = props => {
  const {data} = props
  const {word} = data
  return (
    <li>
      <p>
        {word} : {word.length}
      </p>
    </li>
  )
}
export default Lists
