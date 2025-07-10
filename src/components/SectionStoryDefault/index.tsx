import Image from 'next/image';

const SectionStoryDefault = (
  {
    openVideo,
    scrollToSection
  }: {
    openVideo: (videoId: string) => void,
    scrollToSection: (section: string) => void
  }) => {
  return (
    <section id="story">
      <div className="aspect-[1/1.1] bg-[url('/favorites_bg.jpg')] bg-cover bg-center relative flex items-center">
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
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096611711')}>
            <Image src="/tiktok.png" alt="TikTok" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/missing_menu_overlay.svg" alt="TikTok Overlay" width={768} height={768} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[32%] left-[30%] top-[15%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096611660')}>
            <Image src="/sandwich_tattoo.png" alt="Sandwich Tattoo" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/sandwich_tattoo_overlay.svg" alt="Sandwich Tattoo Overlay" width={768} height={768} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[26%] left-[60%] top-[6%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096611377')}>
            <Image src="/good_burger_2.png" alt="Good Burger 2" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/good_burger_2_overlay.svg" alt="Good Burger 2 Overlay" width={768} height={768} className="w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[19%] left-[78%] top-[30%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096610857')}>
            <Image src="/smoked_sweats.png" alt="Meat Sweats" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/meat_sweats_overlay.svg" alt="Meat Sweats Overlay" width={768} height={768} className="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[24%] left-[2%] top-[44%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096611279')}>
            <Image src="/vodka.png" alt="Vodka" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/vodka_overlay.svg" alt="Vodka Overlay" width={768} height={768} className="w-[90%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[23%] left-[26%] top-[46%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096611080')}>
            <Image src="/order_of_potato_cakes.png" alt="The Order of Potato Cakes" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/order_of_potato_cakes_overlay.svg" alt="The Order of Potato Cakes Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[20%] left-[54%] top-[44%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096610956')}>
            <Image src="/diablo_dare.png" alt="Diablo Dare" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/diablo_dare_overlay.svg" alt="Diablo Dare Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[30%] left-[12%] top-[72%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096610753')}>
            <Image src="/lie_detector_test.png" alt="Lie Detector Test" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/try_detector_overlay.svg" alt="Lie Detector Test Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[40%] left-[45%] bottom-[-1%]">
          <button className="w-full relative cursor-pointer group/item" onClick={() => openVideo('1096610633')}>
            <Image src="/pusha_t_diss.png" alt="Push T Diss" width={768} height={768} className="w-full visible group-hover/item:invisible" />
            <Image src="/diss_track_overlay.svg" alt="Push T Diss Overlay" width={768} height={768} className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invisible group-hover/item:visible" />
          </button>
        </div>

        <div className="absolute w-[40px] left-[50%] bottom-[15px] -translate-x-1/2 -translate-y-1/2">
          <button onClick={() => scrollToSection('team')} className="cursor-pointer">
            <Image src="/down_arrow_black.svg" alt="Black down arrow" width={40} height={40} className="w-full" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionStoryDefault;