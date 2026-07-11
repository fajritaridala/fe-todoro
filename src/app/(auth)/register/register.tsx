'use client'

import Auth from '@/src/components/ui/custom/auth'
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
