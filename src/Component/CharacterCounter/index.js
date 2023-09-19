import {Component} from 'react'
import {v4} from 'uuid'
import Lists from '../Lists'
import './index.css'

class Counter extends Component {
  state = {charList: [], charInput: ''}

  onChangeInput = event => {
    this.setState({charInput: event.target.value})
  }

  onAddList = event => {
    event.preventDefault()
    const {charInput} = this.state
    const newData = {id: v4(), word: charInput}
    this.setState(prev => ({
      charList: [...prev.charList, newData],
      charInput: '',
    }))
  }

  render() {
    const {charList, charInput} = this.state

    return (
      <div className="bgContainer">
        <div className="outputContainer ">
          <div className="outputHeading">
            <h1>Count the characters like a Boss...</h1>
          </div>
          <div>
            {charList.length === 0 ? (
              <div className="noInput">
                <img
                  width="400px"
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                />
              </div>
            ) : (
              <ul>
                {charList.map(each => (
                  <Lists key={each.id} data={each} />
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="inputContainer">
          <h1>Character Counter</h1>
          <form className="inputElement" onSubmit={this.onAddList}>
            <input
              type="text"
              value={charInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Counter
