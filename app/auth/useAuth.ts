"use client"

import createClient from "@/lib/supabase/client"

const useAuth = () => {
  const handleSignInGoogle = async () => {
    const supabase = createClient()
    const { data: dataGoogle, error: errorGoogle } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback/google`
      }
    })
    return { dataGoogle, errorGoogle }
  }

  return {handleSignInGoogle}
}

export default useAuth
