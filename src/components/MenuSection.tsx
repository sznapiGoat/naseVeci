import menuBg from "@/assets/menu-bg.jpg";

const menuItems = {
  "Káva": [
    { name: "Espresso", price: "55 Kč" },
    { name: "Cappuccino", price: "75 Kč" },
    { name: "Flat White", price: "85 Kč" },
    { name: "Filtrovaná káva", price: "70 Kč" },
    { name: "Matcha Latte", price: "90 Kč" },
  ],
  "Nápoje": [
    { name: "Domácí limonáda", price: "65 Kč" },
    { name: "Čaj (výběr)", price: "55 Kč" },
    { name: "Horká čokoláda", price: "75 Kč" },
    { name: "Fresh juice", price: "80 Kč" },
  ],
  "Něco dobrého": [
    { name: "Croissant", price: "55 Kč" },
    { name: "Domácí dort (denní)", price: "85 Kč" },
    { name: "Granola bowl", price: "110 Kč" },
    { name: "Toast s avokádem", price: "125 Kč" },
  ],
};

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Co u nás najdete
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">Menu</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          <div className="space-y-12">
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-display text-2xl mb-6 italic">{category}</h3>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline border-b border-border pb-3">
                      <span className="font-body text-foreground">{item.name}</span>
                      <span className="font-body text-muted-foreground text-sm ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block sticky top-24">
            <img
              src={menuBg}
              alt="Naše nabídka – káva a pečivo"
              className="w-full rounded-sm shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
