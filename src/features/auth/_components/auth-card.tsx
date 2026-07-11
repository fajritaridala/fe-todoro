'use client'

import AnimatedContent from '@/src/components/AnimatedContent'
import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/components/ui/card'
import EyeIcon from '@/src/components/ui/eye-icon'
import EyeOffIcon from '@/src/components/ui/eye-off-icon'
import { FieldSeparator } from '@/src/components/ui/field'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/src/components/ui/input-group'
import Oauth from '@/src/lib/supabase/oauth'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { authConstants } from '../auth.constant'

type PropTypes<T extends FieldValues> = {
  title: string
  description: string
  textButton: string
  page: string
  form: UseFormReturn<T> // form dari react-hook-form yang dikirim oleh tiap halaman (login/register)
  onSubmit: SubmitHandler<T>
}

const AuthCard = <T extends FieldValues>(props: PropTypes<T>) => {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({})
  const toggleShowPassword = (itemName: string) => {
    setShowPassword((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }))
  }

  const { page, textButton, description, title, form, onSubmit } = props
  const formField = authConstants(page)

  return (
    <div className="flex h-screen justify-center-safe overflow-hidden bg-white">
      <AnimatedContent className="flex" direction="horizontal" duration={1}>
        <Card className="flex w-screen justify-center-safe self-center-safe rounded-none border-none shadow-none lg:w-xl lg:px-4">
          <CardHeader className="w-full lg:space-y-2">
            <h1 className="text-foreground text-xl font-bold tracking-tight lg:text-2xl">
              {title}
            </h1>
            <p className="text-muted-foreground text-sm tracking-tight lg:text-base">
              {description}
            </p>
          </CardHeader>
          <CardContent className="mb-4 lg:w-full">
            <Form {...form}>
              <form
                id="auth-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                {formField.map((item, index) => (
                  <FormField
                    control={form.control}
                    key={index}
                    name={item.name as any}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted text-sm">
                          {item.label}
                        </FormLabel>
                        <FormControl>
                          <InputGroup>
                            {item.type === 'password' ? (
                              <>
                                <InputGroupInput
                                  type={
                                    showPassword[item.name]
                                      ? 'text'
                                      : 'password'
                                  }
                                  placeholder={item.placeholder}
                                  {...field}
                                  className="placeholder:text-sm lg:h-11"
                                />
                                <InputGroupAddon>{item.icon}</InputGroupAddon>
                                <Button
                                  onClick={() => toggleShowPassword(item.name)}
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
                                <>
                                  <InputGroupInput
                                    type={item.type}
                                    placeholder={item.placeholder}
                                    {...field}
                                    className="placeholder:text-sm lg:h-11"
                                  />
                                  <InputGroupAddon>{item.icon}</InputGroupAddon>
                                </>
                              </>
                            )}
                          </InputGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  ></FormField>
                ))}
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex w-full flex-col space-y-4">
            <div className="w-full">
              <Button
                form="auth-form"
                type="submit"
                className="bg-foreground hover:bg-foreground/90 w-full font-semibold text-white lg:h-12 lg:text-base"
              >
                {textButton}
              </Button>
              <FieldSeparator className="my-6">Or</FieldSeparator>
              <Button
                variant="outline"
                className="text-foreground hover:bg-muted-foreground/10 w-full gap-3 bg-white lg:h-12 lg:text-base"
                onClick={Oauth.signIn.google}
              >
                <Image
                  src="/google-logo.webp"
                  alt="Google"
                  width={480}
                  height={480}
                  className="h-4 w-4 lg:h-5 lg:w-5"
                />
                Continue with Google
              </Button>
            </div>
            {page === 'login' ? (
              <p className="text-muted-foreground text-sm tracking-tight lg:text-base">
                Don`t have an account?{' '}
                <Link
                  href="/register"
                  className="text-foreground font-bold hover:underline"
                >
                  Create account
                </Link>
              </p>
            ) : (
              <p className="text-muted-foreground text-sm tracking-tight lg:text-base">
                Have an account?{' '}
                <Link
                  href="/login"
                  className="text-foreground font-bold hover:underline"
                >
                  Log in here
                </Link>
              </p>
            )}
          </CardFooter>
        </Card>
      </AnimatedContent>
    </div>
  )
}

export default AuthCard
