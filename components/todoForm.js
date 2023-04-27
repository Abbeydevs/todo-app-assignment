import styles from '../styles/Todo.module.css'
import { MdAdd } from 'react-icons/md'

const TodoForm = () => {
  return (
    <form className={styles['task-container']}>
      <input
        type='text'
        name='todo'
        placeholder='Add New Task'
        onChange={e => setTodo(e.target.value)}
      />
      <MdAdd className={styles['add-icon']} />
    </form>
  )
}

export default TodoForm
