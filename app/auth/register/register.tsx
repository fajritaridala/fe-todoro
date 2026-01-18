'use client'

import Auth from '@/components/ui/auth'
import useRegister from './useRegister'

const Register = () => {
  const { form, onRegisterSubmit } = useRegister()
  return (
    <Auth
      title="Create an account"
      description="Start your journey to better productivity today."
      page="register"
      textButton="Create account"
      form={form}
      onSubmit={onRegisterSubmit}
    />
  )
}

export default Register
