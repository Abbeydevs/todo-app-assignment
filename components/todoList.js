import styles from '../styles/TodoList.module.css'
import { MdDelete } from 'react-icons/md'
import { HiDotsVertical } from 'react-icons/hi'

const TodoList = () => {
  return (
    <div className={styles['task-content']}>
      <label htmlFor='selectTask' className={styles['task-label']}>
        <input type='checkbox' name='' id='' />
        <p className='mb-0'>Shoe making</p>
      </label>
      <div className='todo-actions dropdown'></div>
      <div class='dropdown'>
        <span data-bs-toggle='dropdown' aria-expanded='false'>
          <HiDotsVertical />
        </span>
        <ul class='dropdown-menu'>
          <li>
            <a class='dropdown-item' href='#'>
              Mark Done
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Delete Task
            </a>
          </li>
          <li>
            <a class='dropdown-item' href='#'>
              Edit Task
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TodoList
