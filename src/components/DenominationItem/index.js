// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomition-item">
      <button type="button" className="btn" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
