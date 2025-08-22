import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Send,
  Globe,
  Github,
  Linkedin
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-river-blue" />,
      label: "Email",
      value: "ravindra.tripathi@wii.gov.in",
      action: "mailto:ravindra.tripathi@wii.gov.in"
    },
    {
      icon: <Phone className="w-6 h-6 text-forest-deep" />,
      label: "Phone",
      value: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6 text-earth-brown" />,
      label: "Location",
      value: "Wildlife Institute of India, Dehradun",
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "ResearchGate",
      icon: <Globe className="w-5 h-5" />,
      url: "https://researchgate.net/profile/ravindra-tripathi",
      color: "bg-river-blue/10 text-river-blue hover:bg-river-blue/20"
    },
    {
      name: "ORCID",
      icon: <ExternalLink className="w-5 h-5" />,
      url: "https://orcid.org/0000-0000-0000-0000",
      color: "bg-forest-deep/10 text-forest-deep hover:bg-forest-deep/20"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ravindra-tripathi-phd",
      color: "bg-river-blue/10 text-river-blue hover:bg-river-blue/20"
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/rtripathi-wii",
      color: "bg-foreground/10 text-foreground hover:bg-foreground/20"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or discussing conservation technology? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-organic">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                <Send className="w-6 h-6" />
                <span>Send a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Your first name"
                      className="border-border/50 focus:border-forest-light"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Your last name"
                      className="border-border/50 focus:border-forest-light"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-border/50 focus:border-forest-light"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="What's this about?"
                    className="border-border/50 focus:border-forest-light"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project, collaboration idea, or question..."
                    rows={6}
                    className="border-border/50 focus:border-forest-light resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-forest hover:opacity-90 text-white shadow-organic ripple-effect"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="shadow-organic">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-muted rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.action ? (
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-organic"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Professional Profiles */}
            <Card className="shadow-organic">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Professional Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-organic ${link.color} ripple-effect`}
                    >
                      {link.icon}
                      <span className="font-medium">{link.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Research Collaboration */}
            <Card className="bg-gradient-aerial border-border/50">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-semibold text-primary">
                  Open to Collaboration
                </h3>
                <p className="text-muted-foreground">
                  I'm always interested in interdisciplinary research opportunities, 
                  especially those combining AI, remote sensing, and conservation science.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-forest-light/20 text-forest-deep rounded-full text-sm">
                    Research Partnerships
                  </span>
                  <span className="px-3 py-1 bg-river-light/20 text-river-blue rounded-full text-sm">
                    PhD Supervision
                  </span>
                  <span className="px-3 py-1 bg-earth-light/30 text-earth-brown rounded-full text-sm">
                    Consulting
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;