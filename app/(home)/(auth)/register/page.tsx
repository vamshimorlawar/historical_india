
import RegisterForm from "@/components/RegisterForm";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="max-w-screen-2xl mx-auto p-10 mb-20">
    <div className="md:w-[40%]">
      <div className="mb-4">Register</div>
      <RegisterForm />
      <div className="text-xs mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-slate-500 underline">
          Login Here
        </Link>
      </div>
    </div>
    </div>
  );
};

export default RegisterPage;
