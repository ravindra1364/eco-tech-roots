import Navigation from "@/components/Navigation";
import AwardsSection from "@/components/AwardsSection";
import Footer from "@/components/Footer";

const Awards = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <AwardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Awards;