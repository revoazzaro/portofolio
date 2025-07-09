import Hero from "./components/Hero";
import Work from "./components/Work";

export default function Home() {
  return (
    <div className="px-10 min-h-screen">
      <Hero />
      <Work/>
    </div>
  );
}
