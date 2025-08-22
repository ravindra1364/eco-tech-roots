import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Star, Trophy, FileCheck, Leaf, Droplets, Bird, TreePine } from "lucide-react";

const AwardsSection = () => {
  const awards = [
    {
      title: "Excellence in Conservation Technology",
      organization: "International Union for Conservation of Nature (IUCN)",
      year: "2023",
      description: "Recognized for innovative use of AI and UAV technology in wildlife conservation efforts.",
      icon: <Trophy className="w-8 h-8 text-sunrise" />,
      type: "International Award"
    },
    {
      title: "Best Research Paper Award",
      organization: "IEEE Conference on Environmental Informatics",
      year: "2023", 
      description: "Outstanding contribution to machine learning applications in ecosystem monitoring.",
      icon: <Award className="w-8 h-8 text-forest-deep" />,
      type: "Research Excellence"
    },
    {
      title: "Young Scientist Fellowship",
      organization: "Department of Science & Technology, India",
      year: "2022",
      description: "National fellowship for promising researchers in environmental technology.",
      icon: <Star className="w-8 h-8 text-river-blue" />,
      type: "Fellowship"
    },
    {
      title: "Innovation in Remote Sensing", 
      organization: "Indian Society of Remote Sensing",
      year: "2022",
      description: "Recognition for groundbreaking work in UAV-based habitat monitoring systems.",
      icon: <FileCheck className="w-8 h-8 text-wetland" />,
      type: "Technical Innovation"
    }
  ];

  const certifications = [
    {
      title: "Google Earth Engine Certified Developer",
      organization: "Google",
      icon: <Leaf className="w-6 h-6 text-forest-light" />,
      year: "2023"
    },
    {
      title: "AWS Machine Learning Specialty",
      organization: "Amazon Web Services", 
      icon: <Droplets className="w-6 h-6 text-river-blue" />,
      year: "2022"
    },
    {
      title: "Certified Wildlife Biologist",
      organization: "The Wildlife Society",
      icon: <Bird className="w-6 h-6 text-earth-brown" />,
      year: "2021"
    },
    {
      title: "Professional GIS Certification",
      organization: "GIS Certification Institute",
      icon: <TreePine className="w-6 h-6 text-forest-deep" />,
      year: "2020"
    }
  ];

  return (
    <section id="awards" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Awards & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition for contributions to conservation science and technology innovation, 
            with certifications in cutting-edge environmental technologies.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="group hover:shadow-organic transition-organic border-l-4 border-l-sunrise ripple-effect"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-muted rounded-xl group-hover:scale-110 transition-organic">
                      {award.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                        {award.title}
                      </CardTitle>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                        <p className="font-medium text-forest-deep">{award.organization}</p>
                        <span className="hidden sm:block text-muted-foreground">•</span>
                        <span className="text-muted-foreground">{award.year}</span>
                      </div>
                      <span className="inline-block mt-2 px-3 py-1 bg-forest-light/20 text-forest-deep rounded-full text-xs font-medium">
                        {award.type}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="group hover:shadow-organic transition-organic text-center ripple-effect"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-center">
                    <div className="p-3 bg-muted rounded-lg group-hover:scale-110 transition-organic">
                      {cert.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm leading-tight mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-2">
                      {cert.organization}
                    </p>
                    <span className="inline-block px-2 py-1 bg-river-light/20 text-river-blue rounded-full text-xs">
                      {cert.year}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action for credentials */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-aerial rounded-2xl">
            <FileCheck className="w-8 h-8 text-accent" />
            <div className="text-left">
              <p className="font-semibold text-primary">Verify Credentials</p>
              <p className="text-sm text-muted-foreground">All certifications and awards are verifiable through official channels</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;