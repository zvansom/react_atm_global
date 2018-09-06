import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      balance: 0
    }

  }

  // TODO: Refactor click handlers to shared method
  handleDepositClick = (e) => {
    e.preventDefault();
    if (isNaN(this.state.amount) || this.state.amount < 0) {
      console.log("Not a valid number");
    }
    else {
      let amount = +Number(this.state.amount);
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance,
        amount: ''
      })
    }
  }

  handleWithdrawClick = (e) => {
    e.preventDefault();
    if (isNaN(this.state.amount) || this.state.amount < 0) {
      console.log("Not a valid number");
    } else if (Math.abs(this.state.amount) > this.state.balance) {
      console.log("Insufficient Funds")
    }
    else {
      let amount = +Number(this.state.amount);
      let newBalance = this.state.balance - Math.abs(amount);
      this.setState({
        balance: newBalance,
      })
    }
    this.setState({
      amount: ''      
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    // TODO: Change inputs to Forms
    // TODO: Refactor form into new React component
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" name="amount" placeholder="enter an amount" onChange={this.handleChange} value={this.state.amount}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}
