import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Clock
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and native Android development for optimal performance and user experience.",
      icon: <Smartphone size={36} />,
      color: "bg-primary/10 text-primary border-primary/20",
      features: [
        "Cross-platform React Native apps",
        "Native Android development",
        "iOS app development",
        "App store optimization",
        "Performance optimization",
        "Offline functionality"
      ],
      deliverables: [
        "Fully functional mobile application",
        "Source code & documentation",
        "App store deployment",
        "3 months post-launch support"
      ],
      price: "Starting from $5,000",
      timeline: "4-8 weeks"
    },
    {
      title: "Web Development",
      description: "Responsive web applications and progressive web apps using modern JavaScript frameworks and best practices.",
      icon: <Globe size={36} />,
      color: "bg-accent/10 text-accent border-accent/20",
      features: [
        "Responsive web applications",
        "Progressive Web Apps (PWA)",
        "Single Page Applications (SPA)",
        "E-commerce platforms",
        "Content Management Systems",
        "API integration"
      ],
      deliverables: [
        "Responsive web application",
        "Cross-browser compatibility",
        "SEO optimization",
        "Performance optimization"
      ],
      price: "Starting from $3,000",
      timeline: "3-6 weeks"
    },
    {
      title: "Architecture Design",
      description: "Scalable application architecture design and technical consulting for enterprise-level mobile and web solutions.",
      icon: <Layers size={36} />,
      color: "bg-secondary/10 text-secondary border-secondary/20",
      features: [
        "Scalable architecture design",
        "Microservices architecture",
        "Database design & optimization",
        "Cloud integration strategy",
        "Security implementation",
        "Code review & optimization"
      ],
      deliverables: [
        "Architecture documentation",
        "Technical specifications",
        "Implementation roadmap",
        "Best practices guidelines"
      ],
      price: "Starting from $2,000",
      timeline: "2-4 weeks"
    }
  ];

  const whyChooseMe = [
    {
      title: "10+ Years Experience",
      description: "Extensive experience across multiple domains including banking, insurance, and healthcare.",
      icon: <BarChart3 size={28} />,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Fast Delivery",
      description: "Agile development approach ensuring quick turnaround times without compromising quality.",
      icon: <Zap size={28} />,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Client-Focused",
      description: "Direct communication with clients to understand requirements and deliver tailored solutions.",
      icon: <Users size={28} />,
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive mobile and web development services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group border-2 ${service.color.split(' ')[2]} bg-card/50 backdrop-blur-sm animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className={`p-4 rounded-xl ${service.color} w-fit mb-6 group-hover:scale-110 smooth-transition`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{service.description}</p>
                
                {/* Pricing & Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 rounded-lg bg-muted/30">
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">Price Range</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-accent flex items-center justify-center gap-1">
                      <Clock size={16} />
                      {service.timeline}
                    </div>
                    <div className="text-sm text-muted-foreground">Timeline</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle size={18} className="text-primary" />
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap size={18} className="text-accent" />
                    Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="primary-gradient text-white w-full mt-auto group hover:scale-105 smooth-transition"
                >
                  Get Quote
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 smooth-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="bg-gradient-to-br from-hero-bg to-card/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-border/50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            Why Choose Me
            <div className="w-1 h-8 bg-gradient-to-b from-accent to-secondary rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="bg-card/50 border border-border/50 hover:shadow-lg smooth-transition hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className={`p-4 rounded-xl ${item.color} w-fit mx-auto mb-4 group-hover:scale-110 smooth-transition`}>
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm elegant-shadow inline-block">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your requirements and create something amazing together. Get a free consultation today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  size="lg" 
                  className="primary-gradient text-white hover:scale-105 smooth-transition group"
                >
                  <Sparkles size={18} className="mr-2 group-hover:animate-pulse" />
                  Start Your Project
                </Button>
                <Button 
                  variant="outline"
                  size="lg" 
                  className="hover:scale-105 smooth-transition border-2"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;