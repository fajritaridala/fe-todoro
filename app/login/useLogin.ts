import * as z from "zod";
const formSchema = z.object({
  username: z.string(),
  password: z.string().min(8, "Password setidaknya 8 karakter"),
});

const useLogin = () => {};


export default useLogin;
