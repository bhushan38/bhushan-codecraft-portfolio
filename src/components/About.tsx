import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate Mobile App Developer with expertise in React Native, Android, and modern web technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Personal Bio</h3>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm Bhushan Waman More, a passionate and experienced Mobile App Developer with a strong background in React Native, Android, and full-stack technologies. Currently working as a Senior Software Engineer at Cognizant, Pune.
              </p>
              <p>
                With a Bachelor of Engineering in Information Technology (2010), I bring over a decade of experience in building reliable, scalable applications across diverse domains including banking, insurance, pharmaceutical, and social media.
              </p>
              <p>
                My expertise lies in crafting innovative mobile and web solutions that not only meet business requirements but also provide exceptional user experiences. I'm committed to staying current with the latest technologies and best practices in software development.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <Card className="elegant-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Bachelor of Engineering in Information Technology
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Calendar size={16} />
                      Graduated 2010
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Location</h4>
                    <p className="text-muted-foreground">Pune, India</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Open to remote opportunities worldwide
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-shadow hover:shadow-lg smooth-transition">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Experience</h4>
                    <p className="text-muted-foreground">10+ Years</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Banking, Insurance, Pharma, Social Media domains
                    </p>
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