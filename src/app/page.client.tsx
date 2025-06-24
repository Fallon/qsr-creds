"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PROFILES = [
  {
    slug: "nikki_baker",
    name: "Nikki Baker",
    location: "ny",
    title: "Chief Creative Officer",
    image: "nikki_baker.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "leslie_shaffer",
    name: "Leslie Shaffer",
    location: "mpls",
    title: "Chief Creative Officer",
    image: "leslie_shaffer.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "andy_rhode",
    name: "Andy Rhode",
    location: "mpls",
    title: "Head of Media/Social",
    image: "andy_rhode.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "jessica_lee",
    name: "Nikki Baker",
    location: "mpls",
    title: "Chief Creative Officer",
    image: "nikki_baker.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "leslie_shaffer",
    name: "Leslie Shaffer",
    location: "mpls",
    title: "Chief Creative Officer",
    image: "leslie_shaffer.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    slug: "andy_rhode",
    name: "Andy Rhode",
    location: "mpls",
    title: "Head of Media/Social",
    image: "andy_rhode.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  // Add more team members as needed
];

const VIDEOS = [
  {
    id: "2p48Pr",
    vimeoId: "1081861477",
    title: "Project 1"
  },
  {
    id: "F89VZB", 
    vimeoId: "1081861477",
    title: "Project 2"
  },
  {
    id: "GRCUX1",
    vimeoId: "1081861477", 
    title: "Project 3"
  },
  {
    id: "4NwHtX",
    vimeoId: "1081861477",
    title: "Project 4"
  },
  {
    id: "QJmgVJ",
    vimeoId: "1081861477",
    title: "Project 5"
  }
];

const SECTIONS = [
  { id: 'hello', dark: false },
  { id: 'reel', dark: true },
  { id: 'story', dark: false },
  { id: 'team', dark: false },
  { id: 'more', dark: true }
];

function HomeClientContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const [ navDark, setNavDark ] = useState<boolean>(false);

  const [ selectedVideo, setSelectedVideo ] = useState<typeof VIDEOS[0] | null>(null);
  const [ isVideoDialogOpen, setIsVideoDialogOpen ] = useState(false);
  const [ selectedProfile, setSelectedProfile ] = useState<typeof PROFILES[0] | null>(null);
  const [ isProfileDialogOpen, setIsProfileDialogOpen ] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const openVideo = (videoId: string) => {
    const video = VIDEOS.find(v => v.id === videoId);
    if (video) {
      setSelectedVideo(video);
      setIsVideoDialogOpen(true);
    }
  };

  const openProfile = (profileSlug: string) => {
    const profile = PROFILES.find(p => p.slug === profileSlug);
    if (profile) {
      setSelectedProfile(profile);
      setIsProfileDialogOpen(true);
    }
  };

  return (
    <div className="relative min-w-[1280px]">
      <nav className={`w-full px-6 pt-3 font-family-anton fixed top-0 z-100 ${navDark ? "text-black" : "text-[#faf0e0]"}`}>
        <div className={`flex items-center justify-between align-middle py-2 border-b-2 ${navDark ? "border-black" : "border-[#faf0e0]"}`}>
          <div className="flex gap-1 pr-[150px]">
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
            <Image src={navDark ? 'plus_black.svg' : 'plus.svg'} width={30} height={30} alt="plus sign" />
          </div>
          <ul className="flex gap-4 uppercase">
            <li>
              <button 
                onClick={() => scrollToSection('story')}
                className="cursor-pointer uppercase"
              >
                The Arbys Story
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('team')}
                className="cursor-pointer uppercase"
              >
                Your Next Team
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('more')}
                className="cursor-pointer uppercase"
              >
                More than QSR
              </button>
            </li>
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
      <main className="flex flex-col min-h-screen">
        <section id="hello" className="min-h-screen bg-[url('/hello-bg.png')] bg-cover bg-center text-foreground flex items-center justify-center relative">
          <div className="flex flex-col w-90 absolute left-10 text-[#faf0e0]">
            <h2 className="text-6xl font-family-anton uppercase text-[#faf0e0] tracking-wider pb-3">
              <span className="flex gap-2">Hi there! <Image src={'asterisk.svg'} width={54} height={54} alt="asterisk" /></span>{name ? `${name}!` : ''}
            </h2>

            <p className="font-family-garamond pb-3 leading-5">Not sure if you heard, but after more than a decade, Fallon and Arby’s are parting ways. We couldn’t be prouder of the work we’ve done and how we changed their business. Now we’re looking to change someone else’. So take a look at what we do and if you’re looking to shake up QSR, give us a call.</p>

            <p className="font-family-garamond font-bold pb-3 leading-5">- Nikki Baker, Fallon CEO</p>
          </div>
          <div className="absolute w-[10%] left-[88%] top-[70%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
            <a href="tel:+16127582345">
              <Image src="/typewriter_pink.png" alt="lets chat" width={150} height={150} className="w-full" />
            </a>
          </div>
        </section>

        <section id="reel">
          <div className="aspect-video relative"><iframe className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/1081861477?h=d7f676fc2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Fallon Reel 2025"></iframe></div>
        </section>

        <section id="story">
          <div className="aspect-[1/1.1] bg-[url('/bg_sky-80.jpg')] bg-cover bg-center relative flex items-center">
            <div className="flex flex-col w-[20%] absolute top-[20%] left-10">
              <Image src="/favorite_projects.svg" alt="Some of our favorite projects" width={500} height={1200} className="w-[90%] mb-4" />
              {/* <h2 className="text-6xl font-family-anton uppercase tracking-wide pb-3 text-black leading-14">Some<br />of Our Favorite Projects</h2> */}
              <p className="font-family-garamond font-bold pb-3 leading-8 text-white text-3xl">These ideas moved culture, and more importantly, sandwiches.</p>
            </div>

            <div className="absolute w-[6%] left-[25%] top-[23%] -translate-x-1/2 -translate-y-1/2">
              <Image src="arrow_1.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[6%] right-[5%] top-[15%] -translate-x-1/2 -translate-y-1/2 -scale-x-100 rotate-[160deg]">
              <Image src="arrow_1.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[6%] right-[22%] top-[35%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg]">
              <Image src="arrow_2.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[8%] left-[45%] top-[75%] -translate-x-1/2 -translate-y-1/2 -scale-x-100 rotate-[10deg]">
              <Image src="arrow_1.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[5%] right-[12%] top-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[0deg]">
              <Image src="arrow_3.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[40%] left-[10%] top-[8%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/tiktok.png" alt="TikTok" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/tiktok_overlay.svg" alt="TikTok Overlay" width={768} height={768} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[32%] left-[30%] top-[15%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/sandwich_tattoo.png" alt="Sandwich Tattoo" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/sandwich_tattoo_overlay.svg" alt="Sandwich Tattoo Overlay" width={768} height={768} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[26%] left-[60%] top-[6%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/good_burger_2.png" alt="Good Burger 2" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/good_burger_2_overlay.svg" alt="Good Burger 2 Overlay" width={768} height={768} className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[19%] left-[78%] top-[30%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/smoked_sweats.png" alt="Meat Sweats" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/meat_sweats_overlay.svg" alt="Meat Sweats Overlay" width={768} height={768} className="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[24%] left-[2%] top-[44%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/vodka.png" alt="Vodka" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/vodka_overlay.svg" alt="Vodka Overlay" width={768} height={768} className="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[23%] left-[26%] top-[46%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/order_of_potato_cakes.png" alt="The Order of Potato Cakes" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/order_of_potato_cakes_overlay.svg" alt="The Order of Potato Cakes Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[20%] left-[54%] top-[44%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/diablo_dare.png" alt="Diablo Dare" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/diablo_dare_overlay.svg" alt="Diablo Dare Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[30%] left-[12%] top-[72%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/lie_detector_test.png" alt="Lie Detector Test" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/lie_detector_test_overlay.svg" alt="Lie Detector Test Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[40%] left-[45%] bottom-[-1%]">
              <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('2p48Pr')}>
                <Image src="/pusha_t_diss.png" alt="Push T Diss" width={768} height={768} className="w-full visible group-hover/item:invisible" />
                <Image src="/pusha_t_diss_overlay.svg" alt="Push T Diss Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
              </button>
            </div>

            <div className="absolute w-[40px] left-[50%] bottom-[15px] -translate-x-1/2 -translate-y-1/2">
              <button onClick={() => scrollToSection('team')} className="cursor-pointer">
                <Image src="/down_arrow_black.svg" alt="Black down arrow" width={40} height={40} className="w-full" />
              </button>
            </div>
          </div>
        </section>


        <section id="team">
          <div className="relative w-full aspect-[4/3] bg-[#f03010] flex items-center">
            {/* <div className="absolute w-[16%] left-[5%] top-[5%]">
              <img src="lockup_mpls.svg" alt="Fallon MPLS" className="w-full" />
            </div> */}

            {/* <div className="absolute w-[16%] left-[95%] top-[5%] -translate-x-[100%]">
              <img src="lockup_ny.svg" alt="Fallon New York" className="w-full" />
            </div> */}

            <div className="absolute w-[12%] left-[66%] top-[12%] animate-spin">
              <Image src="/outsmart.svg" alt="Outsmart" width={100} height={100} className="w-full" />
            </div>

            <div className="absolute w-[12%] left-[12%] top-[60%] animate-spin-backwards">
              <Image src="/outspend.svg" alt="Outspend" width={100} height={100} className="w-full" />
            </div>

            {/* <div className="absolute w-[2%] left-[90%] top-[15%] -translate-x-[100%] flex gap-1">
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
            </div> */}

            {/* <div className="absolute w-[2%] left-[5%] top-[90%] flex gap-1">
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
            </div> */}

            <div className="absolute w-[46%] left-[30px] top-[80px] z-20 pointer-events-none">
              <Image src="/meet_your_next_team.svg" alt="Meet your next team" width={1024} height={1024} className="w-full" />
            </div>

            <div className="absolute w-[71%] left-[29%] top-[21vw] border-b-2 border-[#faf0e0] z-10">
              <Swiper
                className="custom-swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4.25}
                slidesPerGroup={1}
                navigation
                pagination={{ clickable: true }}
                // mousewheel={true}
                // freeMode={{
                //   enabled: true,
                //   sticky: true,
                // }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {PROFILES.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justify-start cursor-pointer" onClick={() => openProfile(member.slug)}>
                      <Image src={`/${member.image}`} alt={member.name} width={300} height={300} className="w-full -mb-2" />
                      <p className="text-5xl font-family-anton uppercase tracking-wide leading-11 text-[#fdaaff] mb-2 pb-2 border-b-2 border-[#faf0e0] whitespace-pre-line">{member.name.split(' ').join('\n')}</p>
                      <p className="font-family-garamond text-md font-bold mb-1 text-[#fdaaff]">{member.title}</p>
                      <p className="font-family-anton uppercase text-sm text-[#faf0e0]">{member.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="absolute p-6 left-0 bottom-[2%] flex items-center justify-between w-full">
              <div className="">
                <Image src='plus.svg' width={30} height={30} alt="plus sign" />
              </div>
              <div className="">
                <button onClick={() => scrollToSection('more')} className="cursor-pointer">
                  <Image src="down_arrow_pink.svg" alt="Pink down arrow" width={40} height={40} />
                </button>
              </div>
              <div className="">
                <Image src='plus.svg' width={30} height={30} alt="plus sign" />
              </div>
            </div>

            
          </div>
        </section>
        {/*<section id="more">
          <div className="min-h-screen relative bg-[#0e191f] flex flex-col items-center justify-center p-12">
            <div className="top-16 left-0 flex items-center justify-around w-full -mb-4 z-20">
              <div className="w-1/2 flex justify-center">
                <div><h2 className="text-7xl text-left font-family-anton uppercase tracking-wide leading-18 text-[#faf0e0]">But we do a lot<br />more than QSR</h2></div>
              </div>
              <div className="w-1/2 text-center">
                <p className="font-family-garamond text-3xl text-[#faf0e0]">Because a well-rounded agency does better work.</p>
              </div>
            </div>

            <div className="w-[90%] aspect-video relative z-10"><iframe className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/1081861477?h=d7f676fc2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Fallon Reel 2025"></iframe></div>
          </div>
        </section>*/}

        <section id="more">
          <div className="min-h-screen bg-[url('/work-bg@2x.png')] bg-cover bg-center relative flex items-center">
            <div className="flex flex-col w-90 absolute top-[20%] left-10">
              <h2 className="text-7xl font-family-anton uppercase tracking-wide mb-8 text-black leading-16">But we do a lote more than QSR</h2>
              <p className="font-family-garamond font-bold pb-3 text-3xl leading-7 text-black">Becuase a well-rounded agency does better work.</p>
            </div>

            {/* <div className="absolute w-[3%] left-[5%] top-[6%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div> */}

            {/* <div className="absolute w-[3%] left-[95%] top-[6%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div> */}

            {/* <div className="absolute w-[3%] left-[95%] top-[94%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div> */}

            {/* <div className="absolute w-[3%] left-[5%] top-[94%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div> */}


            <div className="absolute w-[28%] left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
              <Image src="fallon_f.svg" alt="Fallon F" width={1200} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[20%] left-[40%] top-[20%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('F89VZB')}>
                <Image src="/F89VZB.png" alt="Thumbnail" width={300} height={300} className="w-full" />
              </button>
            </div>

            <div className="absolute w-[25%] left-[75%] top-[20%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('2p48Pr')}>
                <Image src="/black_friday.png" alt="Black Friday" width={300} height={300} className="w-full" />
              </button>
            </div>

            <div className="absolute w-[25%] left-[28%] top-[60%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('4NwHtX')}>
                <Image src="/deal_book.png" alt="Deal Book" width={300} height={300} className="w-full" />
              </button>
            </div>

            <div className="absolute w-[23%] left-[74%] top-[60%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('GRCUX1')}>
                <Image src="/cheezit.png" alt="Cheez-It" width={300} height={300} className="w-full" />
              </button>
            </div>

            {/* <div className="absolute w-[40px] left-[50%] bottom-[15px] -translate-x-1/2 -translate-y-1/2">
              <button onClick={() => scrollToSection('team')} className="cursor-pointer">
                <Image src="/down_arrow_black.svg" alt="Black down arrow" width={40} height={40} className="w-full" />
              </button>
            </div> */}
          </div>
        </section>
      </main>
      <footer className="bg-[url(/bg_footer-80.jpg)] bg-cover bg-center pt-10 pb-2">
        <div className="w-full">
          <div className="flex items-center justify-center gap-16 mb-8">
            <Image src="/make_some_magic.svg" alt="wanna make some magic?" width={250} height={250} className="w-80" />
            <Image src="/zig_zag_arrow.svg" alt="lightning bolt" width={200} height={100} className="w-72" />
            <a href="tel:+16127582345" className="animate-wiggle">
              <Image src="/typewriter_red.png" alt="lets chat" width={150} height={150} className="w-50" />
            </a>
          </div>
        </div>
      </footer>

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-none! w-[90vw] rounded-none p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedVideo?.title}</DialogTitle>
          </DialogHeader>
          <DialogDescription className="sr-only">
            {selectedVideo?.title}
          </DialogDescription>
          {selectedVideo && (
            <div className="w-full aspect-video relative">
              <iframe 
                className="absolute top-0 left-0 w-full h-full" 
                src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?h=d7f676fc2d&badge=0&autopause=0&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                title={selectedVideo.title}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Profile Dialog */}

      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="profile-dialog max-w-[768px]!">
          <DialogHeader className="sr-only">
            <DialogTitle className="text-2xl font-family-anton uppercase">
              {selectedProfile?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedProfile && (
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <Image src="asterisk_black.svg" alt="Asterisk" width={30} height={30} />
                <h3 className="uppercase font-family-anton">Meet your next team</h3>
                <div className="flex gap-1">
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col">                  
                  <div className="flex flex-col justofy-start">
                    <div className="w-[240px]">
                      <Image src={`/${selectedProfile.image}`} alt={selectedProfile.name} width={240} height={240} className="w-full -mb-2" />
                    </div>
                    <p className="text-5xl font-family-anton uppercase tracking-wide leading-11 text-[#f03010] mb-2 pb-2 border-b-2 border-[#f03010] whitespace-pre-line cursor-pointer">{selectedProfile.name.split(' ').join('\n')}</p>
                    <p className="font-family-garamond text-md font-bold mb-1 text-[#f03010]">{selectedProfile.title}</p>
                  </div>
                </div>
                <div className="overflow-y-auto text-md font-family-garamond text-black max-h-[400px] w-full">
                  {selectedProfile.bio.split('\n').map((line, idx) => (
                    <p key={idx} className="mb-4 leading-6">
                      {line}
                    </p>
                  ))}</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                  <Image src='plus_black.svg' width={25} height={25} alt="plus sign" />
                </div>
                <Image src={selectedProfile.location === "ny" ? 'lockup_ny_black.svg' : 'lockup_mpls_black.svg'} width={150} height={30} alt="Location" />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function HomeClient() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeClientContent />
    </Suspense>
  );
}
