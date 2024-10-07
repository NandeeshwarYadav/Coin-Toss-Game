// Write your code here
import {Component} from 'react'
import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {image: headImage, tailCount: 0, headCount: 0, count: 0}

  headOrTail = () => {
    const tossResult = Math.floor(Math.random() * 2)
    const checkResult = tossResult === 0 ? headImage : tailImage
    this.setState({image: checkResult})
    const isheadTail = checkResult === headImage
    if (isheadTail) {
      this.setState(prevState => ({
        headCount: prevState.headCount + 1,
        count: prevState.count + 1,
      }))
    } else {
      this.setState(prevState => ({
        tailCount: prevState.tailCount + 1,
        count: prevState.count + 1,
      }))
    }
  }

  render() {
    const {image, count, tailCount, headCount} = this.state
    console.log({headCount}, {tailCount})
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="coin-img" />
          <button type="button" className="button" onClick={this.headOrTail}>
            Toss Coin
          </button>
          <div className="bottom-container">
            <p className="bottom-values">Total:{count}</p>
            <p className="bottom-values">Heads:{headCount}</p>
            <p className="bottom-values">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
