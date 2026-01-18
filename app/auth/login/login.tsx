'use client'

import Auth from '@/components/ui/auth'
import useLogin from './useLogin'

const Login = () => {
  const { onLoginSubmit, form } = useLogin()
  return (
    <Auth
      title="Welcome Back"
      description="Please enter your details to sign in"
      page="login"
      textButton="Get Started"
      onSubmit={onLoginSubmit}
      form={form}
    />
  )
}

export default Login
