"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { LoginRequestDto, loginRequestSchema } from "../dto";

const useLogin = () => {
  const form = useForm<LoginRequestDto>({
    resolver: zodResolver(loginRequestSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = (data: LoginRequestDto) => {
    console.log("kena hit");
    console.log(data);
  };

  return {
    form,
    onLoginSubmit,
  };
};

export default useLogin;
