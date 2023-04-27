import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Link href='/'><h1>TodoApp</h1></Link>
      <div className='nav-links'>
        <Link href='/login'>Login</Link>
        <Link href='/register'>Register</Link>
        <Link href='/' className='logout-btn'>Logout</Link>
      </div>
    </nav>
  )
}

export default Navbar
