import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Mail, Github, Linkedin, Download, Play, Star, Code, Smartphone } from "lucide-react";
import bhushanProfile from "@/assets/bhushan-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    { number: "10+", label: "Years Experience", icon: <Star size={16} /> },
    { number: "50+", label: "Projects Delivered", icon: <Code size={16} /> },
    { number: "6", label: "Industry Domains", icon: <Smartphone size={16} /> }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in elegant-shadow">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow"></div>
              Available for new opportunities
            </div>
            
            {/* Main Heading */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Hey,{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                  there
                </span>
              </h1>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl md:text-6xl font-black mb-6 relative">
                I AM<br />
                <span className="relative text-secondary">
                  BHUSHAN
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </span>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-1xl md:text-2xl font-bold text-secondary mb-2">
                MOBILE APP & WEB
              </div>
              <div className="text-1xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                DEVELOPER
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Senior Software Engineer at Cognizant, Pune. Crafting innovative mobile & web solutions using React Native, Android, and modern web technologies.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="primary-gradient text-white hover:scale-105 smooth-transition elegant-shadow group"
              >
                <Play size={16} className="mr-2 group-hover:animate-pulse" />
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="smooth-transition hover:scale-105 hover:shadow-lg border-2"
              >
                <Mail size={16} className="mr-2" />
                Get in Touch
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="smooth-transition hover:scale-105 text-primary hover:bg-primary/10"
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </div>
            
            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              {achievements.map((achievement, index) => (
                <Card key={index} className="elegant-shadow hover:shadow-lg smooth-transition hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardContent className="p-4 text-center">
                    <div className="flex items-center justify-center gap-1 text-primary mb-1">
                      {achievement.icon}
                      <span className="text-2xl font-bold">{achievement.number}</span>
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{achievement.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <a
                href="mailto:morebhushan18@gmail.com"
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white smooth-transition elegant-shadow hover:scale-110 group"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com/in/bhushan-more-77829117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white smooth-transition elegant-shadow hover:scale-110 group"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://github.com/bhushan38"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white smooth-transition elegant-shadow hover:scale-110 group"
              >
                <Github size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>
          
          {/* Profile Image Section */}
          <div className="flex-1 lg:flex-none animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative">
              {/* Main Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary p-1 animate-glow">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={bhushanProfile}
                      alt="Bhushan Waman More"
                      className="w-full h-full object-cover hover:scale-105 smooth-transition"
                    />
                  </div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute -top-4 -right-4 p-3 bg-card/90 backdrop-blur-sm rounded-full elegant-shadow animate-float border border-border/50">
                  <Code size={24} className="text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 bg-card/90 backdrop-blur-sm rounded-full elegant-shadow animate-float border border-border/50" style={{ animationDelay: '1s' }}>
                  <Smartphone size={24} className="text-accent" />
                </div>
                <div className="absolute top-1/2 -left-8 p-3 bg-card/90 backdrop-blur-sm rounded-full elegant-shadow animate-float border border-border/50" style={{ animationDelay: '2s' }}>
                  <Star size={24} className="text-secondary" />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 via-transparent to-accent/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary hover:text-white smooth-transition elegant-shadow group"
          >
            <ArrowDown size={20} className="group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;