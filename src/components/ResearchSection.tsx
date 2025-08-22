import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Award } from "lucide-react";

const ResearchSection = () => {
  const publications = [
    {
      title: "UAV-Based Habitat Monitoring for Endangered Species Conservation",
      journal: "Journal of Environmental Technology",
      year: "2024",
      doi: "10.1016/j.envtech.2024.001",
      description: "Novel machine learning approaches for automated wildlife detection using drone imagery",
      type: "Research Article",
      impact: "High Impact"
    },
    {
      title: "Machine Learning Applications in Riparian Ecosystem Assessment",
      journal: "Conservation Biology International",
      year: "2023",
      doi: "10.1111/cobi.2023.456",
      description: "Deep learning models for river ecosystem health monitoring using satellite data",
      type: "Research Article", 
      impact: "Featured Article"
    },
    {
      title: "Google Earth Engine for Wetland Conservation Mapping",
      journal: "Remote Sensing in Ecology",
      year: "2023",
      doi: "10.1016/j.rse.2023.789",
      description: "Cloud-based geospatial analysis for large-scale wetland monitoring",
      type: "Technical Paper",
      impact: "Editor's Choice"
    },
    {
      title: "AI-Powered Species Distribution Modeling in Protected Areas", 
      journal: "Wildlife Research & Technology",
      year: "2022",
      doi: "10.1007/wrt.2022.123",
      description: "Predictive modeling for species conservation using multi-sensor data fusion",
      type: "Research Article",
      impact: "Highly Cited"
    }
  ];

  const metrics = [
    { label: "Publications", value: "25+", icon: FileText },
    { label: "Citations", value: "450+", icon: Award },
    { label: "h-index", value: "12", icon: ExternalLink }
  ];

  return (
    <section id="research" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Advancing the intersection of artificial intelligence, remote sensing, and conservation science 
            through peer-reviewed research and innovative applications.
          </p>
        </div>

        {/* Research Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center bg-gradient-aerial border-border/50">
              <CardContent className="p-6">
                <metric.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publications Grid */}
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-organic transition-organic border-l-4 border-l-forest-light ripple-effect"
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="font-medium">{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span className="px-2 py-1 bg-river-light/20 text-river-blue rounded-full text-xs">
                        {pub.type}
                      </span>
                      <span className="px-2 py-1 bg-forest-light/20 text-forest-deep rounded-full text-xs">
                        {pub.impact}
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="shrink-0 border-forest-light text-forest-deep hover:bg-forest-light/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    DOI
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">{pub.description}</p>
                <div className="mt-3 text-xs text-muted-foreground">DOI: {pub.doi}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-gradient-forest hover:opacity-90 text-white shadow-organic"
          >
            View All Publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;