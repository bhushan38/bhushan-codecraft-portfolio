import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar, Award, TrendingUp, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      title: "10+ Years",
      subtitle: "Experience",
      description: "Extensive expertise across multiple domains",
      icon: <TrendingUp size={24} />,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "6 Domains",
      subtitle: "Industry Experience",
      description: "Banking, Insurance, Pharma, Retail and eCommerce, Health, Social Media",
      icon: <Award size={24} />,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "100+",
      subtitle: "Happy Clients",
      description: "Delivering excellence consistently",
      icon: <Users size={24} />,
      color: "bg-secondary/10 text-secondary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap size={16} />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Passionate Developer with{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Proven Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building innovative solutions across industries with cutting-edge technologies
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {highlights.map((highlight, index) => (
            <Card key={index} className="elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 bg-card/50 backdrop-blur-sm border border-border/50 group">
              <CardContent className="p-6 text-center">
                <div className={`p-4 rounded-xl ${highlight.color} w-fit mx-auto mb-4 group-hover:scale-110 smooth-transition`}>
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold mb-1">{highlight.title}</h3>
                <p className="text-primary font-semibold mb-2">{highlight.subtitle}</p>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              My Story
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full"></span>
                I'm Bhushan Waman More, a passionate and experienced Mobile App Developer with a strong background in React Native, Android, and full-stack technologies. Currently working as a Senior Software Engineer at Cognizant, Pune.
              </p>
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full"></span>
                With a Bachelor of Engineering in Information Technology (2010), I bring over a decade of experience in building reliable, scalable applications across diverse domains including banking, insurance, pharmaceutical, and social media.
              </p>
              <p className="relative pl-6">
                <span className="absolute left-0 top-2 w-2 h-2 bg-secondary rounded-full"></span>
                My expertise lies in crafting innovative mobile and web solutions that not only meet business requirements but also provide exceptional user experiences. I'm committed to staying current with the latest technologies and best practices.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Core Specializations</h4>
              <div className="flex flex-wrap gap-3">
                {["React Native", "Android Development", "Web Technologies", "UI/UX Design", "Team Leadership"].map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-white smooth-transition cursor-pointer px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 smooth-transition">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground font-medium">
                      Bachelor of Engineering in Information Technology
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      <span>Graduated 2010</span>
                      <Badge variant="outline" className="ml-2">
                        First Class
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:scale-110 smooth-transition">
                    <MapPin size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground font-medium">Pune, India</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Open to remote opportunities worldwide
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-glow"></div>
                      <span className="text-sm text-green-600 font-medium">Available for projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover:shadow-xl smooth-transition hover:scale-105 group bg-gradient-to-br from-secondary/5 to-primary/5 border border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary group-hover:scale-110 smooth-transition">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">Professional Focus</h4>
                    <p className="text-muted-foreground font-medium">
                      Enterprise Mobile & Web Solutions
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="text-xs">Banking</Badge>
                      <Badge variant="outline" className="text-xs">Insurance</Badge>
                      <Badge variant="outline" className="text-xs">Healthcare</Badge>
                      <Badge variant="outline" className="text-xs">Social Media</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;