import { useForm } from "react-hook-form"

const useRegister = () => {
  const { control: controlRegister } = useForm()
  
  
  return {
    controlRegister
  }
}

export default useRegister
