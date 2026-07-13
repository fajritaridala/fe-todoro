import { Metadata } from "next";
import RegisterContainer from "@/src/features/auth/register";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Register page",
};

const RegisterPage = () => {
  return <RegisterContainer />;
};

export default RegisterPage;
