import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Github, ExternalLink, Plane, Camera, Map, TreePine } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart Wetland Monitoring System",
      description: "AI-powered UAV system for automated wetland health assessment using computer vision and machine learning algorithms for species counting and vegetation analysis.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Google Earth Engine", "UAV"],
      status: "Active",
      category: "Conservation Technology",
      icon: <Camera className="w-6 h-6" />,
      color: "river"
    },
    {
      title: "Riparian Corridor Mapping Platform",
      description: "GIS-based platform for mapping and monitoring riparian ecosystems using satellite imagery and ground truth data for conservation planning.",
      technologies: ["QGIS", "Python", "Sentinel-2", "Machine Learning", "PostgreSQL"],
      status: "Completed",
      category: "Geospatial Analytics",
      icon: <Map className="w-6 h-6" />,
      color: "forest"
    },
    {
      title: "Wildlife Habitat Connectivity Analysis", 
      description: "Large-scale habitat fragmentation analysis using remote sensing data to identify critical wildlife corridors and conservation priorities.",
      technologies: ["R", "Google Earth Engine", "NDVI", "Landsat", "ArcGIS"],
      status: "Active",
      category: "Habitat Analysis",
      icon: <TreePine className="w-6 h-6" />,
      color: "earth"
    },
    {
      title: "Drone-Based Species Detection",
      description: "Real-time wildlife detection and counting system using thermal and RGB drone imagery with YOLOv8 object detection for field surveys.",
      technologies: ["PyTorch", "YOLOv8", "Thermal Imaging", "Edge Computing", "ROS"],
      status: "Development",
      category: "AI & Computer Vision",
      icon: <Plane className="w-6 h-6" />,
      color: "wetland"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      river: "border-l-river-blue bg-river-light/5",
      forest: "border-l-forest-deep bg-forest-light/5", 
      earth: "border-l-earth-brown bg-earth-light/5",
      wetland: "border-l-wetland bg-wetland/5"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.river;
  };

  const getStatusColor = (status: string) => {
    const statusMap = {
      Active: "bg-forest-light/20 text-forest-deep",
      Completed: "bg-river-light/20 text-river-blue",
      Development: "bg-sunrise/20 text-earth-brown"
    };
    return statusMap[status as keyof typeof statusMap] || statusMap.Active;
  };

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Conservation Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Innovative technology solutions for wildlife conservation and ecosystem monitoring, 
            bridging the gap between field research and digital conservation tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-organic transition-organic border-l-4 ${getColorClasses(project.color)} ripple-effect`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-muted rounded-lg group-hover:scale-110 transition-organic">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-primary group-hover:text-forest-deep transition-organic">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-background border border-border rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quote section */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-forest rounded-3xl organic-shape text-white">
            <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
              "Technology can help conserve nature if used wisely."
            </blockquote>
            <cite className="text-lg opacity-90">
              — Dr. Ravindra Nath Tripathi
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;