import React from "react";


const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-[#0b1220]">
       <div className="flex justify-between justify-center gap-10 ml-24 mr-24 mb-10">
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
        
        <div class="relative p-6  rounded-2xl  shadow-2xl mt-10 shadow-cyan-600">      
          <div class="flex items-center gap-3 ">
            {/* <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div> */}
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
              <p class="text-xs font-mono">Computer Science Engineer</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex-1  mt-14 ">
        <div class="relative group">
          <div class="absolute inset-0  bg-gradient-to-r border-4 from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div class="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-1 w-150">
            <div class="relative rounded-xl overflow-hidden aspect-square bg-black h-160 max-w-full">
              <p className="m-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                totam reprehenderit laborum in architecto laudantium doloribus
                veniam expedita, ad amet!
              </p>
            </div>
          </div>
        </div>
      </div>
        
    </div>
    </section>
     
  );
};

export default Home;
