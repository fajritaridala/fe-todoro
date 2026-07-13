"use client";

import AuthCard from "../_components/auth-card";
import useRegister from "./useRegister";

export default function RegisterContainer() {
  const { form, onRegisterSubmit } = useRegister();

  return (
    <AuthCard
      title="Create an account"
      description="Start your journey to better productivity today."
      page="register"
      textButton="Create account"
      form={form}
      onSubmit={onRegisterSubmit}
    />
  );
}
