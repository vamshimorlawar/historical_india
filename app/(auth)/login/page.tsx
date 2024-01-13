import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="m-40 max-w-screen-sm">
      <div className="mb-4">Login</div>
      <LoginForm />
      <div className="text-xs mt-2">
        Don't have an account? <Link href="/sign-up" className="text-orange-500 underline">Register Here</Link>
      </div>
    </div>
  );
};

export default LoginPage;
