import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, Trophy, Zap, Users, Target } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Cognizant",
      location: "Pune, India",
      period: "Current Position",
      type: "Full-time",
      responsibilities: [
        "Lead mobile architecture design and implementation for enterprise applications",
        "Collaborate with cross-functional teams to deliver high-quality mobile solutions",
        "Conduct code reviews and mentor junior developers",
        "Work directly with clients to understand requirements and deliver solutions",
        "Implement best practices for React Native and Android development",
        "Optimize app performance and ensure scalability across different platforms"
      ],
      technologies: ["React Native", "Android", "JavaScript", "Kotlin", "TypeScript"],
      achievements: [
        "Reduced app crash rate by 85% through performance optimization",
        "Led team of 8 developers across 3 major projects",
        "Delivered 12 successful mobile applications on time"
      ]
    }
  ];

  const metrics = [
    {
      number: "10+",
      label: "Years Experience",
      icon: <Trophy size={24} />,
      color: "text-primary"
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Target size={24} />,
      color: "text-accent"
    },
    {
      number: "6",
      label: "Industry Domains",
      icon: <Building size={24} />,
      color: "text-secondary"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Users size={24} />,
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-section text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30">
            <Building size={16} />
            Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building exceptional software solutions across multiple industries with proven results
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm elegant-shadow hover:bg-white/10 smooth-transition group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-primary/20 text-primary group-hover:scale-110 smooth-transition backdrop-blur-sm">
                        <Building size={32} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center gap-3">
                        <MapPin size={18} className="text-accent" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar size={18} className="text-accent" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 smooth-transition">
                        <Zap size={14} className="mr-1" />
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Trophy size={18} className="text-primary" />
                        Key Achievements
                      </h4>
                      <div className="grid gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 smooth-transition">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></div>
                            <span className="text-gray-200">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Target size={18} className="text-accent" />
                        Key Responsibilities
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{responsibility}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Technologies & Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge 
                            key={idx} 
                            variant="outline" 
                            className="border-primary/30 text-primary bg-primary/10 hover:bg-primary/20 smooth-transition cursor-pointer"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm elegant-shadow hover:bg-white/10 smooth-transition hover:scale-105 group">
              <CardContent className="p-6 text-center">
                <div className={`${metric.color} mb-3 flex justify-center group-hover:scale-110 smooth-transition`}>
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{metric.number}</div>
                <div className="text-gray-300 text-sm font-medium">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;