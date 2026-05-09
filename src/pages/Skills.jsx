import React from "react";

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        class="py-20"
         className="background-color: var(--section-bg);"
      >
        <div class="max-w-6xl mx-auto px-6 md:px-10">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
              Tech{" "}
              <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p
              class="mt-4 max-w-2xl mx-auto"
               className="color: var(--color-muted);"
            >
              Technologies and tools I work with to build scalable, modern
              applications.
            </p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
               className="background-color: var(--surface); border: 1px solid var(--color-border);"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <i class="fas fa-code text-white text-xl"></i>
                </div>
                <h3
                  class="text-xl font-bold"
                   className="color: var(--color-foreground);"
                >
                  Frontend
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  React.js
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Next.js
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  TypeScript
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Tailwind CSS
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  JavaScript (ES6+)
                </span>
              </div>
            </div>
            <div
              class="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
               className="background-color: var(--surface); border: 1px solid var(--color-border);"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <i class="fas fa-server text-white text-xl"></i>
                </div>
                <h3
                  class="text-xl font-bold"
                   className="color: var(--color-foreground);"
                >
                  Backend
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Node.js
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Python
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Java
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Express.js
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                  className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  REST APIs
                </span>
              </div>
            </div>
            <div
              class="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
               className="background-color: var(--surface); border: 1px solid var(--color-border);"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <i class="fas fa-tools text-white text-xl"></i>
                </div>
                <h3
                  class="text-xl font-bold"
                   className="color: var(--color-foreground);"
                >
                  Tools &amp; Others
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Git
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  GitHub
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  VS Code
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Figma
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Postman
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  MongoDB
                </span>
              </div>
            </div>
            <div
              class="rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              className="background-color: var(--surface); border: 1px solid var(--color-border);"
            >
              <div class="flex items-center gap-3 mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <i class="fas fa-brain text-white text-xl"></i>
                </div>
                <h3
                  class="text-xl font-bold"
                   className="color: var(--color-foreground);"
                >
                  Problem Solving
                </h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                  className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Data Structures
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                  className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Algorithms
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                  className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Competitive Programming
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  Codeforces
                </span>
                <span
                  class="px-3 py-1 rounded-full text-sm font-mono transition-all duration-200 cursor-default"
                   className="background-color: var(--surface-2); color: var(--color-muted);"
                >
                  HackerRank
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
