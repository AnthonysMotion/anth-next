'use client';

import Nav from '@/app/components/nav';
import Footer from '@/app/components/Footer';

export default function Contact() {
  return (
    <div className="w-full bg-white text-black min-h-screen">
      <Nav />

      {/* Hero / Contact Intro */}
      <section className="min-h-screen flex flex-col md:flex-row px-8 py-24 md:py-32">
        {/* Left side: Contact text */}
        <div className="md:w-1/2 flex flex-col justify-end md:justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Get in touch.
          </h1>
          <p className="text-black/80 text-lg md:text-xl mb-8">
            Whether you have a project, collaboration, or just want to say hello, 
            feel free to drop a message below. I’ll get back to you as soon as possible.
          </p>

          {/* Contact details */}
          <div className="flex flex-col space-y-2 text-sm md:text-base">
            <span>Email: hello@anthonythach.com</span>
            <span>Phone: +64 21 123 4567</span>
            <span>Location: Auckland, New Zealand</span>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div className="md:w-1/2 mt-12 md:mt-0 md:pl-12 flex flex-col justify-center">
          <form className="flex flex-col space-y-6 w-full max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-black/20 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/30 transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-black/20 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black/30 transition"
            />
            <textarea
              placeholder="Your Message"
              className="border border-black/20 px-4 py-3 rounded-md h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black/30 transition"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 w-max rounded-md hover:bg-black/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
