import { Sparkles, Code2, Palette, Rocket } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Distinctive visual systems that turn first impressions into lasting recognition.",
  },
  {
    icon: Code2,
    title: "Web Engineering",
    desc: "Performant, accessible, beautifully crafted interfaces — from prototype to production.",
  },
  {
    icon: Sparkles,
    title: "Motion & 3D",
    desc: "Cinematic interactions and immersive visuals that make your product unforgettable.",
  },
  {
    icon: Rocket,
    title: "AI Experiences",
    desc: "Intelligent products that think, adapt and amplify what your team can do.",
  },
];

const Features = () => {
  return (
    <section id="services" className="relative py-28 border-t border-border/40">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">What we do</p>
          <h2 className="display-font text-4xl md:text-6xl leading-[0.95] mb-6">
            Designed to <span className="gradient-text">orbit</span> around your goals.
          </h2>
          <p className="text-muted-foreground text-lg">
            Four disciplines, one studio. We blend craft, code and curiosity to launch products people remember.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="hover-lift group relative p-7 rounded-2xl bg-card/60 border border-border/60 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-2xl transition-all duration-700" />
              <div className="relative flex flex-col gap-5 h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">0{i + 1}</div>
                  <h3 className="display-font text-xl mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
