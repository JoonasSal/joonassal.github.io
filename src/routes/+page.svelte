<script>
  // You can add your personal information here
  const personalInfo = {
    name: "Joonas Salmela",
    title: "Aspiring Developer",
    description: "I'm currently in my third year of studies for a Bachelor of Engineering in Information Technology, exploring software development and indulging my passion for all things tech. I also love games, books, and bringing a dash of quirky humor wherever I go."
  };

  let showMyShowMoListDetails = false;
  let showHuiputinDetails = false;

  const myShowMoListDetails = {
    techStack: [
      // Frontend
      "React",
      "React Router",
      "CSS",
      "Preact Signals",
      // Backend
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT Authentication",
      // APIs
      "TMDB API",
      "Finnkino API",
      // Testing
      "Jest",
      "React Testing Library",
      "Chai",
      "Mocha",
      // Tools & Libraries
      "Axios",
      "Bcrypt",
      "Cors",
      "dotenv"
    ],
    learnings: [
      "Full-stack development with React and Node.js ecosystem",
      "Database design and PostgreSQL implementation",
      "RESTful API development and integration with external APIs",
      "User authentication and security best practices (JWT, Bcrypt)",
      "Test-driven development using multiple testing frameworks",
      "Agile team collaboration and Git workflow",
      "Project management and documentation practices",
      "Responsive web design and user experience considerations",
      "State management and session handling",
      "Error handling and loading state management"
    ]
  };

  const huiputinDetails = {
    techStack: [
      // Frontend & Mobile
      "React Native",
      "Expo",
      "React Native ReAnimated",
      "React Native Gesture Handler",
      // Backend & Services
      "Firebase Authentication",
      "Firebase Firestore",
      "Firebase Cloud Storage",
      // UI & Graphics
      "SVG",
      "Expo Camera",
      // Development
      "Expo CLI",
      "Expo Go",
      "Expo Build Service"
    ],
    learnings: [
      "Mobile app development with React Native and Expo",
      "Firebase ecosystem integration and real-time data handling",
      "Complex gesture handling and animations in mobile apps",
      "SVG manipulation for interactive map and drawing features",
      "Camera integration and image processing",
      "User authentication and file storage in Firebase",
      "Mobile-specific UI/UX considerations",
      "Theme implementation and state management",
      "Collaborative development in a mobile project",
      "Mobile app deployment and build process"
    ]
  };
</script>

