import { // Change the values of the balls in index.js in the constants folder an search up: const technologies
    mobile, 
    backend,
    creator,
    web,
    javascript, // make sure to import your constants for the balls like here
    typescript, // Remember they are from ../assets so see if they exist there 
    html,
    css, 
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets"; // Remember they are from ../assets so see if they exist there 
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Security Architect",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company_name: "Styl. AI",
      icon: "./src/constants/stylapp.png",
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "Developing a seamless onboarding process for improved company integration.",
        "Manipulating image pixels with OpenPose, YOLO, SSD, to isolate clothing from humans and backgrounds.",
        "Designing an interactive user experience for virtual clothing try-ons.",
      ],
    },
    {
      title: "Cybersecurity Intern",
      company_name: "New Jersey Cybersecurity and Communications Integration Cell",
      icon: "https://www.njohsp.gov/home/showpublishedimage/904/638338783965370000",
      iconBg: "#383E56",
      date: "Jul 2024 - Aug 2024",
      points: [
        "Spearheaded the development of educational materials for online cybersecurity awareness applications used by 2,500+ schools K-12 across New Jersey.",
        "Conducted in-depth research focusing on emerging cybersecurity threats and best practices including social engineering, phishing, and cryptography.",
        "Shadowed professionals in dynamic cybersecurity domains like penetration testing and incident response.",
      ],
    },
    {
      title: "Founder and Leader",
      company_name: "Bridgewater-Raritan High School Hackathon",
      icon: "./src/constants/BRHacks2023.png",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Oct 2023",
      points: [
        "Secured $6,000 in funding through grants and partnerships with Qualcomm, MLH, Women in STEM, Wolfram Alpha, Mathnasium, Code Ninjas, Eye Level, Gold’s Gym, and 20+ local businesses.",
        "Organized a successful event with 200+ attendees and established an annual educational community event.",
        "Led cross-functional teams in website dev, event & logistics, finance, partnerships, and social media marketing.",
        "Directed 20+ workshops involving AI, engineering, neuroscience, DSA, and WiSTEM for youth empowerment.",
      ],
    },
    {
      title: "AI and Business Intern Lead",
      company_name: "Jetson AI",
      icon: "https://static.wixstatic.com/media/14885d_35c17b6084264a46b9951565fa1cedd7~mv2.png/v1/fill/w_330,h_330,al_c/14885d_35c17b6084264a46b9951565fa1cedd7~mv2.png",
      iconBg: "#383E56",
      date: "Mar 2023 - Aug 2023",
      points: [
        "#1 Ranked Intern Spring and Summer Cohort, #1 Ranked Pitch Deck for Future Jetson Feature.",
        "Collaborated with C-Level Executives on 30+ market research interviews to gain strategic insights.",
        "Led the development of a Startup Mentor Python-based API powered by GPT-4, educational articles, and a wealth calculator enhancing financial literacy for 20,000+ daily users.",
        "Enhanced app features, UI/UX, and product strategy, contributing to a 20% boost in brand visibility on social media, 5% increase in app retention rate, and 15% increase in customer satisfaction ratings.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Brings a vital energy and strong work ethic to the team",
      name: "Will Rush",
      designation: "Co-Founder & CEO",
      company: "Jetson",
      image: "https://media.licdn.com/dms/image/v2/C5603AQE_9RwqXHYl4g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1644652007664?e=1733961600&v=beta&t=bpFe67bsoDILnctQe541Wk8B-tTdlM2R9xGFaLMBjNk",
    },
    {
      testimonial:
        "Excellent and of highly professional caliber",
      name: "Patricia Tamburelli",
      designation: "Cyber Training Education Specialist",
      company: "NJCCIC",
      image: "https://cdn.buttercms.com/gLxDCAKCQ1enOUVzP1nQ",
    },
    {
      testimonial:
        "Founded NJ's biggest high school hackathon of 2023",
      name: "Audrey Blumberg",
      designation: "Editor in Chief",
      company: "TAPINTO",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Q1UoJUyldSDysHgotIhiVBEH8FtiWXFfeA&s",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };