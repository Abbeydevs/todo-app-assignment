import { useEffect, useState } from 'react'
import styles from '../styles/TodoList.module.css'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import { useFirestore } from '../hooks/useFirestore'

const TodoList = ({ tasks }) => {
  const { deleteDocument, updateDocument, response } = useFirestore('tasks')
  const [updateTask, setUpdateTask] = useState('')
  const [taskToUpdate, setTaskToUpdate] = useState(null)
  const [doneTasks, setDoneTasks] = useState([])

  useEffect(() => {
    if (response.type === 'success' && response.operation === 'update') {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskToUpdate.id) {
          return { ...task, todo: updateTask }
        }
        return task
      })
      setTasks(updatedTasks)
      setTaskToUpdate(null)
      setUpdateTask('')
      if (doneTasks.includes(taskToUpdate.id)) {
        setDoneTasks(doneTasks.filter(taskId => taskId !== taskToUpdate.id))
      }
    }
  }, [response, tasks, taskToUpdate, updateTask])

  const handleMarkDone = task => {
    updateDocument(task.id, { done: true })
  }

  return (
    <div className={styles['todo-lists-container']}>
      <ul className='ps-0'>
        {tasks.map(task => (
          <li key={task.id} className={styles['todo-li']}>
            <div
              className={`${styles['task-content']} ${
                doneTasks.includes(task.id) ? styles['done-task'] : ''
              }`}
            >
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
                      <a
                        className='dropdown-item'
                        role='button'
                        onClick={() => setDoneTasks([...doneTasks, task.id])}
                      >
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
                      <a
                        className='dropdown-item'
                        role='button'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                        onClick={() => setTaskToUpdate(task)}
                      >
                        Edit Task
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal */}

            <form
              className={styles['task-container']}
              onSubmit={e => {
                e.preventDefault()
                updateDocument(taskToUpdate.id, { todo: updateTask })
                setUpdateTask('')
              }}
            >
              <div
                className='modal fade'
                id='exampleModal'
                tabindex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5>Edit Task</h5>
                    </div>
                    <div className='modal-body'>
                      <input
                        type='text'
                        value={updateTask}
                        name='todo-update'
                        placeholder='Type new task'
                        onChange={e => setUpdateTask(e.target.value)}
                      />
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        class='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        Cancel
                      </button>
                      <button
                        type='submit'
                        className='btn btn-primary'
                        data-bs-dismiss='modal'
                      >
                        Update Task
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className={styles.divider}></div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
