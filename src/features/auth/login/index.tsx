"use client";

import AuthCard from "../_components/auth-card";
import AuthForm from "../_components/auth-form";
import AUTH_CONSTANT from "../auth.constant";
import useLogin from "./useLogin";

export default function LoginContainer() {
  const { onLoginSubmit, form } = useLogin();
  return (
    <AuthCard
      title="Welcome Back"
      description="Please enter your details to sign in"
      footer={AUTH_CONSTANT.login.footer}
      textButton="Get Started"
    >
      <AuthForm
        form={form}
        onSubmit={onLoginSubmit}
        field={AUTH_CONSTANT.login.form}
      />
    </AuthCard>
  );
}
