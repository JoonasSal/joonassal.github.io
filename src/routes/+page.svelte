<script>
  // You can add your personal information here
  const personalInfo = {
    name: "Joonas Salmela",
    title: "Aspiring Developer",
    description: "I'm currently halfway through my Bachelor of Engineering in Information Technology, exploring full-stack development and indulging my passion for all things tech. I also love games, books, and bringing a dash of quirky humor wherever I go."
  };
</script>

<!-- Hero Section -->
<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
  <div class="container">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl sm:text-5xl font-bold mb-6">{personalInfo.name}</h1>
      <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8">{personalInfo.title}</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">{personalInfo.description}</p>
      <div class="space-x-4">
        <a href="#links" class="btn btn-primary">Links</a>
        <a href="#projects" class="btn bg-gray-200 text-gray-800 hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-100">View Projects</a>
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
        and I’ve consistently followed the latest advancements in the field. I decided to 
        deepen my knowledge by studying Information and Communication Technology engineering, 
        allowing me to combine my passion for tech with practical, real-world projects. My dream 
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
      <!-- Project Card (repeat for each project) -->
      <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg">
        <img src="https://via.placeholder.com/400x300" alt="Project preview" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-bold mb-2">HuiputinPaivakirja</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">This is a mobile application built using React Native and Google Firebase services. The application is a bouldering tracking tool tailored currently for a single local climbing hall at OKK (Oulun kiipeilykeskus; Oulu climbing centre). It allows users to log and track their climbs, create and manage climbing routes, and engage with other users through voting and content management.</p>
          <div class="flex space-x-4">
            <a href="https://github.com/HuipuntinPaivakirja/HuiputinPaivakirja" class="text-blue-600 hover:text-blue-700">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills" class="section">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
    
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Hard Skills -->
      <div>
        <h3 class="text-2xl font-bold mb-6">Technical Skills</h3>
        <div class="space-y-6">
          <!-- Skill Item -->
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">React</span>
              <span class="text-sm text-gray-600">5/5</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div class="h-full bg-blue-600 rounded-full" style="width: 100%"></div>
            </div>
          </div>

          <!-- Skill Item -->
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">Java</span>
              <span class="text-sm text-gray-600">2/5</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div class="h-full bg-blue-600 rounded-full" style="width: 40%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div>
        <h3 class="text-2xl font-bold mb-6">Soft Skills</h3>
        <div class="space-y-6">
          <!-- Skill Item -->
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">Teamwork</span>
              <span class="text-sm text-gray-600">5/5</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div class="h-full bg-blue-600 rounded-full" style="width: 100%"></div>
            </div>
          </div>

          <!-- Skill Item -->
          <div class="flex flex-col space-y-2">
            <div class="flex justify-between">
              <span class="font-medium">Problem Solving</span>
              <span class="text-sm text-gray-600">4/5</span>
            </div>
            <div class="h-2 bg-gray-200 rounded-full">
              <div class="h-full bg-blue-600 rounded-full" style="width: 80%"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Links Section -->
<section id="links" class="section bg-gray-100 dark:bg-gray-800">
  <div class="container">
    <h2 class="text-3xl font-bold text-center mb-12">Links</h2>
    <div class="max-w-xl mx-auto flex flex-col items-center space-y-6">
      <a href="mailto:joosal@outlook.com" 
         class="text-2xl hover:text-blue-600 transition-colors">
        joosal@outlook.com
      </a>
      <div class="flex space-x-8">
        <a href="https://github.com/JoonasSal" 
           class="text-2xl hover:text-blue-600 transition-colors"
           target="_blank" 
           rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/joonas-salmela" 
           class="text-2xl hover:text-blue-600 transition-colors"
           target="_blank" 
           rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </div>
  </div>
</section>
