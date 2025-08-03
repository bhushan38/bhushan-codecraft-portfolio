import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle2,
  Sparkles
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      title: "Email",
      value: "morebhushan18@gmail.com",
      href: "mailto:morebhushan18@gmail.com",
      icon: <Mail size={24} />,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/bhushan-more-77829117",
      href: "https://linkedin.com/in/bhushan-more-77829117",
      icon: <Linkedin size={24} />,
      color: "bg-blue-500/10 text-blue-600"
    },
    {
      title: "GitHub",
      value: "github.com/bhushan38",
      href: "https://github.com/bhushan38",
      icon: <Github size={24} />,
      color: "bg-gray-500/10 text-gray-600"
    },
    {
      title: "Location",
      value: "Pune, India",
      href: null,
      icon: <MapPin size={24} />,
      color: "bg-green-500/10 text-green-600"
    }
  ];

  const quickFacts = [
    {
      title: "Response Time",
      value: "< 24 hours",
      icon: <Clock size={20} />
    },
    {
      title: "Project Success Rate",
      value: "100%",
      icon: <CheckCircle2 size={20} />
    },
    {
      title: "Languages",
      value: "English, Hindi, Marathi",
      icon: <MessageSquare size={20} />
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send size={16} />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Let's Connect
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${info.color} group-hover:scale-110 smooth-transition`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary smooth-transition break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Facts */}
            {/* <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm elegant-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-primary" />
                  Quick Facts
                </h4>
                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">
                        {fact.icon}
                      </div>
                      <div>
                        <span className="font-medium">{fact.title}:</span>
                        <span className="text-muted-foreground ml-2">{fact.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Availability Status */}
            {/* <Card className="mt-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 elegant-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-glow"></div>
                  <div>
                    <h4 className="font-semibold text-green-700">Currently Available</h4>
                    <p className="text-sm text-green-600">
                      Open for new projects and opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Form */}
          {/* <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="elegant-shadow hover:shadow-xl smooth-transition bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send size={24} className="text-primary" />
                  Send Message
                </h3> */}
                {/* <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full transition-all hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full transition-all hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      className="w-full min-h-[120px] transition-all hover:border-primary/50 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full primary-gradient text-white hover:scale-105 smooth-transition group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={16} className="mr-2 group-hover:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form> */}

                {/* Form Benefits */}
                {/* <div className="mt-6 p-4 rounded-lg bg-muted/30">
                  <h5 className="font-medium mb-2 text-sm">What happens next?</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" />
                      Response within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" />
                      Free project consultation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" />
                      Detailed project proposal
                    </li>
                  </ul>
                </div> */}
              {/* </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;