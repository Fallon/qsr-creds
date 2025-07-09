import Image from 'next/image';

const SectionMoreWendys = ({ openVideo }: { openVideo: (videoId: string) => void}) => {
  return (
    <section id="more">
      <div className="min-h-screen relative bg-[url(/section_more_bg.png)] bg-cover bg-center">
        <div className="flex items-center justify-between w-full p-8 pt-40 pb-0">
          <div className="relative w-3/5 flex justify-left">
            <h2 className="text-8xl text-left font-family-anton uppercase tracking-wide leading-22 text-[#faf0e0]">But we do a lot more than QSR</h2>
            <div className="relative w-[160px] -top-10 -left-32 z-10">
              <Image src="/pink_star.svg" alt="Pink arrow" width={200} height={200} className="w-full" />
            </div>
          </div>
          {/* <div className="relative w-1/3 text-center">
            <p className="font-family-garamond text-2xl text-[#faf0e0] w-[160px] text-center pt-22">Because a well-rounded agency does better work.</p>
            <div className="w-[150px] absolute top-0 right-20">
              <Image src="/pink_star.svg" alt="Pink Star" width={1200} height={1200} className="w-full" />
            </div>
          </div> */}
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full gap-2 p-8 pb-4">
          <div className="flex gap-2 w-full h-full">
            <button className="relative w-1/3 cursor-pointer" onClick={() => openVideo('1100120704')}>
              <Image src="/more_walmart_add_resized.png" alt="Walmart" width={1024} height={768} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_walmart.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
            <button className="relative w-1/3 cursor-pointer" onClick={() => openVideo('1100120389')}>
              <Image src="/more_mattressfirm.png" alt="Matress Firm" width={1024} height={768} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_mattressfirm.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
            <button className="relative w-1/3 cursor-pointer" onClick={() => openVideo('1100120042')}>
              <Image src="/more_frontdoor_resized.png" alt="Showtime" width={1024} height={768} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_frontdoor.svg" alt="FrontDoor Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
          </div>
          <div className="relative flex gap-2 justify-center w-full h-full">
            <button className="relative w-1/3 cursor-pointer" onClick={() => openVideo('1097718090')}>
              <Image src="/more_showtime.png" alt="Showtime" width={1024} height={768} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_showtime.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
            <button className="relative w-1/3 cursor-pointer" onClick={() => openVideo('1097718141')}>
              <Image src="/more_walmart.png" alt="Walmart" width={1024} height={768} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_walmart.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>

            <div className="absolute w-[10%] left-[13%] top-[50%] -translate-x-1/2 -translate-y-1/2 -scale-x-100 rotate-[50deg]">
              <Image src="arrow_1.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>

            <div className="absolute w-[10%] right-[3%] top-[10%] -translate-x-1/2 -translate-y-1/2 rotate-[10deg]">
              <Image src="arrow_2.svg" alt="Arrow" width={300} height={1200} className="w-full" />
            </div>
          </div>
        </div>

        <p className="font-family-garamond text-4xl text-[#faf0e0] text-center text-shadow-xs">Because a well-rounded agency does better work.</p>
      </div>
    </section>
  );
}

export default SectionMoreWendys;