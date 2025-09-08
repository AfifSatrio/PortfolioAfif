import { useState } from "react";

const Footer = () => {

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
    <div className="items-center mt-32 border border-black bg-black">
        <div className="pt-5 flex justify-between mx-10">
            <div className="mr-4 md:mr-0">
                <div className="font-bold md:text-2xl text-lg cursor-pointer flex items-center">
                    <span className="text-orange-400 mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    <a href="#home">Afif.dev</a>
                </div>
                <p className="md:text-base text-sm">A Creative UI/UX Designer and A Web Developer.</p>
            </div>
            <div>
                <ul className="flex items-center gap-2">
                    {mediaLinks.map((media, index) => (
                        <li 
                        key={index}
                        className="md:text-2xl text-lg hover:text-amber-500 duration-500"
                        onClick={() => openLink(media.link)}
                        title={media.name.replace('logo-', '')}>
                            <ion-icon name={media.name}></ion-icon>
                            <a href={media.link}></a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-10 mb-6">
            <p className="text-center md:text-base text-sm">© Copyright 2025. Made By <u className="hover:text-orange-300 duration-500"><a href="#home">Afif Satrio</a></u>
        </p>
        </div>
    </div>
  )
}

export default Footer