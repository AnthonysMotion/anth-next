"use client";

// components
import Nav from "@/app/components/nav";
import Landing from "@/app/components/Landing";
import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";


export default function Home() {
  return (
    <>
        <Nav />
        <Landing />
        <SectionOne />
        <SectionTwo />
        <div className="min-h-screen bg-white"></div>
    </>
  );
}