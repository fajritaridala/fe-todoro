"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye } from "@solar-icons/react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-muted flex justify-center items-center">
        <div className="border">
          <Card className="py-12 px-4 w-md ">
            <CardHeader className="space-y-4">
              <h1 className="text-5xl text-center font-bold">Sign in</h1>
              <p className="text-center w-sm text-muted-foreground">
                Please enter your credentials to log into the system
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input type="text" placeholder="Username" className="h-10" />
              <div className="relative">
                <Input type="password" placeholder="Password" className="h-10" />
                <Eye
                  size="18"
                  weight="Broken"
                  className="absolute text-muted-foreground right-4 cursor-pointer top-2 "
                />
              </div>
              <Link href="/">
                <p className=" text-end text-sm underline hover:text-primary text-muted-foreground">
                  Forgot Password?
                </p>
              </Link>
            </CardContent>
            <CardFooter>
              <div className=" w-full space-y-3">
                <Button size="lg" className="w-full font-semibold ">
                  Get started
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full hover:bg-white "
                >
                  Sign in with Google
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Login;
