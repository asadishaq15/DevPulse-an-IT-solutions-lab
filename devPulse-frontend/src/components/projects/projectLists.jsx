// import React, { useState } from 'react';
//  import ProjectCard from './ProjectCard'; // Assuming this is the path to your ProjectCard component
// import HiddenModals from './hiddenModals';
// import Vmarine from '../../../src/pojectImages/Vmarine.jpg';
// import aguaDeLuz from '../../../src/pojectImages/aguaDeLuz.png';
// import todo from '../../../src/pojectImages/todolist.png';

// import './ProjectLists.css'; // Import your external CSS for styling

// const ProjectList = () => {
//   const [projects] = useState([
//     {
//       name: 'Zahrawi Education System',
//       image: Vmarine,
//       button: 'Zahrawi Education System',
//       description: [
//         'A clean website for an Education System.',
//         'Tech Stack: React.js, Node.js, NodeMailer, MongoDB',
//       ],
//       ref: 'https://65435e5984e9a02b6a30f733--magenta-unicorn-93f74e.netlify.app/',
//     },
//     {
//       name: 'PingMeUp Chat App',
//       image: aguaDeLuz,
//       button: 'Chat App',
//       description: ['Designed this Chat App using React.js, SCSS, Firebase Realtime Database'],
//       ref: 'https://657038ba087e714d730c3859--euphonious-tanuki-9837ae.netlify.app/',
//     },
//     {
//       name: 'todolist',
//       image: todo,
//       button: 'todo',
//       description: [
//         'Enhance your day and Develop Productivity by organizing your priorities.',
//         'Tech Stack: React, Firebase, Redux, Tailwind CSS',
//       ],
//       ref: 'https://657038ba087e714d730c3859--euphonious-tanuki-9837ae.netlify.app/',
//     },
//   ]);

//   const showModal = (name) => {
//     const modalBG = document.getElementById('gallery-card');
//     const modal = document.getElementById(name);
//     modalBG.style.display = 'block';
//     modal.style.display = 'block';
//   };

//   return (
//     <div className="row my-5">
//       {projects.map((project, index) => (
//         <ProjectCard key={index} {...project} onClick={() => showModal(project.name)} />
//       ))}
//       <HiddenModals projects={projects} />
//     </div>
//   );
// };

// export default ProjectList;
