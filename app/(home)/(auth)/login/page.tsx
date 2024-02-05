import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-10 mb-20">
      <div className="md:w-[40%]">
        <div className="mb-4">Login</div>
        <LoginForm />
        <div className="text-xs mt-2">
          Don't have an account?{" "}
          <Link href="/register" className="text-slate-500 underline">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
