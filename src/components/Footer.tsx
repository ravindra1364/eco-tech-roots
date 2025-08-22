import { MapPin, Mail, Phone, ExternalLink, Globe, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Research", href: "#research" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { 
      name: "ResearchGate", 
      icon: <Globe className="w-5 h-5" />,
      url: "https://researchgate.net/profile/ravindra-tripathi"
    },
    { 
      name: "ORCID", 
      icon: <ExternalLink className="w-5 h-5" />,
      url: "https://orcid.org/0000-0000-0000-0000"
    },
    { 
      name: "LinkedIn", 
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/ravindra-tripathi-phd"
    },
    { 
      name: "GitHub", 
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/rtripathi-wii"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">RT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dr. Ravindra Nath Tripathi</h3>
                <p className="text-primary-foreground/80 text-sm">PhD in Computer Science & Engineering</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Principal Project Associate at Wildlife Institute of India, specializing in AI, 
              UAV technology, and remote sensing for ecological conservation and wildlife monitoring.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">Wildlife Institute of India, Dehradun</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <a 
                  href="mailto:ravindra.tripathi@wii.gov.in"
                  className="text-primary-foreground/80 hover:text-white transition-organic"
                >
                  ravindra.tripathi@wii.gov.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-white transition-organic text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Networks */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Professional Networks</h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-organic text-sm group"
                >
                  <div className="group-hover:scale-110 transition-organic">
                    {link.icon}
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <span>© {currentYear} Dr. Ravindra Nath Tripathi</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">All rights reserved</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-primary-foreground/60">
              <span>Built with conservation in mind</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-forest-light rounded-full animate-pulse" />
                <span>Sustainable Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;