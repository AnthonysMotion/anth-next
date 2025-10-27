// app/about/page.tsx
'use client';

import Nav from '@/app/components/nav';
import Footer from '@/app/components/Footer';

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-black">
      <Nav />

      {/* First section: About / Photos */}
      <section className="min-h-screen flex flex-col md:flex-row px-8 py-16 relative">
{/* Left side: Photo above text */}
<div className="md:w-1/2 flex flex-col justify-end">
  {/* Photo */}
  <div className="max-w-90 overflow-hidden mb-10">
    <img
      src="/img/img-2.png"
      alt="Anthony Thach"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Text at bottom */}
  <p className="text-3xl text-black/80">
    A New Zealand-based designer and full-stack developer, crafting sleek digital experiences for the world's biggest and most ambitious brands. 
    Past clients include: Lenovo ANZ, ESL FACEIT Group, Team PWR, Nova Esports, One NZ Warriors, ACI.Dev and more.
  </p>
</div>



      </section>

      {/* Second section: Experience & Services */}
      <section className="flex flex-col md:flex-row px-8 py-16 border-t border-gray-200">
        {/* Left: Experience */}
        <div className="md:w-1/2">
          <h2 className="text-xs font-bold mb-6 tracking-tight">[ EXPERIENCE ]</h2>
          <ul className="space-y-4 text-black/80 text-sm leading-tight">
            <li>Software Development Internship @ ACI.Dev {`{NOW}`}</li>
            <li>Motion Designer @ ESL FACEIT  Group {`{22 - 24}`}</li>
            <li>Graphic Designer @ One NZ Warriors {`{22 - 23}`}</li>
            <li>Creative Director @ Overt {`{19 - 21}`}</li>
          </ul>
        </div>

        {/* Right: Services */}
        <div className="md:w-1/2 pl-8 mt-8 md:mt-0">
          <h2 className="text-xs font-bold mb-6 tracking-tight">[ SERVICES ]</h2>
          <ul className="space-y-4 text-black/80 text-sm leading-tight">
            <li>Graphic Design</li>
            <li>Motion Design</li>
            <li>Branding</li>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Photography</li>
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
