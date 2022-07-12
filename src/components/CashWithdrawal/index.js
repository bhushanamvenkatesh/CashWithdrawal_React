import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: '2000'}

  updateStatus = (id, value) => {
    const {amount} = this.state
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    // console.log(denominationsList)

    const {amount} = this.state
    return (
      <div className="container">
        <div className="withdrawal-container">
          <div className="user-container">
            <div className="dp-container">
              <h1 className="dp-letter">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="rupees-container">
              <p className="remaining-rupees">{amount}</p>
              <p className="in-rupees-text">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="select-amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="buttons-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                eachItem={eachItem}
                key={eachItem.id}
                updateStatus={this.updateStatus}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
