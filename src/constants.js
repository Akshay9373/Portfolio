// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';

import javaLogo from './assets/tech_logo/java.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Education Section Logo's

import collegelogo from './assets/education_logo/college1.png';


// Project Section Logo's
import E_commerceLogo from './assets/work_logo/E-commerce.png';

import portfoliologo from './assets/work_logo/portfolio.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
     
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      
    ],
  },
  
  {
    title: 'Languages',
    skills: [
     
      { name: 'Java', logo: javaLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      
      /*{ name: 'Netlify', logo: netlifyLogo },*/
      
    ],
  },
];

 
  export const education = [
   
    {
      id: 1,
      image: collegelogo,
      school: "Prof.Ramkrishna More college, Akurdi",
      date: "2020 - 2024",
      grade:"7.24",
      desc: "I completed my Bachelor's degree in computer science(BCS) from Prof.Ramkrishna more college , Akurdi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Prof.Ramkrishna more  College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      
      school: "Br.T.K.Shendage vidyalay,Ped",
      date: "2019-2020",
      grade: "60.92%",
      desc: "I completed my class 12 education from Br.T.K.shendge mahavidyalay,ped. under the Maharashtra State board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Maharashtra state board(XII) - PCM ",
    },
    {
      id: 3,
      
      school: "Yashwantrao chavan madhyamik vidyalay,Ghoti b.k",
      date: "2016 - March 2017",
      grade: "70.40%",
      desc: "I completed my class 10 education from Yashwantrao chavan madhyamik vidyalay , Ghoti Bk. under the Maharashtra State board, where I studied Science with Computer.",
      degree: "Maharashtra state board(X),",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "E-commerce application",
      description:
        "A full-featured online clothing store built to provide a seamless shopping experience for users and robust management tools for administrators. The platform includes a user-friendly interface for browsing and filtering products, a secure shopping cart and checkout process, and an admin dashboard for inventory and order management.",
      image: E_commerceLogo,
      tags: ["HTML", "CSS","Tailwind Css", "JavaScript", "React JS", "API",],
      github: "https://github.com/Akshay9373/E-Commerce-Application",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Personal Portfolio",
      description:"A personal portfolio website built with React to showcase my projects, skills, and professional experience in a modern, responsive design.",

       image:portfoliologo, 
      tags: ["React JS","HTML", "CSS", "JavaScript","Tailwind Css"],
      github: "https://github.com/codingmastr/CSPrep",
      webapp: "https://csprep.netlify.app/",
    },
   
  ];  