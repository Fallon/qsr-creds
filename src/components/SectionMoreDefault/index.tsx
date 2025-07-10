import Image from 'next/image';

const SectionMoreDefault = ({ openVideo }: { openVideo: (videoId: string) => void}) => {
  return (
    <section id="more">
      <div className="min-h-screen relative bg-[#0e191f]">
        <div className="flex items-center justify-between w-full p-8 pt-22">
          <div className="relative w-3/5 flex justify-left">
            <h2 className="text-8xl text-left font-family-anton uppercase tracking-wide leading-22 text-[#faf0e0]">But we do a lot more than QSR</h2>
            <div className="w-[140px] absolute -bottom-22 left-16 z-10">
              <Image src="/pink_arrow.svg" alt="Pink arrow" width={1200} height={1200} className="w-full" />
            </div>
          </div>
          <div className="relative w-1/3 text-center">
            <p className="font-family-garamond text-2xl text-[#faf0e0] w-[160px] text-center pt-22">Because a well-rounded agency does better work.</p>
            <div className="w-[150px] absolute top-0 right-20">
              <Image src="/pink_star.svg" alt="Pink Star" width={1200} height={1200} className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex w-full h-full">
          <div className="flex flex-col w-[39%]">
            <button className="relative cursor-pointer" onClick={() => openVideo('1097718141')}>
              <Image src="/more_walmart.jpg" alt="Walmart" width={712} height={365} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_walmart.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
            <button className="relative cursor-pointer" onClick={() => openVideo('1097718090')}>
              <Image src="/more_showtime.jpg" alt="Showtime" width={712} height={365} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_showtime.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
          </div>
          <div className="flex w-[22%]">
            <button className="relative w-full h-full cursor-pointer" onClick={() => openVideo('1097718050')}>
              <Image src="/more_pawpatrol.png" alt="Paw Patrol" width={768} height={1024} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_pawpatrol.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
          </div>
          <div className="flex flex-col w-[39%]">
            <button className="relative cursor-pointer" onClick={() => openVideo('1097718202')}>
              <Image src="/more_mattressfirm.jpg" alt="Matress Firm" width={712} height={365} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_mattressfirm.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
            <button className="relative cursor-pointer" onClick={() => openVideo('1097718188')}>
              <Image src="/more_taxact.png" alt="Tax Act" width={712} height={365} className="w-full" />
              <div className="absolute w-full h-full top-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-100">
                <div className="opacity-50 absolute top-0 left-0 w-full h-full bg-black"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Image src="logo_taxact.svg" alt="Walmart Logo" width={300} height={100} className="w-full" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionMoreDefault;