import Hero from "./Hero";
import GalleryGrid from "./GalleryGrid";

export default function GallerySection() {
  return (
    <section className="w-full py-24 md:py-32 bg-background text-text-main">
      <div className="wrapper space-y-12">
        <Hero />
        <GalleryGrid />
      </div>
    </section>
  );
}
