import HeaderNav from "@/components/codeissance/nav/HeaderNav";
import Hero from "@/components/codeissance/sections/Hero";
import Intro from "@/components/codeissance/sections/Intro";
import Genres from "@/components/codeissance/sections/Genres";
import Timeline from "@/components/codeissance/sections/Timeline";
import TopArtist from "@/components/codeissance/sections/TopArtist";
import InRotation from "@/components/codeissance/sections/InRotation";
import Recap from "@/components/codeissance/sections/Recap";
import Outro from "@/components/codeissance/sections/Outro";
import Footer from "@/components/codeissance/sections/Footer";
import Loader from "@/components/codeissance/loader/Loader";

/**
 * Codessiance '26 — Main Page
 * Exact Spotify 2025 Wrapped Newsroom Layout
 */
export default function Home() {
  return (
    <>
      <Loader />
      <main>
        <Hero />
        <Intro />
        <Genres />
        <Timeline />
        <TopArtist />
        <InRotation />
        <Recap />
        <Outro />
        <Footer />
      </main>
    </>
  );
}
