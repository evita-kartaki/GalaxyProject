import { ArrowUpRight } from "lucide-react";
import ParticlePlanet from "@/components/ParticlePlanet";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Starfield + glow */}
      <div className="absolute inset-0 starfield animate-twinkle" aria-hidden="true" />
      <div className="absolute inset-0 glow-aura" aria-hidden="true" />

      <div className="container relative z-10 grid lg:grid-cols-12 gap-10 items-center">
        {/* Text */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 bg-card/40 backdrop-blur text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
            Digital Studio · Est. 2025
          </span>

          <h1 className="display-font text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] tracking-tight">
            <span className="block text-outline">BOOST</span>
            <span className="block text-outline">YOUR</span>
            <span className="block gradient-text">BRAND.</span>
          </h1>

          <p className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            We craft <span className="text-foreground font-semibold">digital experiences</span> at the
            intersection between <span className="text-foreground font-semibold">design</span> and{" "}
            <span className="text-foreground font-semibold">technology</span>, helping our clients{" "}
            <span className="gradient-text font-semibold">imagine the future</span>, today.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground hover:bg-primary-glow font-semibold rounded-full px-7 h-12"
            >
              Start a Project
              <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-border/60 bg-transparent hover:bg-card/60 px-7 h-12 font-semibold"
            >
              View Our Work
            </Button>
          </div>
        </div>

        {/* 3D Planet */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-tr from-primary/25 via-transparent to-cyan/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="relative animate-float">
            <ParticlePlanet />
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-6 left-0 right-0 z-10 overflow-hidden pointer-events-none">
        <div className="flex items-center gap-12 px-6 text-xs uppercase tracking-[0.3em] text-muted-foreground/60">
          <span>◊ Branding</span>
          <span>◊ Web Design</span>
          <span>◊ Motion</span>
          <span>◊ Strategy</span>
          <span>◊ Development</span>
          <span className="hidden md:inline">◊ AI Experiences</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
