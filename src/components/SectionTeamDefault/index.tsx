/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionTeamDefault = (
  {
    profiles = [],
    openProfile,
    // scrollToSection
  }: {
    profiles: any[],
    openProfile: (profileId: string) => void,
    // scrollToSection: (section: string) => void
  }) => {
  return (
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
            slidesPerGroup={4}
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
            {profiles.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col justify-start cursor-pointer" onClick={() => openProfile(member.slug)}>
                  <Image src={`/bios/${member.image}`} alt={member.name} width={300} height={300} className="w-full mb-32" />
                  <div className="absolute bottom-0">
                    <p className="text-5xl font-family-anton uppercase tracking-wide leading-11 text-[#fdaaff] mb-2 pb-2 border-b-2 border-[#faf0e0] whitespace-pre-line">{member.name.split(' ').join('\n')}</p>
                    <p className="font-family-garamond text-md font-bold mb-1 text-[#fdaaff]">{member.title}</p>
                    <p className="font-family-anton uppercase text-sm text-[#faf0e0]">{member.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute p-6 left-0 bottom-[2%] flex items-center justify-between w-full">
          <div className="">
            <Image src='plus.svg' width={30} height={30} alt="plus sign" />
          </div>
          {/* <div className="">
            <button onClick={() => scrollToSection('more')} className="cursor-pointer">
              <Image src="down_arrow_pink.svg" alt="Pink down arrow" width={40} height={40} />
            </button>
          </div> */}
          <div className="">
            <Image src='plus.svg' width={30} height={30} alt="plus sign" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTeamDefault;