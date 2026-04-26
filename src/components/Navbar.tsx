import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = ["Work", "Services", "About", "Contact"];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan flex items-center justify-center font-display text-background text-sm transition-transform group-hover:rotate-12">
            ◊
          </div>
          <span className="display-font text-lg tracking-tight">ZENITH</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-flex bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-all font-semibold"
          >
            Let's Talk
          </Button>
          <button className="md:hidden text-foreground" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
