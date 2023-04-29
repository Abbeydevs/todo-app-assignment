import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
// import styles from '../styles/TodoList.module.css'
import TodoForm from '../components/todoForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'
import TodoList from '../components/todoList'

const MyTask = () => {
  const { user } = useAuthContext()
  const { documents, error } = useCollection(
    'tasks',
    ['uid', '==', user.uid],
    ['createdAt', "desc"]
  )

  return (
    <>
      <Head>
        <title>TodoApp | Tasks</title>
        <meta name='description' content='todo app' />
      </Head>
      <div className={styles.task}>
        <h1>Add Tasks</h1>
        <TodoForm uid={user.uid} />
        <div>
          {error && <p>{error}</p>}
          {documents && <TodoList tasks={documents} />}
        </div>
      </div>
    </>
  )
}

export default MyTask
