import { useState, useEffect } from "react";

const Navbar = () => {
    const[active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    let Links = [
        {name:"HOME", link:"#home"},
        {name:"ABOUT", link:"#about"},
        {name:"PROJECTS", link:"#projects"},
        {name:"CONTACT", link:"#contact"},
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 150){
                setActive(true);
            }else{
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    // Fungsi untuk menutup menu mobile setelah mengklik link
    const handleMobileLinkClick = () => {
        setOpen(false);
    };

    return (
        <div className="shadow-md w-full fixed bg-zinc-900 p-2 top-0 left-0 z-50">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <span className="text-orange-400 mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    <a href="#home">Afif.dev</a>
                </div>
                
                <div 
                    onClick={() => setOpen(!open)} 
                    className="text-3xl cursor-pointer absolute right-8 top-6 md:hidden"
                >
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                
                <ul className="hidden md:flex md:items-center md:space-x-8">
                    {Links.map((link) => (
                        <li key={link.name} className="text-md font-bold">
                            <a 
                                href={link.link} 
                                className="hover:text-orange-400 duration-500"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                
                <div className={
                    `fixed inset-0 z-40 bg-zinc-900 bg-opacity-50 transition-opacity duration-300 md:hidden
                    ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`
                } onClick={() => setOpen(false)}>
                    <div className={
                        `fixed left-0 h-full w-1/2 bg-amber-500/85 transform transition-transform duration-500 ease-in-out
                        ${open ? 'translate-x-0' : '-translate-x-full'}`
                    } onClick={(e) => e.stopPropagation()}>
                    <div className="font-bold text-2xl cursor-pointer flex items-center pt-5 pl-7">
                    <span className="text-white mr-1 pt-2">
                        <ion-icon name="logo-ionic"></ion-icon>
                    </span>
                    Afif.dev
                    </div>
                        <ul className="flex flex-col space-y-6 pl-6 mt-5">
                            {Links.map((link, index) => (
                                <li key={link.name} className="text-lg font-bold">
                                    <a 
                                        href={link.link} 
                                        className="block py-2 px-4 hover:bg-amber-600 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                                        style={{
                                            transitionDelay: open ? `${index * 100}ms` : '0ms',
                                            opacity: open ? 1 : 0,
                                            transform: open ? 'translateX(0)' : 'translateX(-20px)',
                                            transition: 'opacity 0.4s ease, transform 0.4s ease'
                                        }}
                                        onClick={handleMobileLinkClick} // Menambahkan onClick handler
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;