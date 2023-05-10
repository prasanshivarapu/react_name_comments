import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

/*      const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
       ]

       */

class App extends Component {
  state = {initialList: [], name: '', commint: ''}

  addbutton = event => {
    event.preventDefault()

    const {name, commint} = this.state
    const newlist = {
      id: uuidv4(),
      name,
      commint,
      date: new Date(),
      isliked: false,
    }
    this.setState(p => ({
      initialList: [...p.initialList, newlist],
      name: '',
      commint: '',
    }))
  }

  todo = id => {
    const {initialList} = this.state
    this.setState(p => ({
      initialList: p.initialList.map(each => {
        if (id === each.id) {
          return {...each, isliked: !each.isliked}
        }
        return each
      }),
    }))
  }

  userdele = id => {
    const {initialList} = this.state

    const finaluser = initialList.filter(each => id !== each.id)
    this.setState({initialList: finaluser})
  }

  input1 = event => {
    this.setState({name: event.target.value})
  }

  input2 = event => {
    this.setState({commint: event.target.value})
  }

  render() {
    const {initialList, name, commint} = this.state
    const leng = initialList.length
    return (
      <div className="greet1">
        <h1 className="comments"> Comments</h1>

        <form className="greet2" onSubmit={this.addbutton}>
          <div className="greet3">
            <div>
              <p className="say">Say somthing about 4.0 technologies</p>
              <input
                className="input1"
                onChange={this.input1}
                type="text"
                value={name}
                placeholder="your name"
              />
              <br />
              <textarea
                className="input2"
                onChange={this.input2}
                value={commint}
                placeholder="Your Comment"
              />
              <br />
              <button type="submit" className="button">
                Add Comment
              </button>
            </div>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </form>

        <hr className="separator" />
        <div className="greet5">
          <p className="zero">{leng}</p>
          <p>Comments</p>
        </div>

        <div>
          {initialList.map(each => (
            <CommentItem
              happy={each}
              todo={this.todo}
              userdele={this.userdele}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
