import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

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
      technologies: ["React Native", "Android", "JavaScript", "Kotlin", "TypeScript"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-section text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional journey in mobile and web development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-lg bg-primary/20 text-primary">
                        <Building size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-gray-300">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* Responsibilities & Technologies */}
                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                    <ul className="space-y-2 text-gray-300 mb-6">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>

                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="border-primary/30 text-primary bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4</div>
            <div className="text-gray-300">Industry Domains</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;