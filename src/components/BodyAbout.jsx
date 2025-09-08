const BodyAbout = () => {
  let skills = [
    {
      name: "HTML", 
      img:'assets/skills/html-5_5968267.png', 
      ket: "Language",
      dad: "100"
    },
    {
      name: "CSS", 
      img: 'assets/skills/css-3_5968242.png', 
      ket: "Language",
      dad: "200"
    },
    {
      name: "JS", 
      img: 'assets/skills/js_5968292.png', 
      ket: "Language",
      dad: "300"
    },
    {
      name: "ReactJS", 
      img: 'assets/skills/atom_17433066.png', 
      ket: "Framework",
      dad: "400"
    },
    {
      name: "TailwindCSS", 
      img: 'assets/skills/tailwind.png', 
      ket: "Framework",
      dad: "500"
    },
    {
      name: "Flutter", 
      img: 'assets/skills/flutter.png', 
      ket: "Framework",
      dad: "600"
    },
    {
      name: "PHP", 
      img: 'assets/skills/php.svg', 
      ket: "Language",
      dad: "700"
    },
    {
      name: "Github", 
      img: 'assets/skills/github.svg', 
      ket: "Repository",
      dad: "800"
    },
    {
      name: "Figma", 
      img: 'assets/skills/figma.svg', 
      ket: "Design App",
      dad: "900"
    },
    {
      name: "Laravel", 
      img: 'assets/skills/laravel.svg', 
      ket: "Framework",
      dad: "1000"
    },
    {
      name: "NextJS", 
      img: 'assets/skills/nextjs-icon-dark-background.png', 
      ket: "Framework",
      dad: "1100"
    },
  ]

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    // ABOUT SECTION
    <div className="hero mt-32 py-10 xl:px-30 px-10 scroll-mt-20" id="about">
      <div className="grid xl:grid-cols-2 grid-cols-1 gap-4 mb-6" data-aos="fade-up" data-aos-duration="1000">
        <div>
          <h1 className="md:text-5xl/tight text-3xl/tight font-bold mb-6 text-center xl:text-left">Get To Know About Me</h1>
          <p className="text-base/loose text-justify mb-6">Hello everyone, my name is Muhammad Afif Satrio Wicaksono. I am a Frontend Engineer focusing on Website and Mobile App. I am a student of the Information Technology study at Brawijaya University. Feel free to connect at <u className="text-amber-500 cursor-pointer" onClick={() => openLink("https://www.linkedin.com/in/afifsatrio/")}>LinkedIn</u> and <u className="text-amber-500 cursor-pointer" onClick={() => openLink("https://www.instagram.com/afifsatrio_?igsh=MXdudTcwM3NlMTE3bA==")}>Instagram</u> where I post my daily life and also some of my projects ranging from UI/UX projects to Mobile App projects. I am very open to opportunities to work together where I can upgrade my skills and grow. If you are interested in collaborating with me, contact me at <a href="#contact"><b>Contact.</b></a>
          </p>
          <div className="mt-10 text-center xl:text-left mb-6">
            <a href="/CV Afif Satrio.pdf" download="CV Afif Satrio" className="bg-zinc-600 hover:bg-amber-500 px-6 py-4 rounded-2xl duration-500">Download CV</a>
          </div>
        </div>     
        <img src="assets/profile-picture.webp" alt="hero img" className="w-[500px] xl:block hidden items-center ml-auto px-10" loading="lazy"/>
      </div>
      <div>
        <h1 className="md:text-5xl/tight text-3xl/tight font-bold mt-10 mb-6 text-center xl:text-left" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"> My Skills</h1>
          <div className="skillbox grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {skills.map((skills) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 hover:bg-zinc-600 duration-500 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={skills.dad}>
                <img src={skills.img} alt="Skills Logo" className="w-14 bg-zinc-800 rounded-2xl" />
                <div className="pl-2">
                  <h4 className="font-bold">{skills.name}</h4>
                  <p className="opacity-50">{skills.ket}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
}

export default BodyAbout
