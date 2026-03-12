import heroCafe from "@/assets/hero-cafe.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCafe}
          alt="Interiér kavárny Naše Věci v Brně"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      <div className="relative z-10 text-center px-6 animate-fade-in">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Kavárna v srdci Brna
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-primary-foreground font-medium tracking-tight">
          Naše Věci
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/70 mt-6 max-w-md mx-auto leading-relaxed">
          Místo, kde se potkává dobrá káva s&nbsp;klidnou atmosférou
        </p>
        <a
          href="#menu"
          className="inline-block mt-10 px-8 py-3 border border-primary-foreground/40 text-primary-foreground text-sm tracking-wider uppercase font-body hover:bg-primary-foreground/10 transition-colors"
        >
          Prohlédnout menu
        </a>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors group"
        aria-label="Scrollovat dolů"
      >
        <span className="font-body text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-primary-foreground/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-primary-foreground/70 animate-scroll-line" style={{height: '40%'}} />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
