"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TEAM = [
  {
    name: "Nikki Baker",
    title: "Chief Creative Officer",
    image: "nikki_baker.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Leslie Shaffer",
    title: "Chief Creative Officer",
    image: "leslie_shaffer.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Andy Rhode",
    title: "Head of Media/Social",
    image: "andy_rhode.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Nikki Baker",
    title: "Chief Creative Officer",
    image: "nikki_baker.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Leslie Shaffer",
    title: "Chief Creative Officer",
    image: "leslie_shaffer.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    name: "Andy Rhode",
    title: "Head of Media/Social",
    image: "andy_rhode.png",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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

function HomeClientContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  const [selectedVideo, setSelectedVideo] = useState<typeof VIDEOS[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="bg-white relative min-w-[1220px]">
      
      <main className="flex flex-col">
        <section id="hello" className="aspect-video bg-[url('/hello-bg.png')] bg-cover bg-center text-foreground flex items-center justify-center relative">
          <nav className="w-full max-w-[1440px] px-6 pt-3 font-family-anton absolute top-0 z-10">
            <div className="flex items-center justify-between align-middle py-2 border-b-2 border-[#faf0e0]">
              <div className="flex gap-1 pr-[150px]">
                <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
                <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
                <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
              </div>
              <ul className="flex gap-4 uppercase text-[#faf0e0]">
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
                <Image src={'logo-light.svg'} width={150} height={20} alt="Fallon logo" />
                <div className="flex gap-1">
                  <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
                  <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
                  <Image src={'plus.svg'} width={30} height={30} alt="plus sign" />
                </div>
              </div>
            </div>
          </nav>
          <div className="flex flex-col w-90 absolute left-10 text-[#faf0e0]">
            <h2 className="text-6xl font-family-anton uppercase text-[#faf0e0] tracking-wider pb-3">
              <span className="flex gap-2">Hi there! <Image src={'asterisk.svg'} width={54} height={54} alt="asterisk" /></span>{name ? `${name}!` : ''}
            </h2>

            <p className="font-family-garamond pb-3 leading-5">Not sure if you heard, but after more than a decade, Fallon and Arby’s are parting ways. We couldn’t be prouder of the work we’ve done and how we changed their business. Now we’re looking to change someone else’. So take a look at what we do and if you’re looking to shake up QSR, give us a call.</p>

            <p className="font-family-garamond font-bold pb-3 leading-5">- Nikki Baker, Fallon CEO</p>
          </div>
          <div className="absolute w-[20%] left-[88%] top-[70%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
            <a href="tel:+16127582345">
              <img src="lets_chat_light.png" alt="lets chat" className="w-50" />
            </a>
          </div>
        </section>

        <section id="reel">
          <div className="aspect-video relative"><iframe className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/1081861477?h=d7f676fc2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Fallon Reel 2025"></iframe></div>
        </section>
        <section id="story">
          <div className="bg-[url('/work-bg@2x.png')] bg-cover bg-center aspect-video relative flex items-center">
            <nav className="absolute top-4 left-1/2 z-10 -translate-x-[50%] ps-12 pe-32 font-family-anton bg-[url('/logo_menu_wrap.svg')] bg-contain bg-center bg-no-repeat text-center">
              <ul className="py-4 flex gap-4 uppercase items-center justify-center text-black">
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
            </nav>
            <div className="flex flex-col w-90 absolute left-10">
              <h2 className="text-6xl font-family-anton uppercase tracking-wide pb-3 text-black leading-14">Some<br />of Our Favorite Projects</h2>
              <p className="font-family-garamond font-bold pb-3 leading-5 text-black">These ideas moved culture, and more importantly, sandwiches.</p>
            </div>

            <div className="absolute w-[3%] left-[5%] top-[6%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div>

            <div className="absolute w-[3%] left-[95%] top-[6%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div>

            <div className="absolute w-[3%] left-[95%] top-[94%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div>

            <div className="absolute w-[3%] left-[5%] top-[94%] -translate-x-1/2 -translate-y-1/2">
              <img src="plus_black.svg" alt="Black plus sign" className="w-full" />
            </div>


            <div className="absolute w-[28%] left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2">
              <img src="fallon_f.svg" alt="Fallon F" className="w-full" />
            </div>

            <div className="absolute w-[12%] left-[20%] top-[18%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
              <img src="burger.png" alt="Burger" className="w-full" />
            </div>

            <div className="absolute w-[8%] left-[58%] top-[80%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
              <img src="fries.png" alt="Fries" className="w-full" />
            </div>

            <div className="absolute w-[8%] left-[80%] top-[45%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
              <img src="coffee.png" alt="Coffee" className="w-full" />
            </div>

            <div className="absolute w-[10%] left-[34%] top-[30%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('2p48Pr')}>
                <img src="2p48Pr.png" alt="Thumbnail" className="w-full" />
              </button>
            </div>

            <div className="absolute w-[12%] left-[68%] top-[20%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('F89VZB')}>
                <img src="F89VZB.png" alt="Thumbnail" className="w-full" />
              </button>
            </div>

            <div className="absolute w-[12%] left-[52%] top-[50%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('GRCUX1')}>
                <img src="GRCUX1.png" alt="Thumbnail" className="w-full" />
              </button>
            </div>

            <div className="absolute w-[12%] left-[33%] top-[75%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('4NwHtX')}>
                <img src="4NwHtX.png" alt="Thumbnail" className="w-full" />
              </button>
            </div>

            <div className="absolute w-[22%] left-[74%] top-[75%] -translate-x-1/2 -translate-y-1/2">
              <button className="cursor-pointer" onClick={() => openVideo('QJmgVJ')}>
                <img src="QJmgVJ.png" alt="Thumbnail" className="w-full" />
              </button>
            </div>
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-none! w-[90vw] rounded-none">
              <DialogHeader className="sr-only">
                <VisuallyHidden><DialogTitle>{selectedVideo?.title}</DialogTitle></VisuallyHidden>
              </DialogHeader>
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
        </section>
        <section id="team">
          <div className="bg-[#f03010] aspect-[5/4] relative flex items-center">
            <nav className="absolute top-10 left-1/2 z-10 -translate-x-[50%] ps-12 pe-32 font-family-anton bg-[url('/logo_menu_wrap_light.svg')] bg-contain bg-center bg-no-repeat text-center">
              <ul className="py-4 flex gap-4 uppercase items-center justify-center text-[#faf0e0]">
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
            </nav>

            <div className="absolute w-[16%] left-[5%] top-[5%]">
              <img src="lockup_mpls.svg" alt="Fallon MPLS" className="w-full" />
            </div>

            <div className="absolute w-[16%] left-[95%] top-[5%] -translate-x-[100%]">
              <img src="lockup_ny.svg" alt="Fallon New York" className="w-full" />
            </div>

            <div className="absolute w-[12%] left-[66%] top-[22%] animate-spin">
              <img src="outsmart.svg" alt="Outsmart" className="w-full" />
            </div>

            <div className="absolute w-[12%] left-[12%] top-[60%] animate-spin-backwards">
              <img src="outspend.svg" alt="Outspend" className="w-full" />
            </div>

            <div className="absolute w-[2%] left-[90%] top-[15%] -translate-x-[100%] flex gap-1">
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
            </div>

            <div className="absolute w-[2%] left-[5%] top-[90%] flex gap-1">
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
              <img src="plus_pink.svg" alt="Pink Plus Sign" className="w-full" />
            </div>

            <div className="absolute w-[60%] left-[40%] top-[39%] border-b-2 border-[#faf0e0] z-10">
              <Swiper
                className="custom-swiper"
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3.25}
                slidesPerGroup={1}
                navigation
                pagination={{ clickable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {TEAM.map((member, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col justofy-start">
                      <img src={member.image} alt={member.name} className="w-full -mb-2" />
                      <p className="text-5xl font-family-anton uppercase tracking-wide leading-11 text-[#fdaaff] mb-2 pb-2 border-b-2 border-[#faf0e0] whitespace-pre-line">{member.name.split(' ').join('\n')}</p>
                      <p className="font-family-garamond text-md font-bold mb-1 text-[#fdaaff]">{member.title}</p>
                      <p className="font-family-anton uppercase text-sm text-[#faf0e0]">{member.description}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="absolute w-[60%] left-[5%] top-[12%] z-20">
              <img src="meet_your_next_team.svg" alt="Meet your next team" className="w-full" />
            </div>
          </div>

        </section>
        <section id="more">
          <div className="relative bg-[#0e191f] flex flex-col items-center justify-center p-12">
            <div className="top-16 left-0 flex items-center justify-around w-full -mb-4 z-20">
              <div className="w-1/2 text-center">
                <h2 className="text-7xl font-family-anton uppercase tracking-wide leading-18 text-[#faf0e0]">But we do a lot<br />more than QSR</h2>
              </div>
              <div className="w-1/2 text-center">
                <p className="font-family-garamond">Because a well-rounded agency does better work.</p>
              </div>
            </div>

            <div className="w-[90%] aspect-video relative z-10"><iframe className="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/1081861477?h=d7f676fc2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Fallon Reel 2025"></iframe></div>
          </div>
        </section>
      </main>
      <footer className="bg-[#fdaaff] pt-10 pb-2">
        <div className="w-full">
          <div className="flex items-center justify-center gap-12 mb-8">
            <img src="ready_for_a_change.svg" alt="ready for a change" className="w-80" />
            <img src="zig_zag_arrow.svg" alt="lightning bolt" className="w-72" />
            <a href="tel:+16127582345" className="animate-wiggle">
              <img src="lets_chat.png" alt="lets chat" className="w-50" />
            </a>
          </div>
        </div>

        <nav className="w-full px-6 pt-3 font-family-anton text-black">
          <div className="flex items-center justify-between align-middle py-2 border-t-2 border-black">
            <div className="flex gap-1 pr-[150px]">
              <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
              <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
              <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
            </div>
            <ul className="flex gap-4 uppercase font-bold">
              <li>
                <button 
                  onClick={() => scrollToSection('story')}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                >
                  The Arbys Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                >
                  Your Next Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('more')}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                >
                  More than QSR
                </button>
              </li>
            </ul>
            <div className="flex gap-3">
              <Image src={'logo-dark.svg'} width={150} height={20} alt="Fallon logo" />
              <div className="flex gap-1">
                <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
                <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
                <Image src={'plus_black.svg'} width={30} height={30} alt="plus sign" />
              </div>
            </div>
          </div>
        </nav>
      </footer>
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
