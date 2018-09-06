import React, { Component } from 'react';

export default class Account extends Component {
  state = {
    amount: '',
    balance: 0
  }

  handleClick = (e) => {
    e.preventDefault();
    // TODO: Find a better way to display Insufficient Funds message to user.
    if( e.target.value === 'withdraw' && Number(this.state.amount) > this.state.balance ) {
      console.log("Insufficient Funds")
    } else {
      let amount = Number(this.state.amount);
      if( e.target.value === 'withdraw') { amount = -amount; }
      const newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance,
      })
    }
    this.setState({
      amount: ''      
    })
    
  }

  handleChange = (e) => {
    if(isNaN(e.target.value)) {
      console.log("Not a number!");
    } else {
      this.setState({
        amount: e.target.value
      })
    }
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
        <input type="text" placeholder="enter an amount" onChange={this.handleChange} value={this.state.amount}/>
        <input type="button" value="deposit" onClick={this.handleClick} />
        <input type="button" value="withdraw" onClick={this.handleClick} />
      </div>
    )
  }
}
