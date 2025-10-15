import React from "react";
// import bgImage from "../assets/hero-bg.png";

function HeroSection() {
  return (
    <section
      className="relative flex flex-col justify-center items-center text-center h-[90vh] text-white"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-5xl font-bold leading-tight">
          Discover the World's{" "}
          <span className="text-orange-400">Hidden Treasures</span>
        </h1>
        <p className="mt-4 text-lg">
          Upload photos, recognize monuments instantly, and unlock rich cultural
          stories. Your personal guide to heritage sites worldwide.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            ⬆ Upload & Discover
          </button>
          <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            🔍 Explore Monuments
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;