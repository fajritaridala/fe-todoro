import createClient from "./client";

const Oauth = {
  signIn: {
    google: async () => {
      const supabase = createClient();
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      console.log(data);
      return { data, error };
    },
  },
  signOut: async () => {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut({
      scope: "local",
    });
    console.log(error);
    return { error };
  },
};

export default Oauth;
