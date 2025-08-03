import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  Shield, 
  MessageCircle, 
  Pill,
  Globe,
  ExternalLink,
  GitBranch,
  Zap,
  Users,
  Star
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Banking Mobile App",
      description: "Secure mobile banking experience with advanced security features, transaction management, and real-time notifications.",
      icon: <CreditCard size={36} />,
      color: "bg-primary/10 text-primary border-primary/20",
      technologies: ["React Native", "Kotlin", "Firebase", "Node.js"],
      features: [
        "Secure authentication & biometric login",
        "Real-time transaction monitoring",
        "Account management & transfers",
        "Push notifications for account activities"
      ],
      metrics: {
        users: "50K+",
        rating: "4.8",
        downloads: "100K+"
      },
      category: "Mobile App"
    },
    {
      title: "Insurance Management Platform",
      description: "Digital claim and policy management system streamlining insurance processes for both customers and agents.",
      icon: <Shield size={36} />,
      color: "bg-accent/10 text-accent border-accent/20",
      technologies: ["React Native", "TypeScript", "REST APIs", "PostgreSQL"],
      features: [
        "Policy management & renewals",
        "Digital claim submission",
        "Document upload & verification",
        "Agent dashboard & analytics"
      ],
      metrics: {
        users: "25K+",
        rating: "4.6",
        downloads: "75K+"
      },
      category: "Mobile App"
    },
    {
      title: "Social Media Platform",
      description: "Real-time chat and content sharing platform with advanced messaging features and social networking capabilities.",
      icon: <MessageCircle size={36} />,
      color: "bg-secondary/10 text-secondary border-secondary/20",
      technologies: ["React Native", "Socket.io", "MongoDB", "Express"],
      features: [
        "Real-time messaging & video calls",
        "Content sharing & multimedia support",
        "User profiles & social connections",
        "Push notifications & offline sync"
      ],
      metrics: {
        users: "100K+",
        rating: "4.7",
        downloads: "200K+"
      },
      category: "Mobile App"
    },
    {
      title: "Pharmaceutical Mobile App",
      description: "Client-facing tools for health tracking, medication management, and e-detailing for healthcare professionals.",
      icon: <Pill size={36} />,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      technologies: ["React Native", "Android", "Firebase", "ML Kit"],
      features: [
        "Medication tracking & reminders",
        "Health data visualization",
        "Doctor-patient communication",
        "Medical records management"
      ],
      metrics: {
        users: "30K+",
        rating: "4.5",
        downloads: "60K+"
      },
      category: "Mobile App"
    },
    {
      title: "Enterprise Web Platform",
      description: "Full-stack web platform for enterprise clients with advanced analytics, user management, and reporting features.",
      icon: <Globe size={36} />,
      color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      technologies: ["ReactJS", "Node.js", "MongoDB", "Chart.js"],
      features: [
        "Advanced analytics dashboard",
        "User role management",
        "Real-time reporting",
        "API integration & automation"
      ],
      metrics: {
        users: "15K+",
        rating: "4.9",
        downloads: "40K+"
      },
      category: "Web App"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-section text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/30">
            <GitBranch size={16} />
            Portfolio Showcase
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Recent{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions across banking, insurance, healthcare, and social media domains
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`bg-white/5 border-2 ${project.color.split(' ')[2]} backdrop-blur-sm elegant-shadow hover:bg-white/10 smooth-transition hover:scale-105 group animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-xl ${project.color} group-hover:scale-110 smooth-transition`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{project.metrics.users}</div>
                        <div className="text-xs text-gray-400">Active Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-accent flex items-center justify-center gap-1">
                          <Star size={16} />
                          {project.metrics.rating}
                        </div>
                        <div className="text-xs text-gray-400">App Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{project.metrics.downloads}</div>
                        <div className="text-xs text-gray-400">Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-primary" />
                    Key Features
                  </h4>
                  <div className="grid gap-3">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 smooth-transition">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 animate-glow"></span>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Users size={18} className="text-accent" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 smooth-transition cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className="border-primary/30 text-primary hover:bg-primary hover:text-white smooth-transition flex-1 group"
                  >
                    <ExternalLink size={16} className="mr-2 group-hover:animate-pulse" />
                    View Details
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-gray-300 hover:text-white hover:bg-white/10 smooth-transition"
                  >
                    <GitBranch size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm elegant-shadow inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl">
                Let's collaborate on your next groundbreaking project and create exceptional user experiences.
              </p>
              <Button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg" 
                className="primary-gradient text-white hover:scale-105 smooth-transition group"
              >
                <Zap size={18} className="mr-2 group-hover:animate-pulse" />
                Let's Discuss Your Project
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;