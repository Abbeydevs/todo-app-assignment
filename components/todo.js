import styles from '../styles/TodoList.module.css'
import { HiDotsVertical } from 'react-icons/hi'

const Todo = ({ text }) => {
  return (
    <>
      <div className={styles['task-content']}>
        <div className={styles['task-label']}>
          <li className={styles['todo-li']}>{text}</li>
        </div>
        <div className='dropdown'>
          <span data-bs-toggle='dropdown' aria-expanded='false'>
            <HiDotsVertical />
          </span>
          <ul className='dropdown-menu'>
            <li>
              <a className='dropdown-item' href='#'>
                Mark Done
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Delete Task
              </a>
            </li>
            <li>
              <a className='dropdown-item' href='#'>
                Edit Task
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.divider}></div>
    </>
  )
}

export default Todo
