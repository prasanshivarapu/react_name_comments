// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {happy, todo, userdele} = props
  const {name, commint, date, isliked, id} = happy
  const firstletter = name[0]
  const postedTime = formatDistanceToNow(date)
  const btn = () => {
    todo(id)
  }
  const dele = () => {
    userdele(id)
  }
  return (
    <div>
      <div>
        <div className="greet6">
          <p className="rimage"> {firstletter}</p>
          <h1 className="rheading">{name}</h1>
          <p className="less">{postedTime}</p>
        </div>
        <p className="para2">{commint}</p>
        <div className="greet8">
          {isliked ? (
            <div className="greet7">
              <img
                alt="avatar"
                className="imagelike"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
              />
              <button type="button" className="button2 liked" onClick={btn}>
                <p> Liked</p>
              </button>
            </div>
          ) : (
            <div className="greet7">
              <img
                alt="avatar"
                className="imagelike"
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
              />
              <button type="button" className="button2" onClick={btn}>
                <p> Like</p>
              </button>
            </div>
          )}
          <button type="button" className="delete" onClick={dele}>
            <img
              alt="avatar"
              className="delete"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            />
          </button>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default CommentItem
