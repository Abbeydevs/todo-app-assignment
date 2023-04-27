import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { MdAdd } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import { BsCheckLg } from 'react-icons/bs'
import { useState } from 'react'

export default function Home () {
  const [todo, setTodo] = useState()

  const onSubmit = e => {
    e.preventDefault()
    setTodo('')
  }

  return (
    <>
      <div className={styles.task}>
        <h1>Add Tasks</h1>
        <form onSubmit={onSubmit} className={styles['task-container']}>
          <MdAdd className={styles['add-icon']} />
          <input
            type='text'
            name='todo'
            placeholder='Add New Task'
            onChange={e => setTodo(e.target.value)}
          />
        </form>
        <div className={styles['task-content']}>
          <label htmlFor='selectTask' className={styles['task-label']}>
            <input type='checkbox' name='' id='' />
            <p>Shoe making</p>
          </label>
          <div className={styles['action-icons']}>
            <BsCheckLg className={styles['check-icon']} />
            <MdDelete className={styles['del-icon']} />
          </div>
        </div>
        <div className={styles.divider}></div>
      </div>
    </>
  )
}
