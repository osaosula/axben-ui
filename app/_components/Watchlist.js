export default function Watchlist() {
  return (
    <div className="bg-black rounded-[30px] p-4 text-white shadow-md mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Watchlist ⌄</h2>
        <button className="text-2xl">+</button>
      </div>

      <div className="grid grid-cols-4 text-sm text-gray-400 mb-2">
        <div>Symbol</div>
        <div>Bid</div>
        <div>Ask</div>
        <div>Spread</div>
      </div>

      <div className="space-y-2">
        <div className="grid grid-cols-4 items-center">
          <div className="col-span-1 flex items-center gap-2">› EUR / USD</div>
          <div className="text-purple-300">1.13322</div>
          <div className="text-green-400">1.13322</div>
          <div>14</div>
        </div>

        <div>GBP / USD</div>
        <div>GBP / AUD</div>

        <div className="flex items-center gap-2">› Section</div>
        <div className="h-[120px]"></div>
      </div>
    </div>
  );
}
