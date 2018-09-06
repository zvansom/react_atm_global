import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      withdraw: '',
      deposit: '',
      balance: 0
    }

  }

  handleDepositClick = (e) => {
    e.preventDefault();
    console.log(this);
    if (isNaN(this.state.deposit)) {
      console.log("Not a number");
    }
    else {
      let amount = +Number(this.state.deposit);
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance,
        deposit: ''
      })
    }
  }

  handleWithdrawClick = (e) => {
    e.preventDefault();
    if (isNaN(this.state.withdraw)) {
      console.log("Not a number");
    }
    else {
      let amount = +Number(this.state.withdraw);
      let newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance,
        withdraw: ''
      })
    }
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

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" name="deposit" placeholder="enter an amount" onChange={this.handleChange} value={this.state.deposit}/>
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="text" name="withdraw" placeholder="enter an amount" onChange={this.handleChange} value={this.state.withdraw}/>
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
      </div>
    )
  }
}
