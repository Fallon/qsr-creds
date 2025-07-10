import Image from 'next/image';

const FooterDefault = () => {
  return (
    <footer className="bg-[url(/bg_footer-80.jpg)] bg-cover bg-center pt-10 pb-2">
      <div className="w-full">
        <div className="flex items-center justify-center gap-16 mb-8">
          <Image src="/make_some_magic.svg" alt="wanna make some magic?" width={250} height={250} className="w-80" />
          <Image src="/zig_zag_arrow.svg" alt="lightning bolt" width={200} height={100} className="w-72" />
          <a href="mailto:newbusiness@fallon.com?subject=From%20QSR%20Site" className="cursor-pointer">
            <Image src="/email_bottom.png" alt="lets chat" width={300} height={300} className="w-80" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterDefault;