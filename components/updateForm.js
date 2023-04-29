// import styles from '../styles/TodoList.module.css'
// import { useFirestore } from '../hooks/useFirestore'

// const UpdateForm = ({ tasks }) => {
//   const [updateTask, setUpdateTask] = useState('')
//   const { updateDocument, response } = useFirestore('tasks')

//   const handleUpdateTask = async e => {
//     e.preventDefault()
//     // Create a new array of todos with the updated todo item
//     const updatedTodos = tasks.map(todoItem => {
//       if (todoItem.id === tasks.idToUpdate) {
//         return {
//           ...todoItem,
//           text: updateTask
//         }
//       }
//       return todoItem
//     })
//     await updateDocument(tasks.id, {
//       todo: updatedTodos
//     })
//     if (!response.error) {
//       setUpdateTask('')
//     }
//   }

//   return (
//     <form className={styles['task-container']} onSubmit={handleUpdateTask}>
//       <input
//         type='text'
//         value={updateTask}
//         name='todo-update'
//         placeholder='Type new task'
//         onChange={e => setUpdateTask(e.target.value)}
//       />
//     </form>
//   )
// }

// export default UpdateForm
