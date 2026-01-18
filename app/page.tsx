'use client'

import { Button } from '@/components/ui/button'
import Oauth from '@/lib/supabase/oauth'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/auth/login">Login</Link>
      <Button onClick={Oauth.signOut}>logout</Button>
    </>
  )
}
