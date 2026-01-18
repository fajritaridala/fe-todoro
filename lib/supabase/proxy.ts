import { createServerClient } from "@supabase/ssr"
import { type NextRequest, NextResponse } from "next/server"
import { SUPABASE_KEY, SUPABASE_URL } from "../env"

export const updateSession = async (request: NextRequest) => {
const loginPath = request.nextUrl.pathname.startsWith("/login")
const authPath = request.nextUrl.pathname.startsWith("/auth")

  let supabaseResponse = NextResponse.next({
    request
  })

  const supabase = createServerClient(SUPABASE_URL!, SUPABASE_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({name, value}) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({request})
          cookiesToSet.forEach(({name, value, options}) => supabaseResponse.cookies.set(name, value, options))
        }

      }
    } )

  const {data} = await supabase.auth.getClaims()
  const user = data?.claims

  if (!user && !loginPath && !authPath) {
    const url = request.nextUrl.clone()
    url.pathname = "/login"
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
