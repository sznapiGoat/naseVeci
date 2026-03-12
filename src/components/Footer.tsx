const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="font-display text-lg mb-2">Naše Věci</p>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} Naše Věci. Kavárna v Brně.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
