// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodoList, onDeleteItem} = props
  const {id, title} = eachTodoList
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="li-card-container">
      <div className="card-content">
        <p className="title">{title}</p>
        <button className="btn" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
