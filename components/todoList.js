import styles from '../styles/TodoList.module.css'
import { MdDelete } from 'react-icons/md'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useFirestore } from '../hooks/useFirestore'

const TodoList = ({ tasks }) => {
  const { deleteDocument } = useFirestore('tasks')

  return (
    <div className={styles['todo-lists-container']}>
      <ul className='ps-0'>
        {tasks.map(task => (
          <li key={task.id} className={styles['todo-li']}>
            <div className={styles['task-content']}>
              <p>{task.todo}</p>
              <div
                className={styles['todo-actions']}
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                <HiOutlineDotsVertical />
                <div className='dropdown'>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' role='button'>
                        Mark Done
                      </a>
                    </li>
                    <li>
                      <a
                        className='dropdown-item'
                        role='button'
                        onClick={() => deleteDocument(task.id)}
                      >
                        Delete Task
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' role='button'>
                        Edit Task
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.divider}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
