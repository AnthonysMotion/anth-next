'use client';

// components
import Nav from "@/app/components/nav";
import Landing from "@/app/components/Landing";
import SectionOne from "@/app/components/SectionOne";
import SectionTwo from "@/app/components/SectionTwo";
import Project from "@/app/components/Project";
import Footer from "@/app/components/Footer";
import PageLoader from "./components/PageLoader";

export default function Home() {
  return (
    <>
      <Nav />
      <PageLoader>

        <Landing />
        <Project
          title="Select"
          type="UI/UX Design + Web Development"
          year="2025"
          description="This project involved developing a sleek, modern and premium website for Select, an AI-powered concierge service. The focus was on user experience and intuitive design."
          media={[
            { type: 'image', src: '/img/p1/1.png' },
            { type: 'image', src: '/img/p1/2.png' },
            { type: 'video', src: '/img/p1/3.mp4' },
            { type: 'image', src: '/img/p1/4.png' },
          ]}
          defaultGridCols={2}
        />
        <Project
          title="PWR x Solo Leveling"
          type="Motion Design"
          year="2025"
          description="To announce the collaboration of Team PWR and Solo Leveling, I created an engaging motion design piece that highlights the apparel collection and the essence of both brands."
          media={[
            { type: 'image', src: '/img/p2/1.png' },
            { type: 'video', src: '/img/p2/3.mp4' },
            { type: 'image', src: '/img/p2/2.png' },
            { type: 'video', src: '/img/p2/2.mp4' },
          ]}
          defaultGridCols={4}
        />
        <Project
          title="Vodafone Warriors Esports"
          type="Brand Direction"
          year="2025"
          description="Capturing the essence of the Vodafone Warriors Esports team, I developed a bold and dynamic brand direction that resonates with the gaming community and reflects the team's competitive spirit."
          media={[
            { type: 'image', src: '/img/p3/1.png' },
            { type: 'image', src: '/img/p3/2.png' },
            { type: 'image', src: '/img/p3/3.png' },
            { type: 'image', src: '/img/p3/4.png' },
          ]}
          defaultGridCols={4}
        />
        <SectionOne />
        <SectionTwo />
        <Footer />
      </PageLoader></>
  );
}
