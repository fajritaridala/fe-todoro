'use client'

import Auth from '@/components/ui/auth'
import useRegister from './useRegister'

const Register = () => {
  const { controlRegister } = useRegister()
  return (
    <Auth
      title="Organize tasks, track time."
      description="One platform to manage your todo-lists and Pomodoro sessions"
      page="register"
      textButton="Create account"
      control={controlRegister}
    />
  )
}

export default Register
