import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Layers, 
  Zap,
  Users,
  BarChart3
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and native Android development for optimal performance and user experience.",
      icon: <Smartphone size={32} />,
      color: "bg-primary/10 text-primary",
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
      ]
    },
    {
      title: "Web Development",
      description: "Responsive web applications and progressive web apps using modern JavaScript frameworks and best practices.",
      icon: <Globe size={32} />,
      color: "bg-accent/10 text-accent",
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
      ]
    },
    {
      title: "Architecture Design",
      description: "Scalable application architecture design and technical consulting for enterprise-level mobile and web solutions.",
      icon: <Layers size={32} />,
      color: "bg-secondary/10 text-secondary",
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
      ]
    }
  ];

  const whyChooseMe = [
    {
      title: "10+ Years Experience",
      description: "Extensive experience across multiple domains including banking, insurance, and healthcare.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Fast Delivery",
      description: "Agile development approach ensuring quick turnaround times without compromising quality.",
      icon: <Zap size={24} />
    },
    {
      title: "Client-Focused",
      description: "Direct communication with clients to understand requirements and deliver tailored solutions.",
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive mobile and web development services tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="elegant-shadow hover:shadow-lg smooth-transition h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className={`p-4 rounded-xl ${service.color} w-fit mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
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
                  <h4 className="font-semibold mb-3">Deliverables:</h4>
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
                  className="primary-gradient text-white w-full mt-auto"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Me */}
        <div className="bg-hero-bg rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Me</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseMe.map((item, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mx-auto mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together.
          </p>
          <Button 
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            size="lg" 
            className="primary-gradient text-white"
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;