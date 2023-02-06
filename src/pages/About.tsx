import { useState } from "react";

function About() {
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(!showAbout);

  return (
    <div className="lg:px-8 px-2 w-full flex justify-center">
      <div className="md:w-1/2 w-full flex flex-col items-start mt-24">
        <div className="w-full">
          <button
            onClick={toggleAbout}
            className="flex items-center justify-between w-full border border-slate-400 p-2"
          >
            <h1 className="text-4xl font-bold">Who are we </h1>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={"w-6 h-6 transition text-white"}
              >
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
          {showAbout && (
            <div>
              <h2 className="text-xl">
                Khojo is the first ever online based international charitable
                platform oriented in Bangladesh, where anyone can participate by
                donating their unique ideas of creative content.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
