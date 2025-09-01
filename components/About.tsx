import { Badge } from "./ui/badge";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-12">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl mb-12">
              Hi, i'm Cornel. Nice to meet you.
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto mb-8">
              I’m a web developer who enjoys turning ideas into working
              applications. Over the past year, I’ve built several projects that
              strengthened my understanding of modern web technologies and good
              coding practices. I’m especially interested in creating clean,
              responsive, and user-friendly experiences.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I’m always eager to learn, improve my skills, and collaborate with
              others. My goal is to keep growing as a developer while
              contributing to meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
