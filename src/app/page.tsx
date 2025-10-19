"use client";

// components
import Nav from "@/app/components/nav";
import Landing from "@/app/components/Landing";

export default function Home() {
  return (
    <>
            <Nav />
      <div className="min-h-screen">

        <Landing />

        <div className="min-h-screen bg-white"></div>
      </div>
    </>
  );
}