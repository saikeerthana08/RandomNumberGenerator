// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    this.setState({count: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="card-container shadow">
          <h1 className="title">Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
