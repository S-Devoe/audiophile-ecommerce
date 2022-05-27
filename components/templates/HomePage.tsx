import Category from "../body/Category";
import Gallery from "../body/Gallery";
import HeroSection from "../body/HeroSection";
import BestGear from "../molecules/BestGear";


function HomePage() {
  return (
    <main>
      <HeroSection />
      <section>
        <Category />
        <Gallery />
        <BestGear />
      </section>
    </main>
  );
}
export default HomePage;
