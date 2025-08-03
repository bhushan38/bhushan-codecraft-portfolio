import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Code, 
  Settings,
  Database,
  Palette,
  Zap,
  Shield,
  Layers,
  Brain
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={28} />,
      color: "bg-primary/10 text-primary border-primary/20",
      skills: ["React Native", "Android", "iOS", "Flutter", "Kotlin", "Swift"],
      level: 95
    },
    {
      title: "Web Development",
      icon: <Globe size={28} />,
      color: "bg-accent/10 text-accent border-accent/20",
      skills: ["ReactJS", "Next.js", "Vue.js", "HTML5", "CSS3", "Responsive Design"],
      level: 90
    },
    {
      title: "Programming Languages",
      icon: <Code size={28} />,
      color: "bg-secondary/10 text-secondary border-secondary/20",
      skills: ["JavaScript", "TypeScript", "Kotlin", "Python", "Java", "Dart"],
      level: 92
    },
    {
      title: "Tools & Platforms",
      icon: <Settings size={28} />,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      skills: ["Git", "GitHub", "VSCode", "Android Studio", "Xcode", "Firebase"],
      level: 88
    },
    {
      title: "Backend & Database",
      icon: <Database size={28} />,
      color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "PostgreSQL", "REST APIs"],
      level: 85
    },
    {
      title: "Design & Testing",
      icon: <Palette size={28} />,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      skills: ["Figma", "Adobe XD", "Jest", "Detox", "Unit Testing", "UI/UX Design"],
      level: 80
    }
  ];

  const highlights = [
    {
      title: "Cross-Platform Expertise",
      description: "Building apps that work seamlessly across iOS and Android using React Native",
      icon: <Layers size={24} />,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing app performance for smooth user experiences and faster load times",
      icon: <Zap size={24} />,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Security First",
      description: "Implementing robust security measures for banking and financial applications",
      icon: <Shield size={24} />,
      color: "bg-secondary/10 text-secondary"
    },
    {
      title: "AI Integration",
      description: "Leveraging AI and ML technologies for intelligent mobile solutions",
      icon: <Brain size={24} />,
      color: "bg-emerald-500/10 text-emerald-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code size={16} />
            Technical Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive skill set across the entire mobile and web development ecosystem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className={`elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group border-2 ${category.color.split(' ')[2]} bg-card/50 backdrop-blur-sm animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${category.color} group-hover:scale-110 smooth-transition`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <div className="w-full bg-muted rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r from-primary to-accent smooth-transition`}
                        style={{ width: `${category.level}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">{category.level}% Proficiency</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="smooth-transition hover:bg-primary hover:text-white cursor-pointer text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-gradient-to-br from-hero-bg to-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            What Sets Me Apart
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-secondary rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 border border-border/50 hover:shadow-lg smooth-transition hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-xl ${highlight.color} group-hover:scale-110 smooth-transition flex-shrink-0`}>
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Stack Visualization */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl font-bold mb-8">Core Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["React Native", "Android", "JavaScript", "TypeScript", "Node.js", "MongoDB", "Firebase", "Git"].map((tech, index) => (
              <div key={index} className="group">
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 text-base font-medium hover:bg-primary hover:text-white smooth-transition cursor-pointer border-2 hover:scale-110"
                >
                  {tech}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;