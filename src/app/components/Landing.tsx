"use client";

export default function Landing() {
    return (
        <div className="min-h-screen text-white font-sans overflow-hidden">

            {/* Parallax Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/img/work1.jpg')",
                    }}
                />

                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Hero Content */}
            <main className="px-6 md:px-8 mt-32 md:mt-48 min-h-screen relative z-10">
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4">
                        Born to Create<sup className="text-xl">™</sup>
                    </h2>
                    <p className="text-xl md:text-2xl font-light mb-16">
                        Brand. Design. Development.
                    </p>
                </div>

                <div className="mt-32 md:mt-48 max-w-md">
                    <p className="text-sm md:text-base leading-relaxed mb-2">
                        As a multi-award-winning studio,
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                        <span className="font-bold">FUTURE THREE®</span> creates award-winning websites and sets international standards.
                    </p>
                </div>
            </main>
        </div>
    );
}
