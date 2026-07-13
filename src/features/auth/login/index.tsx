"use client";

import AuthCard from "../_components/auth-card";
import useLogin from "./useLogin";

export default function LoginContainer() {
  const { onLoginSubmit, form } = useLogin();
  return (
    <AuthCard
      title="Welcome Back"
      description="Please enter your details to sign in"
      page="login"
      textButton="Get Started"
      onSubmit={onLoginSubmit}
      form={form}
    />
  );
}
