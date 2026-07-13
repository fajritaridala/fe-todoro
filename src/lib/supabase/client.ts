import { createBrowserClient } from "@supabase/ssr";

import { SUPABASE_KEY, SUPABASE_URL } from "../env";

const createClient = () => {
  return createBrowserClient(SUPABASE_URL!, SUPABASE_KEY!);
};

export default createClient;
