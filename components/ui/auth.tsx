import authConstants from '@/app/auth/authConstant'
import useAuth from '@/app/auth/useAuth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import Image from 'next/image'
import Link from 'next/link'
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { FieldSeparator } from './field'
import { Input } from './input'

type PropTypes<T extends FieldValues> = {
  title: string
  description: string
  textButton: string
  page: string
  form: UseFormReturn<T> // form dari react-hook-form yang dikirim oleh tiap halaman (login/register)
  onSubmit: SubmitHandler<T>
}

const Auth = <T extends FieldValues>(props: PropTypes<T>) => {
  const { page, textButton, description, title, form, onSubmit } = props

  const { handleSignInGoogle } = useAuth()
  const formField = authConstants(page)

  return (
    <div className="bg-white flex justify-center-safe">
      <Card className=" rounded-none border-none  self-center-safe w-xl   flex  justify-center-safe  px-4  lg:shadow-none shadow-lg">
        <CardHeader className="space-y-3 mb-4 w-full">
          <h1 className="text-foreground text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg  ">{description}</p>
        </CardHeader>
        <CardContent className=" w-full">
          <Form {...form}>
            <form
              id="auth-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {formField.map((item, index) => (
                <FormField
                  control={form.control}
                  key={index}
                  name={item.name as any}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-muted">
                        {item.label}
                      </FormLabel>
                      <FormControl>
                        <Input
                          type={item.type}
                          placeholder={item.placeholder}
                          {...field}
                          className="h-11 placeholder:text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                ></FormField>
              ))}
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col  w-full space-y-4">
          <div className="w-full">
            <Button
              form="auth-form"
              type="submit"
              className="w-full bg-foreground text-white hover:bg-foreground/90 font-semibold h-12 text-lg"
            >
              {textButton}
            </Button>
            <FieldSeparator className="my-6">Or</FieldSeparator>
            <Button
              variant="outline"
              className="text-foreground w-full gap-3 text-lg h-12 bg-white hover:bg-muted-foreground/10"
              onClick={handleSignInGoogle}
            >
              <Image
                src="/google-logo.webp"
                alt="Google"
                width={480}
                height={480}
                className="h-5 w-5"
              />
              Continue with Google
            </Button>
          </div>
          {page === 'login' ? (
            <p className="text-muted-foreground tracking-tight">
              Don`t have an account?{' '}
              <Link
                href="/auth/register"
                className="text-foreground font-bold hover:underline"
              >
                Create account
              </Link>
            </p>
          ) : (
            <p className=" text-muted-foreground tracking-tight">
              Have an account?{' '}
              <Link
                href="/auth/login"
                className="text-foreground font-bold hover:underline"
              >
                Log in here
              </Link>
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default Auth
