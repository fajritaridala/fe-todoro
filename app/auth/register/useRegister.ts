import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  RegisterRequestDto,
  registerRequestSchema,
} from './dtos/registerRequest'

const useRegister = () => {
  const form = useForm({
    resolver: zodResolver(registerRequestSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onRegisterSubmit = (data: RegisterRequestDto) => {
    console.log(data)
  }

  return {
    form,
    onRegisterSubmit,
  }
}

export default useRegister
