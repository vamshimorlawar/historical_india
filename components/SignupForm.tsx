"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SignupForm = () => {
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
    firstName: "",
    lastName: "",
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
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status == 200) {
        console.log("User Registered Successfully");
        router.push("/login");
      } else {
        setErrorMessage("Error in user registration");
      }
    } catch (error) {
      setErrorMessage("Internal Server Error");
    }
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
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
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
      <p className="text-red-600 text-xs">
        {errorMessage && errorMessage}
      </p>
      <Button type="submit" className="bg-orange-600">
        Signup
      </Button>
    </form>
  );
};

export default SignupForm;
