"use client";

import { useState, Suspense } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import SectionMoreWendys from "@/components/SectionMoreWendys";
import NavDefault from "@/components/NavDefault";
// import SectionHelloDefault from "@/components/SectionHelloDefault";
import SectionReelDefault from "@/components/SectionReelDefault";
import SectionStoryDefault from "@/components/SectionStoryDefault";
import SectionTeamDefault from "@/components/SectionTeamDefault";
// import SectionMoreDefault from "@/components/SectionMoreDefault";
import FooterDefault from "@/components/FooterDefault";

import PROFILES from "@/data/profiles";
import LINKS from "@/data/links";
import VIDEOS from "@/data/videos";

function HomeClientContent() {
  // const searchParams = useSearchParams();
  const name = "Jim";

  const [ selectedVideo, setSelectedVideo ] = useState<typeof VIDEOS[0] | null>(null);
  const [ isVideoDialogOpen, setIsVideoDialogOpen ] = useState(false);
  const [ selectedProfile, setSelectedProfile ] = useState<typeof PROFILES[0] | null>(null);
  const [ isProfileDialogOpen, setIsProfileDialogOpen ] = useState(false);

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
      <NavDefault links={LINKS} scrollToSection={scrollToSection} />
      <main className="flex flex-col min-h-screen">
        <section id="hello" className="min-h-screen bg-[url('/hello-bg.png')] bg-cover bg-center text-foreground flex items-center justify-center relative">
          <div className="flex flex-col w-90 absolute left-10 text-[#faf0e0]">
            <h2 className="text-6xl font-family-anton uppercase text-[#faf0e0] tracking-wider pb-3">
              <span className="flex gap-2">Hi {name ? `${name}!` : 'there'} <Image src={'asterisk.svg'} width={54} height={54} alt="asterisk" /></span>
            </h2>

            <p className="font-family-garamond pb-3 leading-5">Not sure if you heard, but after more than a decade, Fallon and Arby’s are parting ways. We couldn’t be prouder of the work we’ve done and how we changed their business. Now we’re looking to change someone else’s. So take a look at what we do and if you’re looking to shake up QSR, give us a call.</p>

            <p className="font-family-garamond font-bold pb-3 leading-5">- Nikki Baker, Fallon CEO</p>
          </div>
          <div className="absolute w-[20%] left-[88%] top-[70%] -translate-x-1/2 -translate-y-1/2 animate-wiggle">
            <a href="mailto:newbusiness@fallon.com?subject=From%20QSR%20Site" className="cursor-pointer">
              <Image src="/email_top.png" alt="lets chat" width={300} height={300} className="w-full" />
            </a>
          </div>
        </section>

        <SectionReelDefault vimeoId="1097696716" />
        <SectionStoryDefault openVideo={openVideo} scrollToSection={scrollToSection} />
        <SectionTeamDefault profiles={PROFILES} openProfile={openProfile} />
        <SectionMoreWendys openVideo={openVideo} />
      </main>
      <FooterDefault />

      {/* Video Dialog */}
      <Dialog open={isVideoDialogOpen} onOpenChange={setIsVideoDialogOpen}>
        <DialogContent className="max-w-none! w-[90%] rounded-none p-0 z-100 border-0">
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
                src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?h=d7f676fc2d&badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479`}
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
                title={selectedVideo.title}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Profile Dialog */}
      <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
        <DialogContent className="profile-dialog max-w-[80%]! border-0">
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
                      <Image src={`/bios/${selectedProfile.image}`} alt={selectedProfile.name} width={240} height={240} className="w-full -mb-2" />
                    </div>
                    <p className="text-5xl font-family-anton uppercase tracking-wide leading-11 text-[#f03010] mb-2 pb-2 border-b-2 border-[#f03010] whitespace-pre-line cursor-pointer">{selectedProfile.name.split(' ').join('\n')}</p>
                    <p className="font-family-garamond text-md font-bold mb-1 text-[#f03010]">{selectedProfile.title}</p>
                    {selectedProfile.linkedin && (
                      <a href={selectedProfile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        <Image src="linkedin.svg" width={20} height={20} alt="LinkedIn" className="inline-block mr-2" />
                      </a>
                    )}
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
                <Image src={selectedProfile.location === "ny" ? "pigeon.svg" : "duck.svg"} width={35} height={30} alt="Duck head" />
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
