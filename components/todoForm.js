import { useId } from 'react'
import styles from '../styles/Todo.module.css'
import { MdAdd } from 'react-icons/md'

const TodoForm = ({ setTextInput, todos, setTodos, textInput }) => {

  const id = useId()

  const handleInputText = e => {
    // console.log(e.target.value)
    setTextInput(e.target.value)
  }

  const handleTodoSubmission = e => {
    e.preventDefault()
    setTodos([
      ...todos, {
        text: textInput, id: id,
      }
    ])
    setTextInput("")
  }

  return (
    <form className={styles['task-container']}>
      <input
        type='text'
        value={textInput}
        name='todo'
        placeholder='Add New Task'
        onChange={handleInputText}
      />
      <button className={styles['submit-btn']} role='button' onClick={handleTodoSubmission} type="submit" >
        <MdAdd className={styles['add-icon']} />
      </button>
    </form>
  )
}

export default TodoForm
