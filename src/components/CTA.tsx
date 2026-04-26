import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="relative py-28 border-t border-border/40 overflow-hidden">
      <div className="absolute inset-0 starfield opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container relative z-10 text-center max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Let's collaborate</p>
        <h2 className="display-font text-5xl md:text-8xl leading-[0.9] mb-8">
          <span className="text-outline-thin">Ready to</span>{" "}
          <span className="gradient-text">launch?</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Tell us about your idea. We reply within 24 hours with a clear plan and a timeline.
        </p>
        <Button
          size="lg"
          className="group bg-primary text-primary-foreground hover:bg-primary-glow font-semibold rounded-full px-8 h-14 text-base"
        >
          Start a Project
          <ArrowUpRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>

        <footer className="mt-24 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2025 Zenith Studio. Crafted in the cosmos.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default CTA;
