import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  User, 
  FileText, 
  FolderOpen, 
  Briefcase, 
  Award, 
  Mail,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const sections = [
    {
      title: "About Me",
      description: "Learn about my journey in conservation technology and expertise in AI, UAVs, and remote sensing.",
      icon: <User className="w-8 h-8 text-forest-deep" />,
      href: "/about",
      color: "border-l-forest-deep bg-forest-light/5"
    },
    {
      title: "Research & Publications",
      description: "Explore my peer-reviewed research in machine learning applications for environmental science.",
      icon: <FileText className="w-8 h-8 text-river-blue" />,
      href: "/research",
      color: "border-l-river-blue bg-river-light/5"
    },
    {
      title: "Conservation Projects",
      description: "Discover innovative technology solutions for wildlife conservation and ecosystem monitoring.",
      icon: <FolderOpen className="w-8 h-8 text-wetland" />,
      href: "/projects",
      color: "border-l-wetland bg-wetland/5"
    },
    {
      title: "Experience & Education",
      description: "My academic journey and professional growth in conservation technology and environmental science.",
      icon: <Briefcase className="w-8 h-8 text-earth-brown" />,
      href: "/experience",
      color: "border-l-earth-brown bg-earth-light/5"
    },
    {
      title: "Awards & Certifications",
      description: "Recognition for contributions to conservation science and technology innovation.",
      icon: <Award className="w-8 h-8 text-sunrise" />,
      href: "/awards",
      color: "border-l-sunrise bg-sunrise/10"
    },
    {
      title: "Contact Me",
      description: "Get in touch for collaboration, research opportunities, or discussing conservation technology.",
      icon: <Mail className="w-8 h-8 text-primary" />,
      href: "/contact",
      color: "border-l-primary bg-primary/5"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        {/* Navigation Cards Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary mb-4">
                Explore My Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dive into different aspects of my research and professional journey in conservation technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section, index) => (
                <Card 
                  key={index}
                  className={`group hover:shadow-organic transition-organic border-l-4 ${section.color} ripple-effect`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-organic">
                        {section.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-organic" />
                    </div>
                    <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {section.description}
                    </p>
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-border/50 hover:bg-muted/50"
                    >
                      <Link to={section.href}>
                        Explore
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
