"use client";
import React from "react";
import { useBalance } from "../../../packages/store/src/hooks/useBalance";

const Page = () => {
  const value = useBalance();
  return <div className="bg-pink-300">Page</div>;
};

export default Page;
