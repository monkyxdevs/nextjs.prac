"use client"
import HSDropdown from "@preline/dropdown";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    const dropdownElement = document.getElementById("hs-dropdown-example");
    if (dropdownElement) {
      HSDropdown.getInstance(dropdownElement, true);
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>Hello world</h1>
      <button className="border border-orange-500 rounded-md p-2" onClick={()=>{
        router.push('/dashboard')
      }}>Click me!</button>
    </div>
  );
}
