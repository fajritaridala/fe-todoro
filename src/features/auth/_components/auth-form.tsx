"use client";

import { useState } from "react";
import {
  FieldPath,
  FieldValues,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";

import AnimatedIcon from "@/src/components/icons/animated-icon";
import { Button } from "@/src/components/ui/button";
import EyeIcon from "@/src/components/ui/eye-icon";
import EyeOffIcon from "@/src/components/ui/eye-off-icon";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/src/components/ui/form";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/src/components/ui/input-group";

import AUTH_CONSTANT from "../auth.constant";

export type PropsTypes<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  field: typeof AUTH_CONSTANT.register.form;
};

export default function AuthForm<T extends FieldValues>(props: PropsTypes<T>) {
  const { form, onSubmit, field } = props;
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  function togglePassword(itemName: string) {
    setShowPassword((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  }

  return (
    <Form {...form}>
      <form
        id="auth-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2"
      >
        {field.map((item, index) => (
          <FormField
            key={index}
            control={form.control}
            name={item.name as FieldPath<T>}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted text-sm">
                  {item.label}
                </FormLabel>
                <FormControl>
                  <InputGroup>
                    {item.type === "password" ? (
                      <>
                        <InputGroupInput
                          type={showPassword[item.name] ? "text" : "password"}
                          placeholder={item.placeholder}
                          {...field}
                          className="placeholder:text-sm lg:h-11"
                        />
                        <InputGroupAddon>
                          <AnimatedIcon icon={item.icon} />
                        </InputGroupAddon>
                        <Button
                          onClick={() => togglePassword(item.name)}
                          type="button"
                          variant="ghost"
                        >
                          {showPassword[item.name] ? (
                            <EyeIcon />
                          ) : (
                            <EyeOffIcon />
                          )}
                        </Button>
                      </>
                    ) : (
                      <>
                        <InputGroupInput
                          type={item.type}
                          placeholder={item.placeholder}
                          {...field}
                          className="placeholder:text-sm lg:h-11"
                        />
                        <InputGroupAddon>
                          <AnimatedIcon icon={item.icon} />
                        </InputGroupAddon>
                      </>
                    )}
                  </InputGroup>
                </FormControl>
              </FormItem>
            )}
          />
        ))}
      </form>
    </Form>
  );
}
