import {
  Button,
  Divider,
  Paper,
  PasswordInput,
  SegmentedControl,
  TextInput,
  Title,
} from "@mantine/core";
import axios from "axios";
import { Image, Mail, User } from "lucide-react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const handleSignup = async () => {
    try {
      const body = {
        fullName: name,
        email: email,
        password: password,
        image: image,
      };

      const response = await axios.post(
        "http://localhost:8000/user/create",
        body,
      );
      alert("user created successsfully");
      setAuthType("login")
    
    } catch (err) {
      alert("Error occured");
    }
  };


  const handleLogin = async ()=> {
try{
      const body  = {
      email : email,
      password : password
    }
    const response = await axios.post(" http://localhost:8000/user/login",body)
    localStorage.setItem("token",response.data.token)
    alert("Logged in sucessfully")
}
catch (err) {
  alert("error occured")
}
  }
  const [authType, setAuthType] = useState("signup");

 

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-2xl text-white shadow-lg shadow-indigo-200">
            ✨
          </div>

          <Title
            order={1}
            className="!text-3xl !font-bold !text-gray-900"
          >
            {authType === "signup"
              ? "Create your account"
              : "Welcome back"}
          </Title>

          <p className="mt-2 text-sm text-gray-500">
            {authType === "signup"
              ? "Join us today and get started for free."
              : "Sign in to continue to your account."}
          </p>
        </div>

        {/* Card */}
        <Paper
          shadow="xl"
          radius="lg"
          p="xl"
          className="border border-gray-100"
        >
          {/* Login / Signup Tabs */}
          <SegmentedControl
            fullWidth
            size="md"
            radius="md"
            value={authType}
            onChange={setAuthType}
            data={[
              {
                label: "Sign Up",
                value: "signup",
              },
              {
                label: "Login",
                value: "login",
              },
            ]}
            className="mb-6"
          />

          <div className="space-y-5">

            {/* Signup only */}
            {authType === "signup" && (
              <>
                <TextInput
                  label="Full name"
                  placeholder="John Doe"
                  leftSection={<User size={18} />}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  size="md"
                  radius="md"
                />

                <TextInput
                  label="Profile image URL"
                  placeholder="https://example.com/avatar.jpg"
                  leftSection={<Image size={18} />}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  size="md"
                  radius="md"
                />
              </>
            )}

            {/* Email */}
            <TextInput
              label="Email address"
              placeholder="you@example.com"
              type="email"
              leftSection={<Mail size={18} />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="md"
              radius="md"
            />

            {/* Password */}
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="md"
              radius="md"
            />

            {/* Forgot password */}
            {authType === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit */}
            <Button
              fullWidth
              size="md"
              radius="md"
              onClick={
                authType === "signup"
                  ? handleSignup
                  : handleLogin
              }
              className="!mt-6 !bg-indigo-600 hover:!bg-indigo-700"
            >
              {authType === "signup"
                ? "Create account"
                : "Login"}
            </Button>
          </div>

          <Divider label="or" labelPosition="center" my="lg" />

          <p className="text-center text-sm text-gray-500">
            {authType === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() =>
                setAuthType(
                  authType === "signup" ? "login" : "signup"
                )
              }
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {authType === "signup" ? "Login" : "Sign up"}
            </button>
          </p>
        </Paper>

        <p className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
  
};

export default Signup;
