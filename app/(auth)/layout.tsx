import AuthSide from "@/src/features/auth/_components/auth-side";
import { SharedLayout } from "../layout";

export default function AuthLayout({ children }: SharedLayout) {
  return (
    <div className="h-screen grid-cols-2 lg:grid">
      <AuthSide />
      {children}
    </div>
  );
}
