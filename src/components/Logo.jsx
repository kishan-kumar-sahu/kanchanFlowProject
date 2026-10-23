import { Hexagon } from "lucide-react";

export default function Logo({ light = false }) {
  return <a href="/" className={`brand ${light ? "brand-light" : ""}`} aria-label="KanchanFlow home">
    <span className="brand-mark"><Hexagon size={22} strokeWidth={2.6} /><span /></span>
    <span className="brand-name">kanchan<span>flow</span><small>MANUFACTURING, IN MOTION</small></span>
  </a>;
}
