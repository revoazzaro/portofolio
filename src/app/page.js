import Hero from "./components/Hero";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="px-10 min-h-screen">
      <Hero />
      <Project/>
    </div>
  );
}
