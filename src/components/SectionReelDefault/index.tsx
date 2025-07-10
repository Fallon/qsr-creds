const SectionReelDefault = ({ vimeoId }: { vimeoId: string}) => {
  return (
    <section id="reel">
      <div className="aspect-video relative">
        <iframe className="absolute top-0 left-0 w-full h-full border-0" src={`https://player.vimeo.com/video/${vimeoId}?h=d7f676fc2d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`} allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="Fallon Reel 2025"></iframe>
      </div>
    </section>
  );
}

export default SectionReelDefault;