import { Metadata } from "next"
import Login from "./login"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Please enter your credentials to log into the system"
}

const LoginPage = () => {
  return (
    <Login />
  )
}

export default LoginPage
