import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {listItem: initialTodosList}

  onDeleteItem = id => {
    const {listItem} = this.state
    const filterItemListData = listItem.filter(eachItem => eachItem.id !== id)
    this.setState({listItem: filterItemListData})
  }

  render() {
    const {listItem} = this.state
    return (
      <div className="bg-container">
        <ul className="ul-card-bg-container">
          <div className="head-content">
            <h1 className="card-heading">Simple Todos</h1>
          </div>
          {listItem.map(eachItem => (
            <TodoItem
              eachTodoList={eachItem}
              key={eachItem.id}
              onDeleteItem={this.onDeleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default SimpleTodos
