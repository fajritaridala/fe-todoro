import { Metadata } from "next";
import LoginContainer from "@/src/features/auth/login";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Please enter your credentials to log into the system",
};

export default function LoginPage() {
  return <LoginContainer />;
}
