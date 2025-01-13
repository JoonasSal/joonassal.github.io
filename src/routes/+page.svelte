<script>
  // You can add your personal information here
  const personalInfo = {
    name: "Joonas Salmela",
    title: "Aspiring Developer",
    description: "I'm currently in my third year of studies for a Bachelor of Engineering in Information Technology, exploring software development and indulging my passion for all things tech. I also love games, books, and bringing a dash of quirky humor wherever I go."
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
           class="btn bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
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
        and I’ve consistently followed the latest advancements in the field. I decided to deepen my 
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
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div class="relative overflow-hidden group">
          <img 
            src="/huiputinmashup.png" 
            alt="HuiputinPaivakirja app preview showing different screens" 
            class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">HuiputinPaivakirja</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">This is a mobile application built using React Native and Google Firebase services. The application is a bouldering tracking tool tailored currently for a single local climbing hall at OKK (Oulun kiipeilykeskus; Oulu climbing centre). It allows users to log and track their climbs, create and manage climbing routes, and engage with other users through voting and content management.</p>
          <div class="flex space-x-4">
            <a href="https://github.com/HuipuntinPaivakirja/HuiputinPaivakirja" 
               class="text-blue-600 hover:text-blue-700 transition-colors duration-300">GitHub</a>
          </div>
        </div>
      </div>

      <!-- Portfolio Website Project Card -->
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div class="relative overflow-hidden group">
          <img 
            src="/portfolio-header.png" 
            alt="Portfolio website header showing dark theme" 
            class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110" 
          />
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">Portfolio Website</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">A modern, responsive portfolio website built with SvelteKit and TailwindCSS. Features include automated build and deploy pipeline with GitHub Actions, skills visualization with progress bars, project showcase section, and responsive design that works seamlessly across all devices.</p>
          <div class="flex space-x-4">
            <a href="https://github.com/JoonasSal/joonassal.github.io" 
               class="text-blue-600 hover:text-blue-700 transition-colors duration-300">GitHub</a>
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
