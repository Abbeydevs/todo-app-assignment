import styles from '../styles/TodoList.module.css'
import Todo from './todo'

const TodoList = ({todos}) => {
  return (
    <div className={styles['todo-lists-container']}>
      <ul className='ps-0'>
        {todos.map(todo => (
          <Todo text={todo.text} key={todo.id} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
