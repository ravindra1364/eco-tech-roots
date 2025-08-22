import Navigation from "@/components/Navigation";
import ResearchSection from "@/components/ResearchSection";
import Footer from "@/components/Footer";

const Research = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <ResearchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Research;