import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-dark-section text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">
              Bhushan<span className="text-primary">.</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Senior Software Engineer specializing in mobile and web development. 
              Building innovative solutions for the digital world.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="mailto:morebhushan18@gmail.com"
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-primary hover:border-primary smooth-transition group backdrop-blur-sm"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://linkedin.com/in/bhushan-more-77829117"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-primary hover:border-primary smooth-transition group backdrop-blur-sm"
              >
                <Linkedin size={20} className="group-hover:animate-pulse" />
              </a>
              <a
                href="https://github.com/bhushan38"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-primary hover:border-primary smooth-transition group backdrop-blur-sm"
              >
                <Github size={20} className="group-hover:animate-pulse" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-gray-400 hover:text-white smooth-transition hover:translate-x-1"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3 text-gray-400">
              <p>Pune, India</p>
              <p>Available for remote work</p>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
                <span className="text-green-400 font-medium">Currently Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 flex items-center gap-2">
              <span>© {currentYear} Bhushan Waman More. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400 flex items-center gap-2">
                Built with <Heart size={16} className="text-red-500 animate-pulse" /> using React & TypeScript
              </p>
              
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-white/10 smooth-transition group"
              >
                <ArrowUp size={16} className="group-hover:animate-bounce" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;