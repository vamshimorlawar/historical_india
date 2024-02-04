
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="mt-32 ml-32 max-w-screen-sm">
      <div className="mb-4">Register</div>
      <RegisterForm />
      <div className="text-xs mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-slate-500 underline">
          Login Here
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
