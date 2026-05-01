import React from "react";

const About = () => {
  return (
    <div className="  mt-7  ml-24 mr-24">
      <h2 class="text-3xl md:text-4xl font-bold mb-4 text-center">
        About{" "}
        <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
      <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full "></div>

       <div>
         <div class="grid md:grid-cols-2 gap-12  mt-10 justify-between">
        <div class="space-y-6">
          <div class="code-line">
            <p class="leading-relaxed" >
              I am a passionate ,
              <span class="font-semibold text-blue-600">
                Full Stack Developer
              </span>{" "}
              currently working at Sardar IT. I have completed my Bachelor’s
              degree in Computer Science and Engineering from Green University
              of Bangladesh.
            </p>
          </div>
          <div class="code-line">
            <p class="leading-relaxed"  >
              During the last two years of my university journey, I was deeply
              involved in
              <span class="font-semibold text-blue-600">
                software development
              </span>
              , building real-world projects using modern technologies like
              React, Next.js, Node.js, and Python. This hands-on experience
              helped me strengthen my problem-solving ability and practical
              development skills.
            </p>
          </div>
          <div class="code-line">
            <p class="leading-relaxed" >
              Alongside development, I actively practiced
              <span class="font-semibold text-blue-600">
                competitive programming
              </span>{" "}
              for over two years, solving problems on platforms like HackerRank
              and Codeforces, which significantly improved my analytical
              thinking and algorithmic knowledge.
            </p>
          </div>
          <div class="code-line">
            <p class="leading-relaxed">
              My dedication earned me
              <span class="font-semibold text-blue-600">3rd position</span> in
              an Intra University Programming Contest, along with multiple
              Excellence Academic Awards.
            </p>
          </div>
          <div class="flex gap-4 pt-4">
            <a
              class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              href="#contact"
               className="box-shadow: rgba(59, 130, 246, 0.12) 0px 6px 18px;"
            >
               <button className=" font-bold w-40 bg-blue-700 text-center p-3 rounded-[7px]">Let's Connect</button>
            </a>
            <a
              target="_blank"
              class="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              href="https://drive.google.com/drive/u/0/home"
            >
               <p className="font-bold">Open Resume</p>
            </a>
          </div>
        </div>
        <div
          class="rounded-xl shadow-2xl overflow-hidden mt-20 border-2 mb-20 mr-16 "
          
        >
          <div
            class="px-4 py-2 flex items-center gap-2 text-2xl "
             
          >
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span
              class="text-xs font-mono ml-2 font-bold"
               
            >
              student@portfolio:~
            </span>
          </div>
          <div class="p-4 font-mono text-sm space-y-2">
            <p className="text-green-500 font-bold">$ Student</p>
            <p className="font-bold">
              Md Shajalal - Computer Science Engineer
            </p>
            <p className="font-bold">
              BSc in CSE, Green University of Bangladesh
            </p>
            <p className="text-green-500 font-bold">$ skills --tech</p>
            <p className="font-bold">
              React.js • Next.js • Python • Java • Node.js • Tailwind
            </p>
            <p className=" text-green-500 font-bold">$ achievements --recent</p>
            <p  className="font-bold">
              {" "}
              3rd Position - Intra University Programming Contest
            </p>
            <p  className="font-bold">
              {" "}
              Excellence Academic Award (Multiple)
            </p>
            <p   class="animate-pulse text-green-500 font-bold text-2xl">
              $ <span  className="animate-blink-cursor font-bold">_</span>
            </p>
          </div>
        </div>
      </div>
       </div>
    </div>
  );
};

export default About;
