import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Shield, 
  MessageCircle, 
  Pill,
  Globe,
  ExternalLink
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Banking Mobile App",
      description: "Secure mobile banking experience with advanced security features, transaction management, and real-time notifications.",
      icon: <CreditCard size={32} />,
      color: "bg-primary/10 text-primary",
      technologies: ["React Native", "Kotlin", "Firebase", "Node.js"],
      features: [
        "Secure authentication & biometric login",
        "Real-time transaction monitoring",
        "Account management & transfers",
        "Push notifications for account activities"
      ],
      category: "Mobile App"
    },
    {
      title: "Insurance Management Platform",
      description: "Digital claim and policy management system streamlining insurance processes for both customers and agents.",
      icon: <Shield size={32} />,
      color: "bg-accent/10 text-accent",
      technologies: ["React Native", "TypeScript", "REST APIs", "PostgreSQL"],
      features: [
        "Policy management & renewals",
        "Digital claim submission",
        "Document upload & verification",
        "Agent dashboard & analytics"
      ],
      category: "Mobile App"
    },
    {
      title: "Social Media Platform",
      description: "Real-time chat and content sharing platform with advanced messaging features and social networking capabilities.",
      icon: <MessageCircle size={32} />,
      color: "bg-secondary/10 text-secondary",
      technologies: ["React Native", "Socket.io", "MongoDB", "Express"],
      features: [
        "Real-time messaging & video calls",
        "Content sharing & multimedia support",
        "User profiles & social connections",
        "Push notifications & offline sync"
      ],
      category: "Mobile App"
    },
    {
      title: "Pharmaceutical Mobile App",
      description: "Client-facing tools for health tracking, medication management, and e-detailing for healthcare professionals.",
      icon: <Pill size={32} />,
      color: "bg-emerald-500/10 text-emerald-600",
      technologies: ["React Native", "Android", "Firebase", "ML Kit"],
      features: [
        "Medication tracking & reminders",
        "Health data visualization",
        "Doctor-patient communication",
        "Medical records management"
      ],
      category: "Mobile App"
    },
    {
      title: "Enterprise Web Platform",
      description: "Full-stack web platform for enterprise clients with advanced analytics, user management, and reporting features.",
      icon: <Globe size={32} />,
      color: "bg-purple-500/10 text-purple-600",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Chart.js"],
      features: [
        "Advanced analytics dashboard",
        "User role management",
        "Real-time reporting",
        "API integration & automation"
      ],
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-section text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions across banking, insurance, healthcare, and social media domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm elegant-shadow hover:bg-white/15 smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${project.color}`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary hover:text-white smooth-transition"
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Interested in working together on your next project?
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg" 
            className="primary-gradient text-white"
          >
            Let's Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;