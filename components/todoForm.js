import { useEffect, useState } from 'react'
import styles from '../styles/Todo.module.css'
import { MdAdd } from 'react-icons/md'
import { useFirestore } from '../hooks/useFirestore'

const TodoForm = ({uid}) => {
  const [todo, setTodo] = useState('')
  const {addDocument, response} = useFirestore('tasks')
  const handleTodoSubmission = e => {
    e.preventDefault()
    addDocument({
      uid,
      todo
    })
    setTodo('')
  }

  return (
    <form className={styles['task-container']}>
      <input
        type='text'
        value={todo}
        name='todo'
        placeholder='Add New Task'
        onChange={e => setTodo(e.target.value)}
        required
      />
      <button
        className={styles['submit-btn']}
        role='button'
        onClick={handleTodoSubmission}
        type='submit'
      >
        <MdAdd className={styles['add-icon']} />
      </button>
    </form>
  )
}

export default TodoForm
