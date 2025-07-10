/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import SECTIONS from "@/data/sections";

const NavDefault = ({ links, scrollToSection }: { links: any[], scrollToSection: (section: string) => void }) => {
  const [ navDark, setNavDark ] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionConfig = SECTIONS.find(s => s.id === entry.target.id);
            if (sectionConfig) {
              setNavDark(sectionConfig.dark);
            }
          }
        });
      },
      {
        threshold: 0, // Trigger when 50% of the section is visible
        rootMargin: '-80px 0px -100% 0px' // Adjust this to control when the observer triggers
      }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      SECTIONS.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className={`w-full px-6 pt-3 font-family-anton fixed top-0 z-50 ${navDark ? "text-black" : "text-[#faf0e0]"}`}>
      <div className={`flex items-center justify-between align-middle py-2 border-b-2 ${navDark ? "border-black" : "border-[#faf0e0]"}`}>
        <div className="flex gap-1 pr-[150px]">
          <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
          <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
          <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
        </div>
        <ul className="flex gap-4 uppercase">
          {links.map(link => (
            <li key={link.section}>
              <button 
                onClick={() => scrollToSection(link.section)}
                className="cursor-pointer uppercase"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <button 
            onClick={() => scrollToSection('hello')}
            className="cursor-pointer">
            <Image src={navDark ? 'logo-dark.svg' : 'logo-light.svg'} width={150} height={20} alt="Fallon logo" />
          </button>
          <div className="flex gap-1">
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavDefault;