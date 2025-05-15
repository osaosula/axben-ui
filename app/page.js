import Watchlist from "./_components/Watchlist";
import Widget from "./_components/Widget";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FFFFFF]">
      <div className="absolute top-[62px] left-[560px] w-[370px] h-[724px] flex flex-col gap-[5px] space-y-[5px]">
        <Watchlist />
        <Widget />
      </div>
    </main>
  );
}
