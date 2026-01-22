import { authConstants } from '@/src/app/(auth)/authConstant'
import { Button } from '@/src/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/src/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components/ui/form'
import Oauth from '@/src/lib/supabase/oauth'
import Image from 'next/image'
import Link from 'next/link'
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'
import AnimatedContent from '../../AnimatedContent'
import { FieldSeparator } from '../field'
import { InputGroup, InputGroupAddon, InputGroupInput } from '../input-group'

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
  const formField = authConstants(page)

  return (
    <div className="bg-white h-screen flex justify-center-safe overflow-hidden">
      <AnimatedContent className="flex" direction="horizontal" duration={1}>
        <Card className="rounded-none border-none shadow-none self-center-safe lg:w-2xl flex justify-center-safe lg:px-4 w-screen">
          <CardHeader className="lg:space-y-2 w-full">
            <h1 className="text-foreground lg:text-4xl text-xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-muted-foreground lg:text-lg text-sm tracking-tight">
              {description}
            </p>
          </CardHeader>
          <CardContent className="lg:w-full mb-4">
            <Form {...form}>
              <form
                id="auth-form"
                onSubmit={form.handleSubmit(onSubmit)}
                className="lg:space-y-6 space-y-3"
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
                          <InputGroup>
                            <InputGroupInput
                              type={item.type}
                              placeholder={item.placeholder}
                              {...field}
                              className="lg:h-11 placeholder:text-sm"
                            />
                            <InputGroupAddon>{item.icon}</InputGroupAddon>
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
          <CardFooter className="flex flex-col  w-full space-y-4">
            <div className="w-full">
              <Button
                form="auth-form"
                type="submit"
                className="w-full bg-foreground text-white hover:bg-foreground/90 font-semibold lg:h-12 lg:text-lg"
              >
                {textButton}
              </Button>
              <FieldSeparator className="my-6">Or</FieldSeparator>
              <Button
                variant="outline"
                className="text-foreground w-full gap-3 lg:text-lg lg:h-12 bg-white hover:bg-muted-foreground/10"
                onClick={Oauth.signIn.google}
              >
                <Image
                  src="/google-logo.webp"
                  alt="Google"
                  width={480}
                  height={480}
                  className="lg:h-6 lg:w-6 h-4 w-4"
                />
                Continue with Google
              </Button>
            </div>
            {page === 'login' ? (
              <p className="text-muted-foreground tracking-tight text-sm lg:text-lg">
                Don`t have an account?{' '}
                <Link
                  href="/register"
                  className="text-foreground font-bold hover:underline"
                >
                  Create account
                </Link>
              </p>
            ) : (
              <p className=" text-muted-foreground tracking-tight text-sm lg:text-lg">
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

export default Auth
