"use client";

import AuthCard from "../_components/auth-card";
import AuthForm from "../_components/auth-form";
import AUTH_CONSTANT from "../auth.constant";
import useRegister from "./useRegister";

export default function RegisterContainer() {
  const { form, onRegisterSubmit } = useRegister();

  return (
    <AuthCard
      title="Create an account"
      description="Start your journey to better productivity today."
      footer={AUTH_CONSTANT.register.footer}
      textButton="Create account"
    >
      <AuthForm
        form={form}
        onSubmit={onRegisterSubmit}
        field={AUTH_CONSTANT.register.form}
      />
    </AuthCard>
  );
}
