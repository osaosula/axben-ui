import Watchlist from "./_components/Watchlist";
import Widget from "./_components/Widget";

export default function Home() {
  return (
    <main className=" flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-[370px] h-[642px] flex flex-col space-y-4">
        <Watchlist />
        <Widget />
      </div>
    </main>
  );
}
