import Head from 'next/head'
import { useAuth } from '../hooks/useAuth'
import MyTask from './tasks'
import Login from './login'

export default function Home () {
  const { user, authIsReady } = useAuth()

  return (
    <>
      <Head>
        <title>TodoApp | Home</title>
        <meta name='description' content='todo app' />
      </Head>
      {user ? <MyTask /> : <Login />}
    </>
  )
}
