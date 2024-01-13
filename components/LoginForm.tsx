"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const LoginForm = () => {
  const router = useRouter();
  const {data: session, status: sessionStatus} = useSession();

  useEffect(() => {
    if (sessionStatus == "authenticated") {
      router.replace("/profile");
    }
  }, [sessionStatus, router]);

  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.password || formData.password.length < 8) {
      setErrorMessage("Password should be of length greater than 8");
      return;
    }

    const email = formData.email;
    const password = formData.password;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
  };

  return (
    sessionStatus !== 'authenticated' && <form onSubmit={handleSubmit} className="flex flex-col gap-3 item-center">
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <p className="text-red-600 text-xs">{errorMessage && errorMessage}</p>
      <Button type="submit" className="bg-orange-600">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
