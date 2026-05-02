import React from "react";
import { Landmark } from "lucide-react";
import { CalendarDays } from "lucide-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Education = () => {
  return (
    <div className="mr-28 ml-28 mb-20">
      <div class="text-center mb-12 mt-20">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Academic{" "}
          <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>
        <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        <p
          class="mt-4 max-w-2xl mx-auto"
          className="color: var(--color-muted);"
        >
          My educational background and academic achievements that shaped my
          technical foundation.
        </p>
      </div>
      <div class="flex justify-center gap-4 mb-10 ">
        <button class="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
          {/* <i class="fas fa-university mr-2"></i> */}
          <div className="flex justify-between gap-3">
            <div>
              <Landmark />
            </div>
            <p> University</p>
          </div>
        </button>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          class="rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          className="background-color: var(--surface); border: 1px solid var(--color-border);"
        >
          <div className=" border-1 rounded-2xl rounded-t-2xl">
            <div className="h-2  bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-full"></div>
            <div class="p-6 ">
              <div class="flex items-start gap-4 mb-4 ">
                <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mt-5">
                  <i className=" text-white text-2xl font-bold">
                    {" "}
                    <Landmark />
                  </i>
                </div>
                <div class="flex-1">
                  <h3 className="font-bold text-2xl">
                    Bachelor of Science in Computer Science &amp; Engineering
                  </h3>
                  <p className="font-black text-sm text-blue-600">
                    Green University of Bangladesh
                  </p>
                  <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>
              <div class="space-y-3 mt-4">
                <div class="flex items-center gap-2">
                  <i className="  text-blue-500 w-5">
                    {" "}
                    <CalendarDays />
                  </i>
                  <span className="font-mono text-sm">
                    September, 2022 - September 2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <i className=" fa-solid fa-star text-yellow-500 w-5"></i>
                  <span class="font-semibold">CGPA: 2.87/4.00</span>
                </div>
              </div>
              <div class="mt-6">
                <h4 class="font-bold  mb-3 flex items-center gap-2">
                  <i class="fas fa-trophy text-yellow-500"></i>Key Achievements
                </h4>
                <ul class="space-y-2">
                  <li
                    class="flex items-start gap-2 text-sm"
                    className="color: var(--color-muted);"
                  >
                    <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Excellence Academic Award (Multiple semesters)</span>
                  </li>
                  <li
                    class="flex items-start gap-2 text-sm"
                    className="color: var(--color-muted);"
                  >
                    <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>Dean's List Award - 3 consecutive semesters</span>
                  </li>
                  <li
                    class="flex items-start gap-2 text-sm"
                    className="color: var(--color-muted);"
                  >
                    <i class="fas fa-check-circle text-green-500 mt-0.5"></i>
                    <span>
                      3rd Position - Intra University Programming Contest 2023
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
          <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h3 class="font-bold text-gray-800 flex items-center gap-2">
              <i class="fas fa-book-open text-blue-600"></i>Relevant Coursework
            </h3>
          </div>
          <div class="p-6 h-48">
            <div class="grid grid-cols-2 gap-3">
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Data Structures &amp; Algorithms
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: B+</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Object Oriented Programming
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: B</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Database Management Systems
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: A-</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Operating Systems
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: A-</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Software Engineering
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: A-</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Artificial Intelligence
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: B+</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Computer Networks
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: B+</p>
                </div>
              </div>
              <div class="group">
                <div class="bg-gray-50 rounded-lg p-3 hover:bg-blue-50 transition-all duration-200">
                  <p className="font-mono text-sm text-gray-700 font-medium">
                    Web Technologies
                  </p>
                  <p class="text-xs text-blue-600 mt-1 font-mono">Grade: A-</p>
                </div>
              </div>
            </div>
            <div class="mt-4 bg-gray-900 rounded-lg p-3 font-mono text-xs ">
              <p class="text-green-400">$ echo "academic philosophy"</p>
              <p class="text-gray-300 mt-1">
                "Continuous learning &amp; practical application of theoretical
                concepts."
              </p>
              <p class="text-blue-400 mt-1">$ _</p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="mt-10 ">
          <div class="flex justify-center gap-4 mb-10 ">
            <button class="px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
              {/* <i class="fas fa-university mr-2"></i> */}
              <div className="flex justify-between gap-3">
                <div>
                  <Landmark />
                </div>
                <p> College</p>
              </div>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className=" border-1 rounded-2xl rounded-t-2xl justify-center shadow-2xl shadow-cyan-700">
              <div className="h-2  bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-full"></div>
              <div class="p-6 w-[600px] justify-center items-center">
                <div class="flex items-start gap-4 mb-4 ">
                  <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mt-2">
                    <i className=" text-white text-2xl font-bold">
                      {" "}
                      <Landmark />
                    </i>
                  </div>
                  <div class="flex-1">
                    <h3 className="font-bold text-2xl">
                      National Model &amp; College
                    </h3>
                    <p className="font-black text-2xl text-blue-600">Science</p>
                    <p className="text-gray-400 text-sm">
                      {" "}
                      Noakhali, Chittagong, Bangladesh
                    </p>
                  </div>
                </div>
                <div class="space-y-3 mt-4">
                  <div class="flex items-center gap-2">
                    <i className="  text-blue-500 w-5">
                      {" "}
                      <CalendarDays />
                    </i>
                    <span className="font-mono text-sm">2021</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className=" fa-solid fa-star text-yellow-500 w-5"></i>
                    <span class="font-semibold">GPA: 4.00/5.00</span>
                  </div>
                </div>
              </div>
              <div className="text-center -mr-80">
                <a
                  className=" mr-40 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition "
                  href="https://drive.google.com/file/d/1QI3IeLWxHDvHjswFxLpQfBExL7iS4iId/view?usp=sharing"
                >
                  <p className="font-bold">
                    Higher Secondary Certificate
                    <i class="fa-solid fa-download"></i>
                  </p>
                </a>
              </div>
            </div>

            {/* <a
               
               className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition h-15"
               
              href="https://drive.google.com/file/d/1QI3IeLWxHDvHjswFxLpQfBExL7iS4iId/view?usp=sharing"
            >
               <p className="font-bold">Higher Secondary Certificate
                 <i class="fa-solid fa-download"></i>
               </p>
            </a>   */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
