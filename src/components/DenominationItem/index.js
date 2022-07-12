import './index.css'

const DenominationItem = props => {
  const {eachItem, updateStatus} = props
  const {value, id} = eachItem
  const onDenominationClick = () => {
    updateStatus(id, value)
  }

  return (
    <li>
      <button className="button" onClick={onDenominationClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
