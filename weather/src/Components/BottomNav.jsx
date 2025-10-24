import { Home, Map, CalendarDays, Settings } from "lucide-react";

export default function BottomNav() {
  return (
    <nav className="sticky top-1.5 left-52  bg-[#8574C4]  w-full py-5 px-6 text-white shadow-lg flex justify-around items-center rounded-t-2xl border-indigo-100  border-x ">
      <button className="flex flex-col items-center hover:opacity-60 transition cursor-pointer">
        <a href="#hero">
          <Home size={22} />
        </a>
        <span className="text-xs mt-1">Home</span>
      </button>

      <button className="flex flex-col items-center hover:opacity-60 transition cursor-pointer">
        <a href="#map">
          <Map size={22} />
        </a>
        <span className="text-xs mt-1">Map</span>
      </button>

      <button className="flex flex-col items-center hover:opacity-60 transition cursor-pointer">
        <a href="">
          <CalendarDays size={22} />
        </a>
        <span className="text-xs mt-1">Forecast</span>
      </button>

      <button className="flex flex-col items-center hover:opacity-60 transition cursor-pointer">
        <a href="">
          <Settings size={22} />
        </a>
        <span className="text-xs mt-1">Settings</span>
      </button>
    </nav>
  );
}
