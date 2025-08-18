import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Open to roles · Remote/
            <span className="line-through" aria-hidden="true">
              On-site
            </span>
            <span className="sr-only">On-site not preferred</span>
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6">
            Full Stack
            <span className="block text-primary">Developer</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-xl text-muted-foreground">
            I build fast, accessible web apps with{" "}
            <span className="text-primary">React</span>,
            <span className="text-primary"> Node.js</span> and{" "}
            <span className="text-primary">Tailwind</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <nav
            aria-label="Social Links"
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/carabetcorneliu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:carabet.corneliu@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors motion-safe:animate-bounce"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </a>
    </section>
  );
}
