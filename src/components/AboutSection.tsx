const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Náš příběh
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-10">O nás</h2>
        <div className="space-y-6 font-body text-lg leading-relaxed text-secondary-foreground/80">
          <p>
            Naše Věci je malá kavárna v Brně, kde věříme, že ty nejlepší věci v životě
            jsou ty jednoduché – dobře připravená káva, čerstvé pečivo a příjemná společnost.
          </p>
          <p>
            Pracujeme s lokálními pražírnami a snažíme se, aby každý šálek měl svůj příběh.
            Přijďte se posadit, zpomalit a vychutnat si chvíli pro sebe.
          </p>
        </div>
        <div className="mt-12 flex items-center justify-center gap-12 text-muted-foreground font-body text-sm tracking-wider uppercase">
          <div>
            <span className="block font-display text-3xl text-foreground mb-1">2023</span>
            Založeno
          </div>
          <div className="w-px h-12 bg-border" />
          <div>
            <span className="block font-display text-3xl text-foreground mb-1">Brno</span>
            Centrum
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
