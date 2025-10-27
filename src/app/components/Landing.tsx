"use client";

export default function Landing() {
  return (
    <div className="h-[50vh] flex flex-col justify-center bg-white px-8">
      <h1 className="text-2xl font-medium text-black leading-tight max-w-lg">
        Hello, I'm Anthony. I'm an award-winning designer, developer, and photographer working in the creative industries for over 8 years.
      </h1>

      {/* Available for work badge */}
      <div className="mt-4 flex items-center space-x-2">
        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
        <span className="text-sm font-medium text-black/50">Available for work</span>
      </div>
    </div>
  );
}
