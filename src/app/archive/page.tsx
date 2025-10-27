// app/about/page.tsx
'use client';

import Nav from '@/app/components/nav';
import Footer from '@/app/components/Footer';
import Project from '@/app/components/Project';

export default function AboutPage() {
    return (
        <>
            <div className="w-full bg-white text-black">

                <Nav />
                <div className="min-h-[50vh] flex items-center px-8">
                    <h1 className="text-black text-3xl">
                        Archived collection of projects I've done during my career.
                    </h1>
                </div>

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
                    defaultGridCols={4}
                />
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
                    defaultGridCols={4}
                />
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
                    defaultGridCols={4}
                />
                <Footer />
            </div>
        </>
    );
}
