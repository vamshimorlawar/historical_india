import SignupForm from "@/components/SignupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="m-40 max-w-screen-sm">
      <div className="mb-4">Register</div>
      <SignupForm />
      <div className="text-xs mt-2">
        Already have an account?{" "}
        <Link href="/login" className="text-orange-500 underline">
          Login Here
        </Link>
      </div>
    </div>
  );
};

export default SignupPage;
