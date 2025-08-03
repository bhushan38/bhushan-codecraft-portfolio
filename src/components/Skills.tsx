import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Code, 
  Settings,
  Database,
  Palette
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={24} />,
      color: "bg-primary/10 text-primary",
      skills: ["React Native", "Android", "iOS", "Flutter", "Kotlin", "Swift"]
    },
    {
      title: "Web Development",
      icon: <Globe size={24} />,
      color: "bg-accent/10 text-accent",
      skills: ["ReactJS", "Next.js", "Vue.js", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      color: "bg-secondary/10 text-secondary",
      skills: ["JavaScript", "TypeScript", "Kotlin", "Python", "Java", "Dart"]
    },
    {
      title: "Tools & Platforms",
      icon: <Settings size={24} />,
      color: "bg-emerald-500/10 text-emerald-600",
      skills: ["Git", "GitHub", "VSCode", "Android Studio", "Xcode", "Firebase"]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      color: "bg-orange-500/10 text-orange-600",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Design & Testing",
      icon: <Palette size={24} />,
      color: "bg-purple-500/10 text-purple-600",
      skills: ["Figma", "Adobe XD", "Jest", "Detox", "Unit Testing", "UI/UX Design"]
    }
  ];

  const highlights = [
    {
      title: "Cross-Platform Expertise",
      description: "Building apps that work seamlessly across iOS and Android using React Native"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing app performance for smooth user experiences and faster load times"
    },
    {
      title: "Clean Architecture",
      description: "Following SOLID principles and clean code practices for maintainable applications"
    },
    {
      title: "Agile Development",
      description: "Experienced in Agile/Scrum methodologies for efficient project delivery"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive skill set in mobile and web development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="elegant-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="smooth-transition hover:bg-primary hover:text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="bg-hero-bg rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">What Sets Me Apart</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;