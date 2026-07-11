import LoginContainer from '@/src/features/auth/login'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Please enter your credentials to log into the system',
}

export default function LoginPage() {
  return <LoginContainer />
}
