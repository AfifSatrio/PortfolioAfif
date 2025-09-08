import { useState } from "react";

const BodyHome = () => {
  const [active] = useState(false);
  
  let mediaLinks = [
    {
      name: "logo-instagram", 
      link: "https://www.instagram.com/afifsatrio_?igsh=MXdudTcwM3NlMTE3bA==",
    },
    {
      name: "logo-twitter", 
      link: "https://twitter.com/ThisIsLynxx"
    },
    {
      name: "logo-linkedin", 
      link: "https://linkedin.com/in/afifsatrio"
    },
    {
      name: "logo-github", 
      link: "https://github.com/AfifSatrio"
    },
    {
      name: "logo-youtube", 
      link: "https://youtube.com/@muhammadafif4778?si=-x9UzecmQUGpexRN"
    },
  ]

  const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    // HOMEPAGE SECTION
    <div className="homepage items-center pt-60 py-10 bg-[url('/assets/bg.jpg')] min-h-screen w-full bg-no-repeat bg-cover bg-center" id="home">
      <div className="text-center my-0 px-10 sm:my-10">
        <h1 className="sm:text-5xl/tight md:text-7xl/tight text-4xl/tight font-bold mb-3 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Meet Me, Afif Satrio</h1>
        <p className="text-md md:text-xl text-sm text-gray-200" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">A Creative UI/UX Designer and A Web Developer.</p>
      </div>
      <div className="md:text-4xl text-3xl pt-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-once="true">
        <ul className="flex justify-center md:pt-4 pt-8">
          {mediaLinks.map((media, index) => (
            <li 
              key={index} 
              className="mx-3 hover:text-amber-500 duration-500 cursor-pointer"
              onClick={() => openLink(media.link)}
              title={media.name.replace('logo-', '')}
            >
              <ion-icon name={media.name}></ion-icon>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center sm:pt-12 pt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-once="true">
        <a href="#about" className="font-medium bg-zinc-600 px-8 py-4 rounded-3xl hover:bg-amber-500 duration-500 text-white">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default BodyHome;