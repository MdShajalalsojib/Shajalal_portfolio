import React from "react";

const Home = () => {
  return (
    <div className="flex justify-between justify-center gap-7">
      <div>
        <button className="bg-gray-400 text-center rounded-full p-5 shadow-2xs shadow-cyan-200 mt-6">
          Open for opportunities
        </button>
        <h2 className="mt-7 text-3xl font-bold ">
          <span>|</span>MD. SHAJALAL <span>|</span>
        </h2>
        <h2 class="text-4xl md:text-6xl font-extrabold leading-tight mt-8">
          Computer Science
          <span class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            {" "}
            Engineer
          </span>
        </h2>
        <p className="text-2xl mt-3">
          Building innovative, scalable, and user-focused solutions with modern
          tech stack.
        </p>
        <div class="flex flex-wrap gap-4 justify-center lg:justify-start mt-10">
          <a
            href="#projects"
            class="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            class="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
        <div class="relative p-6 rounded-2xl  shadow-2xl mt-10 shadow-cyan-600">
          <div class="flex items-center gap-3 ">
            <i class="fas fa-quote-left text-blue-600 text-2xl"></i>
            <span class="font-mono text-sm">mission statement</span>
          </div>
          <p class="italic leading-relaxed">
            I enjoy building meaningful products, solving challenging problems,
            and continuously pushing my limits to become a better developer
            every day.
          </p>
          <div class="mt-4 flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <i class="fas fa-code text-white text-sm"></i>
            </div>
            <div>
              <p class="font-semibold">Md Shajalal</p>
              <p class="text-xs font-mono">
                
                Computer Science Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rountded border-4 shadow-2xl shadow-blue-500 mt-4">
          <img src="../assets/me.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
