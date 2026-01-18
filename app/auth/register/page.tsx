import { Metadata } from 'next'
import Register from './register'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
}

const RegisterPage = () => {
  return <Register />
}

export default RegisterPage
