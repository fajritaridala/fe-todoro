'use client'

import Auth from '@/src/components/ui/custom/auth'
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
