import { MapPin, Clock, Instagram, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Přijďte nás navštívit
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Kontakt</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4">
            <MapPin className="mx-auto text-accent" size={28} strokeWidth={1.5} />
            <h3 className="font-display text-xl">Kde nás najdete</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Brno – centrum<br />
              (doplňte přesnou adresu)
            </p>
          </div>

          <div className="space-y-4">
            <Clock className="mx-auto text-accent" size={28} strokeWidth={1.5} />
            <h3 className="font-display text-xl">Otevírací doba</h3>
            <div className="font-body text-muted-foreground leading-relaxed">
              <p>Po–Pá: 8:00 – 18:00</p>
              <p>So–Ne: 9:00 – 17:00</p>
            </div>
          </div>

          <div className="space-y-4">
            <Mail className="mx-auto text-accent" size={28} strokeWidth={1.5} />
            <h3 className="font-display text-xl">Spojte se s námi</h3>
            <div className="flex flex-col items-center gap-2 font-body text-muted-foreground">
              <a
                href="https://www.instagram.com/nase.veci/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Instagram size={16} />
                @nase.veci
              </a>
              <a
                href="mailto:info@naseveci.cz"
                className="hover:text-foreground transition-colors"
              >
                info@naseveci.cz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
