"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const ClientPage = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  console.log(user)
  return (
    <div className="h-full flex flex-col items-center justify-center text-2xl">
      Hello, {user.firstName} welcome to NextAuth
    </div>
  );
};

export default ClientPage;