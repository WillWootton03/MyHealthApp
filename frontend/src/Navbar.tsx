import { Heart } from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-sm border-b border-[#e4edf5] sticky top-0 z-20">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#2d557a] flex items-center justify-center">
            <Heart className="w-3.5 h-3.5 text-white" fill="white" />
          </div>
          <span
            className="text-black text-lg font-medium"
            style={{ fontFamily: "'Raleway', serif"}}
          >
            My Health Online
          </span>
        </div>
      </div>
  </nav>
  );
}