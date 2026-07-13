"use client";

import Oauth from "@/src/lib/supabase/oauth";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import AnimatedContent from "@/src/components/AnimatedContent";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { FieldSeparator } from "@/src/components/ui/field";

import AUTH_CONSTANT from "../auth.constant";

type PropTypes = {
  title: string;
  description: string;
  textButton: string;
  footer: typeof AUTH_CONSTANT.register.footer;
  children: ReactNode;
};

const AuthCard = (props: PropTypes) => {
  const { footer, textButton, description, title, children } = props;

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
          <CardContent className="mb-4 lg:w-full">{children}</CardContent>
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
            <p className="text-muted-foreground text-sm tracking-tight lg:text-base">
              {footer.label}{" "}
              <Link
                href={footer.link.href}
                className="text-foreground font-bold hover:underline"
              >
                {footer.link.label}
              </Link>
            </p>
          </CardFooter>
        </Card>
      </AnimatedContent>
    </div>
  );
};

export default AuthCard;
