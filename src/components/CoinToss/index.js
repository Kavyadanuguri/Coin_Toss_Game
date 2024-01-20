// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  getValue = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState({
        tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
      this.setState({
        tossImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {heads, tails, tossImg} = this.state

    return (
      <div className="bg-container">
        <div className="container1">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>

          <img className="image1" alt="toss result" src={tossImg} />

          <button onClick={this.getValue} className="button1" type="button">
            Toss Coin
          </button>
          <div className="container2">
            <p className="p2">Total: {heads + tails}</p>
            <p className="p2">Heads: {heads}</p>
            <p className="p2">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
