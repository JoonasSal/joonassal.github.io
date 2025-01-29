import{e as z,a as D,t as R,s as L}from"../chunks/disclose-version.DtOBKf6R.js";import"../chunks/legacy.Da7S8xlV.js";import{i as V,s as ie,v as Me,w as Ce,j as Ie,h as Pe,x as Ee,y as he,H as De,k as ue,l as ne,o as ae,z as Re,I as se,m as ye,n as fe,p as Le,A as be,B as Ne,C as Fe,D as He,F as Be,G as Ge,J as Qe,K as Je,L as me,M as Oe,N as Ue,O as We,P as Ke,Q as Ve,R as K,g as N,S as a,T as s,V as e,W as ze,X,Y as oe}from"../chunks/runtime.A6N7VKQc.js";import{i as le}from"../chunks/if.DycsJmNG.js";function Y(c,t){return t}function Xe(c,t,r,v){for(var m=[],p=t.length,g=0;g<p;g++)Fe(t[g].e,m,!0);var f=p>0&&m.length===0&&r!==null;if(f){var x=r.parentNode;He(x),x.append(r),v.clear(),O(c,t[0].prev,t[p-1].next)}Be(m,()=>{for(var u=0;u<p;u++){var h=t[u];f||(v.delete(h.k),O(c,h.prev,h.next)),Ge(h.e,!f)}})}function q(c,t,r,v,m,p=null){var g=c,f={flags:t,items:new Map,first:null};{var x=c;g=V?ie(Me(x)):x.appendChild(Ce())}V&&Ie();var u=null,h=!1;Pe(()=>{var i=r(),b=Ee(i)?i:i==null?[]:he(i),n=b.length;if(h&&n===0)return;h=n===0;let o=!1;if(V){var k=g.data===De;k!==(n===0)&&(g=ue(),ie(g),ne(!1),o=!0)}if(V){for(var P=null,w,l=0;l<n;l++){if(ae.nodeType===8&&ae.data===Re){g=ae,o=!0,ne(!1);break}var y=b[l],U=v(y,l);w=ke(ae,f,P,null,y,U,l,m,t),f.items.set(U,w),P=w}n>0&&ie(ue())}if(!V){var E=Qe;Ye(b,f,g,m,t,(E.f&se)!==0,v)}p!==null&&(n===0?u?ye(u):u=fe(()=>p(g)):u!==null&&Le(u,()=>{u=null})),o&&ne(!0),r()}),V&&(g=ae)}function Ye(c,t,r,v,m,p,g,f){var x=c.length,u=t.items,h=t.first,i=h,b,n=null,o=[],k=[],P,w,l,y;for(y=0;y<x;y+=1){if(P=c[y],w=g(P,y),l=u.get(w),l===void 0){var U=i?i.e.nodes_start:r;n=ke(U,t,n,n===null?t.first:n.next,P,w,y,v,m),u.set(w,n),o=[],k=[],i=n.next;continue}if(qe(l,P,y),l.e.f&se&&ye(l.e),l!==i){if(b!==void 0&&b.has(l)){if(o.length<k.length){var E=k[0],_;n=E.prev;var Z=o[0],$=o[o.length-1];for(_=0;_<o.length;_+=1)xe(o[_],E,r);for(_=0;_<k.length;_+=1)b.delete(k[_]);O(t,Z.prev,$.next),O(t,n,Z),O(t,$,E),i=E,n=$,y-=1,o=[],k=[]}else b.delete(l),xe(l,i,r),O(t,l.prev,l.next),O(t,l,n===null?t.first:n.next),O(t,n,l),n=l;continue}for(o=[],k=[];i!==null&&i.k!==w;)(p||!(i.e.f&se))&&(b??(b=new Set)).add(i),k.push(i),i=i.next;if(i===null)continue;l=i}o.push(l),n=l,i=l.next}if(i!==null||b!==void 0){for(var W=b===void 0?[]:he(b);i!==null;)(p||!(i.e.f&se))&&W.push(i),i=i.next;var te=W.length;if(te>0){var re=x===0?r:null;Xe(t,W,re,u)}}be.first=t.first&&t.first.e,be.last=n&&n.e}function qe(c,t,r,v){Ne(c.v,t),c.i=r}function ke(c,t,r,v,m,p,g,f,x,u){var h=(x&Ue)!==0,i=(x&We)===0,b=h?i?Je(m):me(m):m,n=x&Oe?me(g):g,o={i:n,v:b,k:p,a:null,e:null,prev:r,next:v};try{return o.e=fe(()=>f(c,b,n),V),o.e.prev=r&&r.e,o.e.next=v&&v.e,r===null?t.first=o:(r.next=o,r.e.next=o.e),v!==null&&(v.prev=o,v.e.prev=o.e),o}finally{}}function xe(c,t,r){for(var v=c.next?c.next.e.nodes_start:r,m=t?t.e.nodes_start:r,p=c.e.nodes_start;p!==v;){var g=Ke(p);m.before(p),p=g}}function O(c,t,r){t===null?c.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}var Ze=R('<span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"> </span>'),$e=R("<li> </li>"),ea=R('<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold">MyShowMoList Details</h3> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close details"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-6"><div><h4 class="text-xl font-semibold mb-3">Tech Stack</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="text-xl font-semibold mb-3">What I Learned</h4> <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"></ul></div></div></div></div></div>'),aa=R('<span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"> </span>'),ta=R("<li> </li>"),ra=R('<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold">HuiputinPaivakirja Details</h3> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close details"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-6"><div><h4 class="text-xl font-semibold mb-3">Tech Stack</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="text-xl font-semibold mb-3">What I Learned</h4> <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"></ul></div></div></div></div></div>'),sa=R('<span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"> </span>'),ia=R("<li> </li>"),na=R('<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold">Bank Automat Details</h3> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close details"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-6"><div><h4 class="text-xl font-semibold mb-3">Tech Stack</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="text-xl font-semibold mb-3">What I Learned</h4> <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"></ul></div></div></div></div></div>'),oa=R(`<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"><div class="container"><div class="max-w-4xl mx-auto text-center"><div class="mb-8 flex justify-center"><img src="/profilepic.png" alt="Joonas Salmela" class="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"></div> <h1 class="text-4xl sm:text-5xl font-bold mb-6"> </h1> <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8"> </h2> <p class="text-lg text-gray-600 dark:text-gray-300 mb-8"> </p> <div class="space-x-4"><a href="https://github.com/JoonasSal" target="_blank" rel="noopener noreferrer" class="btn bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a> <a href="https://linkedin.com/in/joonas-salmela-6a8306346" target="_blank" rel="noopener noreferrer" class="btn bg-blue-600 text-white hover:bg-blue-700">LinkedIn</a></div></div></div></section> <section id="about" class="section"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">About Me</h2> <div class="max-w-3xl mx-auto prose dark:prose-invert"><p>My journey in technology began in elementary school when I built my first computer. 
        Over the years, my enthusiasm and curiosity for computing have only grown, 
        and I've consistently followed the latest advancements in the field. I decided to deepen my 
        knowledge by studying a Bachelor of Engineering in Information Technology, allowing me to 
        combine my passion for tech with practical, real-world projects. My dream 
        is to work on cutting-edge technology initiatives, pushing myself to learn and evolve every day.</p></div></div></section> <section id="projects" class="section bg-gray-100 dark:bg-gray-800"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">Featured Projects</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"><div class="relative overflow-hidden group"><img src="/huiputinmashup.png" alt="HuiputinPaivakirja app preview showing different screens" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div></div> <div class="p-6 flex flex-col flex-grow"><div class="flex-grow"><h3 class="text-xl font-bold mb-2">HuiputinPaivakirja</h3> <div class="flex flex-wrap gap-2 mb-4"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React Native</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Firebase</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Expo</span></div> <p class="text-gray-600 dark:text-gray-300">A mobile application built using React Native and Firebase services for bouldering
              enthusiasts. Features include interactive climbing hall maps, route tracking, grade voting, and route management. The app allows
              climbers to log their progress, create and share routes, and engage with the climbing community at OKK (Oulu Climbing Centre). 
              Developed collaboratively in a team of four at Oulu University of Applied Sciences.</p></div> <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600"><a href="https://github.com/HuipuntinPaivakirja/HuiputinPaivakirja" class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a> <button class="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">Details</button></div></div></div> <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"><div class="relative overflow-hidden group"><img src="/myshowmolist-image.png" alt="MyShowMoList web application preview" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div></div> <div class="p-6 flex flex-col flex-grow"><div class="flex-grow"><h3 class="text-xl font-bold mb-2">MyShowMoList</h3> <div class="flex flex-wrap gap-2 mb-4"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Node.js</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">PostgreSQL</span></div> <p class="text-gray-600 dark:text-gray-300">A comprehensive full-stack web application for movie and TV show enthusiasts. Features include user authentication, 
              advanced search with filtering, personalized watchlists, group creation for shared interests, and real-time Finnkino 
              showtime integration. Built with React, Node.js, and PostgreSQL, emphasizing modern development practices and user experience.
              Developed collaboratively in a team of five at Oulu University of Applied Sciences.</p></div> <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600"><a href="https://github.com/TVTKMO22-WP-GROUP-13/TVTKMO23-WP-GROUP-13" class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a> <button class="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">Details</button></div></div></div> <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"><div class="relative overflow-hidden group"><img src="/portfolio-header.png" alt="Portfolio website header showing dark theme" class="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div></div> <div class="p-6 flex flex-col flex-grow"><div class="flex-grow"><h3 class="text-xl font-bold mb-2">Portfolio Website</h3> <div class="flex flex-wrap gap-2 mb-4"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">SvelteKit</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">TailwindCSS</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">GitHub Actions</span></div> <p class="text-gray-600 dark:text-gray-300">A modern, responsive portfolio website built with SvelteKit and TailwindCSS.
              Features include automated build and deploy pipeline with GitHub Actions, project showcase section, and responsive design
              that works seamlessly across all devices.</p></div> <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600"><a href="https://github.com/JoonasSal/joonassal.github.io" class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a></div></div></div> <div class="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col"><div class="relative overflow-hidden group"><img src="/bank-automat-image.png" alt="Bank Automat desktop application preview" class="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div></div> <div class="p-6 flex flex-col flex-grow"><div class="flex-grow"><h3 class="text-xl font-bold mb-2">Bank Automat</h3> <div class="flex flex-wrap gap-2 mb-4"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">C++</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Node.js</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">MySQL</span></div> <p class="text-gray-600 dark:text-gray-300">A comprehensive banking system featuring a Qt-based desktop application and Node.js backend. 
              The system includes secure user authentication, account management, card operations, and transaction handling. 
              Built with C++ and Qt Framework for the frontend, Node.js and MySQL for the backend, utilizing stored procedures 
              for complex banking operations and JWT for secure authentication. Developed collaboratively in a team of five at Oulu University of Applied Sciences.</p></div> <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600"><a href="https://github.com/JoonasSal/bank-automat" class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a> <button class="btn btn-sm bg-blue-600 text-white hover:bg-blue-700">Details</button></div></div></div></div></div></section> <section id="skills" class="section"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">Skills</h2> <div class="grid md:grid-cols-3 gap-8"><div class="text-center"><h3 class="text-2xl font-bold mb-6">Programming Languages & Frameworks</h3> <div class="flex flex-wrap justify-center gap-2"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">JavaScript</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">React Native</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">C++</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Node.js</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">SvelteKit</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Express.js</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Qt Framework</span></div></div> <div class="text-center"><h3 class="text-2xl font-bold mb-6">Tools & Technologies</h3> <div class="flex flex-wrap justify-center gap-2"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">MySQL</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">PostgreSQL</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Firebase</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Git</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">TailwindCSS</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">JWT Auth</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">REST APIs</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">GitHub Actions</span></div></div> <div class="text-center"><h3 class="text-2xl font-bold mb-6">Professional Skills</h3> <div class="flex flex-wrap justify-center gap-2"><span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Agile Development</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Test-Driven Development</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">UI/UX Design</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Project Management</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Team Collaboration</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Problem Solving</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">Documentation</span> <span class="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-sm rounded-md">System Architecture</span></div></div></div></div></section> <section id="contact" class="section bg-gray-100 dark:bg-gray-800"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">Contact Information</h2> <div class="max-w-xl mx-auto flex flex-col items-center space-y-6"><a href="mailto:joosal@outlook.com" class="text-2xl hover:text-blue-600 transition-colors">joosal@outlook.com</a> <a href="tel:+358445003952" class="text-2xl hover:text-blue-600 transition-colors">+358 44 500 3952</a></div></div></section> <!> <!> <!>`,1);function va(c){const t={name:"Joonas Salmela",title:"Aspiring Developer",description:"I'm currently in my third year of studies for a Bachelor of Engineering in Information Technology, exploring software development and indulging my passion for all things tech. I also love games, books, and bringing a dash of quirky humor wherever I go."};let r=oe(!1),v=oe(!1),m=oe(!1);const p={techStack:["React","React Router","CSS","Preact Signals","Node.js","Express.js","PostgreSQL","JWT Authentication","TMDB API","Finnkino API","Jest","React Testing Library","Chai","Mocha","Axios","Bcrypt","Cors","dotenv"],learnings:["Full-stack development with React and Node.js ecosystem","Database design and PostgreSQL implementation","RESTful API development and integration with external APIs","User authentication and security best practices (JWT, Bcrypt)","Test-driven development using multiple testing frameworks","Agile team collaboration and Git workflow","Project management and documentation practices","Responsive web design and user experience considerations","State management and session handling","Error handling and loading state management"]},g={techStack:["React Native","Expo","React Native ReAnimated","React Native Gesture Handler","Firebase Authentication","Firebase Firestore","Firebase Cloud Storage","SVG","Expo Camera","Expo CLI","Expo Go","Expo Build Service"],learnings:["Mobile app development with React Native and Expo","Firebase ecosystem integration and real-time data handling","Complex gesture handling and animations in mobile apps","SVG manipulation for interactive map and drawing features","Camera integration and image processing","User authentication and file storage in Firebase","Mobile-specific UI/UX considerations","Theme implementation and state management","Collaborative development in a mobile project","Mobile app deployment and build process"]},f={techStack:["Node.js","Express.js","MySQL","JWT Authentication","bcryptjs","Morgan","C++","Qt Framework","Postman","cors","dotenv"],learnings:["Full-stack development with C++ and Node.js","Desktop application development with Qt Framework","RESTful API design and implementation","Database design and stored procedures in MySQL","Secure authentication and PIN handling","Cross-platform development considerations","API testing with Postman","Transaction management and data integrity","Error handling in distributed systems","Multi-component system architecture"]};var x=oa(),u=Ve(x),h=a(u),i=a(h),b=s(a(i),2),n=a(b,!0);e(b);var o=s(b,2),k=a(o,!0);e(o);var P=s(o,2),w=a(P,!0);e(P),ze(2),e(i),e(h),e(u);var l=s(u,4),y=a(l),U=s(a(y),2),E=a(U),_=s(a(E),2),Z=s(a(_),2),$=s(a(Z),2);e(Z),e(_),e(E);var W=s(E,2),te=s(a(W),2),re=s(a(te),2),we=s(a(re),2);e(re),e(te),e(W);var de=s(W,4),ce=s(a(de),2),ge=s(a(ce),2),_e=s(a(ge),2);e(ge),e(ce),e(de),e(U),e(y),e(l);var ve=s(l,6);{var Se=S=>{var j=ea(),F=a(j),H=a(F),T=a(H),ee=s(a(T),2);e(T);var B=s(T,2),A=a(B),G=s(a(A),2);q(G,5,()=>p.techStack,Y,(M,C)=>{var d=Ze(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(G),e(A);var Q=s(A,2),J=s(a(Q),2);q(J,5,()=>p.learnings,Y,(M,C)=>{var d=$e(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(J),e(Q),e(B),e(H),e(F),e(j),z("click",ee,()=>X(r,!1)),D(S,j)};le(ve,S=>{N(r)&&S(Se)})}var pe=s(ve,2);{var je=S=>{var j=ra(),F=a(j),H=a(F),T=a(H),ee=s(a(T),2);e(T);var B=s(T,2),A=a(B),G=s(a(A),2);q(G,5,()=>g.techStack,Y,(M,C)=>{var d=aa(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(G),e(A);var Q=s(A,2),J=s(a(Q),2);q(J,5,()=>g.learnings,Y,(M,C)=>{var d=ta(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(J),e(Q),e(B),e(H),e(F),e(j),z("click",ee,()=>X(v,!1)),D(S,j)};le(pe,S=>{N(v)&&S(je)})}var Te=s(pe,2);{var Ae=S=>{var j=na(),F=a(j),H=a(F),T=a(H),ee=s(a(T),2);e(T);var B=s(T,2),A=a(B),G=s(a(A),2);q(G,5,()=>f.techStack,Y,(M,C)=>{var d=sa(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(G),e(A);var Q=s(A,2),J=s(a(Q),2);q(J,5,()=>f.learnings,Y,(M,C)=>{var d=ia(),I=a(d,!0);e(d),K(()=>L(I,N(C))),D(M,d)}),e(J),e(Q),e(B),e(H),e(F),e(j),z("click",ee,()=>X(m,!1)),D(S,j)};le(Te,S=>{N(m)&&S(Ae)})}K(()=>{L(n,t.name),L(k,t.title),L(w,t.description)}),z("click",$,()=>X(v,!0)),z("click",we,()=>X(r,!0)),z("click",_e,()=>X(m,!0)),D(c,x)}export{va as component};
