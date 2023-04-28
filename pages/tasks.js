import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import TodoForm from '../components/todoForm'
import TodoList from '../components/todoList'

const MyTask = () => {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <Head>
        <title>TodoApp | Tasks</title>
        <meta name='description' content='todo app' />
      </Head>
      <div className={styles.task}>
        <h1>Add Tasks</h1>
        <TodoForm
          textInput={textInput}
          todos={todos}
          setTodos={setTodos}
          setTextInput={setTextInput}
        />
        <TodoList todos={todos} textInput={textInput} />
      </div>
    </>
  )
}

export default MyTask
