const BodyProjects = () => {
  let projects = [
    { 
      id: 1, 
      img: 'assets/projects-1.png', 
      title: "Creanomic 2024 Site", 
      desc: "Designed as a trusted source of information, the Creanomic Site is the official website project that carries everything about Creanomic 2024. Through the site, users can explore the vision and mission of the event, find the full schedule of inspiring sessions, get to know the powerful speakers and gain the latest insights into the creative world and economy. In essence, the website is the digital face and life of the entire Creanomic 2024 event.", 
      tools: ["Figma", "NuxtJS", "TailwindCSS"],
      dad: "100"
    },
    { 
      id: 2, 
      img: 'assets/projects-2.png', 
      title: "Yuwaraja XVI Site", 
      desc: "Yuwaraja Site is an online platform that is a trusted source of information about Yuwaraja and all information about PKKMB for new students. This site is designed to provide easy access to Yuwaraja's profile, task explanations, deadlines, and collection mechanisms, so that the entire campus introduction process can run more organised, transparent, and effective for all parties involved.", 
      tools: ["Figma", "NuxtJS", "TailwindCSS"],
      dad: "200"
    },
    {
      id: 3,
      img: 'assets/projects-3.png',
      title: "Ratih Creative Website",
      desc: "Ratih Creative Website is the official digital platform developed by Ratih Creative Production House to professionally present their identity, services, and best works. The website presents complete information about the vision and mission of the production house, the various creative services offered, as well as a portfolio of works that include videography, photography, graphic design, and other creative content projects. In addition, visitors can explore the detailed profiles of each of Ratih Creative's experienced crew members, learn about their backgrounds and expertise, and contact the team for collaboration or project consultation through the contact feature. With a modern, intuitive, and responsive design, Ratih Creative Website aims to provide an engaging browsing experience while making it easier for clients to understand the quality and value offered by Ratih Creative Production House.",
      tools: ["Figma", "ReactJS", "TailwindCSS"],
      dad: "300"
    },
  ];

  return (
    // PROJECTS SECTION
    <div className="projects mt-32 py-10 items-center xl:px-30 px-10 scroll-mt-20" id="projects">
        <h1 className="text-center text-5xl font-bold mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">My Projects</h1>
        <div className="my-10">
          {projects.map((project) => (
            <div key={project.id} className="grid lg:grid-cols-2 grid-cols-1 gap-4 py-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={project.dad}> 
              <div className="mb-6">
                <h1 className="text-3xl/tight font-bold mb-6 text-center lg:text-left">{project.title}</h1>
                <p className="text-base/loose text-justify">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4"> 
                  {project.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="border-zinc-500 bg-zinc-600 px-3 py-1 rounded-md font-semibold">{tool}</span>
                  ))}
                </div>
              </div>
              {project.img && <img src={project.img} alt="Project Doc." className="w-[550px] ml-auto mr-auto" loading="lazy"/>}
            </div>
          ))}
        </div>
    </div>
  );
};

export default BodyProjects;