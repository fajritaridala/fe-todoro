import { Metadata } from 'next'
import Register from './register'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Register page',
}

const RegisterPage = () => {
  return <Register />
}

export default RegisterPage
