import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0EFFD] text-gray-900 relative">
      {/* <main className="relative min-h-screen bg-[#2C2C2C]"> 
      <Watchlist />
       </main> */}
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
