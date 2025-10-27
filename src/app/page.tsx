"use client";

// components
import Nav from "@/app/components/nav";
import Landing from "@/app/components/Landing";
import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";
import Project from "@/app/components/Project";


export default function Home() {
  const projects = [
    {
      title: 'Select',
      type: 'UI/UX Design + Development',
      year: '2025',
      description:
        'This project involved creating an innovative automotive design for Polestar. We focused on sustainability and premium aesthetics.',
      images: [
        '/img/work1.jpg',
        '/img/work1.jpg',
        '/img/work1.jpg',
        '/img/work1.jpg',
      ],
    },
    {
      title: 'MotionX',
      type: 'Animation',
      year: '2023',
      description:
        'MotionX is an experimental animation project exploring abstract motion graphics for digital campaigns.',
      images: [
        '/img/work1.jpg',
        '/img/work1.jpg',
        '/img/work1.jpg',
        '/img/work1.jpg',
      ],
    },
  ];

  return (
    <>
      <Nav />
      <Landing />
        {projects.map((proj, idx) => (
          <Project key={idx} {...proj} />
        ))}
      <SectionOne />
      <SectionTwo />
      <div className="min-h-screen bg-white"></div>

    </>
  );
}