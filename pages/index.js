import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { MdAdd } from 'react-icons/md'
import { useState } from 'react'
import TodoForm from '../components/todoForm'
import TodoList from '../components/todoList'

export default function Home () {
  const [textInput, setTextInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <>
      <Head>
        <title>TodoApp | Home</title>
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
