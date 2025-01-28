import{e as Z,a as D,t as F,s as H}from"../chunks/disclose-version.DtOBKf6R.js";import"../chunks/legacy.Da7S8xlV.js";import{i as N,s as se,v as we,w as ke,j as _e,h as Se,x as Te,y as pe,H as Me,k as oe,l as le,o as X,z as je,I as te,m as he,n as be,p as Ie,A as ne,B as Ae,C as Ce,D as Ee,F as Pe,G as Re,J as Le,K as De,L as de,M as He,N as Ne,O as Fe,P as Ge,Q as Oe,R as Y,g as B,S as i,T as n,V as a,W as ce,X as $,Y as ve}from"../chunks/runtime.A6N7VKQc.js";import{i as ge}from"../chunks/if.DycsJmNG.js";function ee(d,e){return e}function Be(d,e,t,v){for(var h=[],g=e.length,c=0;c<g;c++)Ce(e[c].e,h,!0);var y=g>0&&h.length===0&&t!==null;if(y){var b=t.parentNode;Ee(b),b.append(t),v.clear(),M(d,e[0].prev,e[g-1].next)}Pe(h,()=>{for(var p=0;p<g;p++){var f=e[p];y||(v.delete(f.k),M(d,f.prev,f.next)),Re(f.e,!y)}})}function ae(d,e,t,v,h,g=null){var c=d,y={flags:e,items:new Map,first:null};{var b=d;c=N?se(we(b)):b.appendChild(ke())}N&&_e();var p=null,f=!1;Se(()=>{var r=t(),u=Te(r)?r:r==null?[]:pe(r),s=u.length;if(f&&s===0)return;f=s===0;let l=!1;if(N){var w=c.data===Me;w!==(s===0)&&(c=oe(),se(c),le(!1),l=!0)}if(N){for(var _=null,k,o=0;o<s;o++){if(X.nodeType===8&&X.data===je){c=X,l=!0,le(!1);break}var x=u[o],j=v(x,o);k=fe(X,y,_,null,x,j,o,h,e),y.items.set(j,k),_=k}s>0&&se(oe())}if(!N){var T=Le;Je(u,y,c,h,e,(T.f&te)!==0,v)}g!==null&&(s===0?p?he(p):p=be(()=>g(c)):p!==null&&Ie(p,()=>{p=null})),l&&le(!0),t()}),N&&(c=X)}function Je(d,e,t,v,h,g,c,y){var b=d.length,p=e.items,f=e.first,r=f,u,s=null,l=[],w=[],_,k,o,x;for(x=0;x<b;x+=1){if(_=d[x],k=c(_,x),o=p.get(k),o===void 0){var j=r?r.e.nodes_start:t;s=fe(j,e,s,s===null?e.first:s.next,_,k,x,v,h),p.set(k,s),l=[],w=[],r=s.next;continue}if(Ue(o,_,x),o.e.f&te&&he(o.e),o!==r){if(u!==void 0&&u.has(o)){if(l.length<w.length){var T=w[0],S;s=T.prev;var J=l[0],G=l[l.length-1];for(S=0;S<l.length;S+=1)ue(l[S],T,t);for(S=0;S<w.length;S+=1)u.delete(w[S]);M(e,J.prev,G.next),M(e,s,J),M(e,G,T),r=T,s=G,x-=1,l=[],w=[]}else u.delete(o),ue(o,r,t),M(e,o.prev,o.next),M(e,o,s===null?e.first:s.next),M(e,s,o),s=o;continue}for(l=[],w=[];r!==null&&r.k!==k;)(g||!(r.e.f&te))&&(u??(u=new Set)).add(r),w.push(r),r=r.next;if(r===null)continue;o=r}l.push(o),s=o,r=o.next}if(r!==null||u!==void 0){for(var O=u===void 0?[]:pe(u);r!==null;)(g||!(r.e.f&te))&&O.push(r),r=r.next;var ie=O.length;if(ie>0){var q=b===0?t:null;Be(e,O,q,p)}}ne.first=e.first&&e.first.e,ne.last=s&&s.e}function Ue(d,e,t,v){Ae(d.v,e),d.i=t}function fe(d,e,t,v,h,g,c,y,b,p){var f=(b&Ne)!==0,r=(b&Fe)===0,u=f?r?De(h):de(h):h,s=b&He?de(c):c,l={i:s,v:u,k:g,a:null,e:null,prev:t,next:v};try{return l.e=be(()=>y(d,u,s),N),l.e.prev=t&&t.e,l.e.next=v&&v.e,t===null?e.first=l:(t.next=l,t.e.next=l.e),v!==null&&(v.prev=l,v.e.prev=l.e),l}finally{}}function ue(d,e,t){for(var v=d.next?d.next.e.nodes_start:t,h=e?e.e.nodes_start:t,g=d.e.nodes_start;g!==v;){var c=Ge(g);h.before(g),g=c}}function M(d,e,t){e===null?d.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}var Ke=F('<span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"> </span>'),Ve=F("<li> </li>"),We=F('<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold">MyShowMoList Details</h3> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close details"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-6"><div><h4 class="text-xl font-semibold mb-3">Tech Stack</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="text-xl font-semibold mb-3">What I Learned</h4> <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"></ul></div></div></div></div></div>'),Qe=F('<span class="px-3 py-1 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700"> </span>'),ze=F("<li> </li>"),Xe=F('<div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"><div class="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"><div class="p-6"><div class="flex justify-between items-center mb-6"><h3 class="text-2xl font-bold">HuiputinPaivakirja Details</h3> <button class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" aria-label="Close details"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="space-y-6"><div><h4 class="text-xl font-semibold mb-3">Tech Stack</h4> <div class="flex flex-wrap gap-2"></div></div> <div><h4 class="text-xl font-semibold mb-3">What I Learned</h4> <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300"></ul></div></div></div></div></div>'),Ye=F(`<section class="section bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800"><div class="container"><div class="max-w-4xl mx-auto text-center"><div class="mb-8 flex justify-center"><img src="/profilepic.png" alt="Joonas Salmela" class="w-48 h-48 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"></div> <h1 class="text-4xl sm:text-5xl font-bold mb-6"> </h1> <h2 class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8"> </h2> <p class="text-lg text-gray-600 dark:text-gray-300 mb-8"> </p> <div class="space-x-4"><a href="https://github.com/JoonasSal" target="_blank" rel="noopener noreferrer" class="btn bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a> <a href="https://linkedin.com/in/joonas-salmela-6a8306346" target="_blank" rel="noopener noreferrer" class="btn bg-blue-600 text-white hover:bg-blue-700">LinkedIn</a></div></div></div></section> <section id="about" class="section"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">About Me</h2> <div class="max-w-3xl mx-auto prose dark:prose-invert"><p>My journey in technology began in elementary school when I built my first computer. 
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
              that works seamlessly across all devices.</p></div> <div class="flex space-x-4 mt-6 pt-4 border-t border-gray-100 dark:border-gray-600"><a href="https://github.com/JoonasSal/joonassal.github.io" class="btn btn-sm bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">GitHub</a></div></div></div></div></div></section> <section id="skills" class="section"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">Skills</h2> <div class="grid md:grid-cols-3 gap-8"><div class="text-center"><h3 class="text-2xl font-bold mb-6">Coding</h3> <ul class="space-y-3 text-gray-600 dark:text-gray-300"><li>JavaScript</li> <li>React</li> <li>React Native</li> <li>Kotlin</li> <li>C++</li> <li>Python</li></ul></div> <div class="text-center"><h3 class="text-2xl font-bold mb-6">Tools & Technologies</h3> <ul class="space-y-3 text-gray-600 dark:text-gray-300"><li>Node.js</li> <li>Firebase</li> <li>Docker</li> <li>Proxmox</li> <li>Git</li> <li>MySQL</li></ul></div> <div class="text-center"><h3 class="text-2xl font-bold mb-6">Soft Skills</h3> <ul class="space-y-3 text-gray-600 dark:text-gray-300"><li>Teamwork</li> <li>Problem Solving</li> <li>Communication</li> <li>Stress Management</li> <li>Flexibility</li> <li>Project Management</li></ul></div></div></div></section> <section id="contact" class="section bg-gray-100 dark:bg-gray-800"><div class="container"><h2 class="text-3xl font-bold text-center mb-12">Contact Information</h2> <div class="max-w-xl mx-auto flex flex-col items-center space-y-6"><a href="mailto:joosal@outlook.com" class="text-2xl hover:text-blue-600 transition-colors">joosal@outlook.com</a> <a href="tel:+358445003952" class="text-2xl hover:text-blue-600 transition-colors">+358 44 500 3952</a></div></div></section> <!> <!>`,1);function aa(d){const e={name:"Joonas Salmela",title:"Aspiring Developer",description:"I'm currently in my third year of studies for a Bachelor of Engineering in Information Technology, exploring software development and indulging my passion for all things tech. I also love games, books, and bringing a dash of quirky humor wherever I go."};let t=ve(!1),v=ve(!1);const h={techStack:["React","React Router","CSS","Preact Signals","Node.js","Express.js","PostgreSQL","JWT Authentication","TMDB API","Finnkino API","Jest","React Testing Library","Chai","Mocha","Axios","Bcrypt","Cors","dotenv"],learnings:["Full-stack development with React and Node.js ecosystem","Database design and PostgreSQL implementation","RESTful API development and integration with external APIs","User authentication and security best practices (JWT, Bcrypt)","Test-driven development using multiple testing frameworks","Agile team collaboration and Git workflow","Project management and documentation practices","Responsive web design and user experience considerations","State management and session handling","Error handling and loading state management"]},g={techStack:["React Native","Expo","React Native ReAnimated","React Native Gesture Handler","Firebase Authentication","Firebase Firestore","Firebase Cloud Storage","SVG","Expo Camera","Expo CLI","Expo Go","Expo Build Service"],learnings:["Mobile app development with React Native and Expo","Firebase ecosystem integration and real-time data handling","Complex gesture handling and animations in mobile apps","SVG manipulation for interactive map and drawing features","Camera integration and image processing","User authentication and file storage in Firebase","Mobile-specific UI/UX considerations","Theme implementation and state management","Collaborative development in a mobile project","Mobile app deployment and build process"]};var c=Ye(),y=Oe(c),b=i(y),p=i(b),f=n(i(p),2),r=i(f,!0);a(f);var u=n(f,2),s=i(u,!0);a(u);var l=n(u,2),w=i(l,!0);a(l),ce(2),a(p),a(b),a(y);var _=n(y,4),k=i(_),o=n(i(k),2),x=i(o),j=n(i(x),2),T=n(i(j),2),S=n(i(T),2);a(T),a(j),a(x);var J=n(x,2),G=n(i(J),2),O=n(i(G),2),ie=n(i(O),2);a(O),a(G),a(J),ce(2),a(o),a(k),a(_);var q=n(_,6);{var xe=I=>{var A=We(),U=i(A),K=i(U),C=i(K),re=n(i(C),2);a(C);var V=n(C,2),E=i(V),W=n(i(E),2);ae(W,5,()=>h.techStack,ee,(P,R)=>{var m=Ke(),L=i(m,!0);a(m),Y(()=>H(L,B(R))),D(P,m)}),a(W),a(E);var Q=n(E,2),z=n(i(Q),2);ae(z,5,()=>h.learnings,ee,(P,R)=>{var m=Ve(),L=i(m,!0);a(m),Y(()=>H(L,B(R))),D(P,m)}),a(z),a(Q),a(V),a(K),a(U),a(A),Z("click",re,()=>$(t,!1)),D(I,A)};ge(q,I=>{B(t)&&I(xe)})}var me=n(q,2);{var ye=I=>{var A=Xe(),U=i(A),K=i(U),C=i(K),re=n(i(C),2);a(C);var V=n(C,2),E=i(V),W=n(i(E),2);ae(W,5,()=>g.techStack,ee,(P,R)=>{var m=Qe(),L=i(m,!0);a(m),Y(()=>H(L,B(R))),D(P,m)}),a(W),a(E);var Q=n(E,2),z=n(i(Q),2);ae(z,5,()=>g.learnings,ee,(P,R)=>{var m=ze(),L=i(m,!0);a(m),Y(()=>H(L,B(R))),D(P,m)}),a(z),a(Q),a(V),a(K),a(U),a(A),Z("click",re,()=>$(v,!1)),D(I,A)};ge(me,I=>{B(v)&&I(ye)})}Y(()=>{H(r,e.name),H(s,e.title),H(w,e.description)}),Z("click",S,()=>$(v,!0)),Z("click",ie,()=>$(t,!0)),D(d,c)}export{aa as component};