<!-- Hero Section -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
  <div class="container">
    <div class="max-w-4xl mx-auto text-center">
      <div class="mb-8 flex justify-center">
        <img 
          src="/profilepic.png" 
          alt="Joonas Salmela" 
          class="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
        />
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold mb-6">{personalInfo.name}</h1>
      <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8">{personalInfo.title}</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">{personalInfo.description}</p>
      <div class="space-x-4">
        <a href="https://github.com/JoonasSal" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
           GitHub
        </a>
        <a href="https://linkedin.com/in/joonas-salmela-6a8306346" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn bg-blue-600 text-white hover:bg-blue-700">
           LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="section">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
    <div class="max-w-3xl mx-auto prose dark:prose-invert">
      <p>
        My journey in technology began in elementary school when I built my first computer. 
        Over the years, my enthusiasm and curiosity for computing have only grown, 
        and I've consistently followed the latest advancements in the field. I decided to deepen my 
        knowledge by studying a Bachelor of Engineering in Information Technology, allowing me to 
        combine my passion for tech with practical, real-world projects. My dream 
        is to work on cutting-edge technology initiatives, pushing myself to learn and evolve every day.
      </p>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section id="projects" class="section bg-gray-100 dark:bg-gray-800">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- HuiputinPaivakirja Project Card -->
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
        <div class="relative overflow-hidden group">
          <img 
            src="/huiputinmashup.png" 
            alt="HuiputinPaivakirja app preview showing different screens" 
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex-grow">
            <h3 class="text-xl font-bold mb-2">HuiputinPaivakirja</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React Native</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Firebase</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Expo</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              A mobile application built using React Native and Firebase services for bouldering
              enthusiasts. Features include interactive climbing hall maps, route tracking, grade voting, and route management. The app allows
              climbers to log their progress, create and share routes, and engage with the climbing community at OKK (Oulu Climbing Centre). 
              Developed collaboratively in a team of four at Oulu University of Applied Sciences.
            </p>
          </div>
          <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
            <a href="https://github.com/HuipuntinPaivakirja/HuiputinPaivakirja" 
               class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
              GitHub
            </a>
            <button
              on:click={() => showHuiputinDetails = true}
              class="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">
              Details
            </button>
          </div>
        </div>
      </div>

      <!-- MyShowMoList Project Card -->
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
        <div class="relative overflow-hidden group">
          <img 
            src="/myshowmolist-image.png" 
            alt="MyShowMoList web application preview" 
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex-grow">
            <h3 class="text-xl font-bold mb-2">MyShowMoList</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Node.js</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">PostgreSQL</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              A comprehensive full-stack web application for movie and TV show enthusiasts. Features include user authentication, 
              advanced search with filtering, personalized watchlists, group creation for shared interests, and real-time Finnkino 
              showtime integration. Built with React, Node.js, and PostgreSQL, emphasizing modern development practices and user experience.
              Developed collaboratively in a team of five at Oulu University of Applied Sciences.
            </p>
          </div>
          <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
            <a href="https://github.com/TVTKMO22-WP-GROUP-13/TVTKMO23-WP-GROUP-13" 
               class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
              GitHub
            </a>
            <button
              on:click={() => showMyShowMoListDetails = true}
              class="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">
              Details
            </button>
          </div>
        </div>
      </div>

      <!-- Portfolio Website Project Card -->
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
        <div class="relative overflow-hidden group">
          <img 
            src="/portfolio-header.png" 
            alt="Portfolio website header showing dark theme" 
            class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <div class="flex-grow">
            <h3 class="text-xl font-bold mb-2">Portfolio Website</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">SvelteKit</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">TailwindCSS</span>
              <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">GitHub Actions</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              A modern, responsive portfolio website built with SvelteKit and TailwindCSS.
              Features include automated build and deploy pipeline with GitHub Actions, project showcase section, and responsive design
              that works seamlessly across all devices.
            </p>
          </div>
          <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600">
            <a href="https://github.com/JoonasSal/joonassal.github.io" 
               class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">Skills</h2>
    
    <div class="grid md:grid-cols-3 gap-8">
      <!-- Coding Languages -->
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-6">Coding</h3>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
          <li>JavaScript</li>
          <li>React</li>
          <li>React Native</li>
          <li>Kotlin</li>
          <li>C++</li>
          <li>Python</li>
        </ul>
      </div>

      <!-- Tools & Technologies -->
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-6">Tools & Technologies</h3>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
          <li>Node.js</li>
          <li>Firebase</li>
          <li>Docker</li>
          <li>Proxmox</li>
          <li>Git</li>
          <li>MySQL</li>
        </ul>
      </div>

      <!-- Soft Skills -->
      <div class="text-center">
        <h3 class="text-2xl font-bold mb-6">Soft Skills</h3>
        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
          <li>Teamwork</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Stress Management</li>
          <li>Flexibility</li>
          <li>Project Management</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Contact Information Section (aiempi Links section) -->
<section id="contact" class="section bg-gray-100 dark:bg-gray-800">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">Contact Information</h2>
    <div class="max-w-xl mx-auto flex flex-col items-center space-y-6">
      <a href="mailto:joosal@outlook.com" 
         class="text-2xl hover:text-blue-600 transition-colors">
        joosal@outlook.com
      </a>
      <a href="tel:+358445003952" 
         class="text-2xl hover:text-blue-600 transition-colors">
        +358 44 500 3952
      </a>
    </div>
  </div>
</section>

<!-- Modal -->
{#if showMyShowMoListDetails}
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold">MyShowMoList Details</h3>
          <button
            on:click={() => showMyShowMoListDetails = false}
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close details"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="text-xl font-semibold mb-3">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {#each myShowMoListDetails.techStack as tech}
                <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h4 class="text-xl font-semibold mb-3">What I Learned</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {#each myShowMoListDetails.learnings as learning}
                <li>{learning}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<!-- HuiputinPaivakirja Modal -->
{#if showHuiputinDetails}
  <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div class="p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-2xl font-bold">HuiputinPaivakirja Details</h3>
          <button
            on:click={() => showHuiputinDetails = false}
            class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close details"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="text-xl font-semibold mb-3">Tech Stack</h4>
            <div class="flex flex-wrap gap-2">
              {#each huiputinDetails.techStack as tech}
                <span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700">
                  {tech}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h4 class="text-xl font-semibold mb-3">What I Learned</h4>
            <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {#each huiputinDetails.learnings as learning}
                <li>{learning}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
