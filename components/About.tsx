import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function About() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications using React and TypeScript."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Built and maintained web applications using Node.js, React, and PostgreSQL."
    },
    {
      title: "Junior Developer",
      company: "StartupTech",
      period: "2019 - 2020",
      description: "Contributed to various projects while learning modern web development practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl mb-6">
              Passionate about creating digital solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              With over 5 years of experience in web development, I've helped startups and 
              established companies build scalable, user-friendly applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl mb-6">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I started my journey in web development during college, fascinated by the 
                  ability to bring ideas to life through code. What began as a curiosity 
                  quickly became a passion.
                </p>
                <p>
                  Today, I specialize in building modern web applications with a focus on 
                  performance, accessibility, and user experience. I believe in writing 
                  clean, maintainable code that solves real problems.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with the 
                  developer community.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl mb-6">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-medium">{exp.title}</h4>
                        <Badge variant="secondary" className="text-xs mt-1 sm:mt-0">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-sm text-primary mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}