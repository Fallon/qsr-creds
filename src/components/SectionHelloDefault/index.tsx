import Image from 'next/image';

const SectionHelloDefault = ({ name }: { name: string }) => {
  return (
    <section id="hello" className="min-h-screen bg-[url('/hello-bg.png')] bg-cover bg-center text-foreground flex items-center justify-center relative">
      <div className="flex flex-col w-90 absolute left-10 text-[#faf0e0]">
        <h2 className="text-6xl font-family-anton uppercase text-[#faf0e0] tracking-wider pb-3">
          <span className="flex gap-2">Hi there! <Image src={'asterisk.svg'} width={54} height={54} alt="asterisk" /></span>{name ? `${name}!` : ''}
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
  );
}

export default SectionHelloDefault;