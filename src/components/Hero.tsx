import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Github, Linkedin } from "lucide-react";
import bhushanProfile from "@/assets/bhushan-profile.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hey,{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                there
              </span>
            </h1>
            
            <div className="text-6xl md:text-8xl font-black mb-6">
              I AM<br />
              <span className="text-secondary">BHUSHAN</span>
            </div>
            
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              MOBILE APP & WEB<br />
              DEVELOPER
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Senior Software Engineer at Cognizant, Pune. Crafting innovative mobile & web solutions using React Native, Android, and modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("#projects")}
                size="lg"
                className="primary-gradient text-white"
              >
                View My Work
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                variant="outline"
                size="lg"
                className="smooth-transition"
              >
                Get in Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="mailto:morebhushan18@gmail.com"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-white smooth-transition elegant-shadow"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/bhushan-more-77829117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-white smooth-transition elegant-shadow"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/bhushan38"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card border border-border hover:bg-primary hover:text-white smooth-transition elegant-shadow"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-1 lg:flex-none">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden elegant-shadow">
                <img
                  src={bhushanProfile}
                  alt="Bhushan Waman More"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="p-2 rounded-full bg-card border border-border hover:bg-primary hover:text-white smooth-transition"
          >
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;