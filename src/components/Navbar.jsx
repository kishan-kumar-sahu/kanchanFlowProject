 "use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const links = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#industries", label: "Industries" },
  { href: "/#faq", label: "Resources" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav-inner">
      <Logo />
      <nav className={`nav-links ${open ? "nav-open" : ""}`} aria-label="Main navigation">
        {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a className="mobile-cta" href="/pricing" onClick={() => setOpen(false)}>Book a walkthrough <ArrowUpRight size={15}/></a>
      </nav>
      <a className="btn btn-dark nav-cta" href="/pricing">Book a walkthrough <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={22}/> : <Menu size={22}/>}
      </button>
    </div>
  </header>;
}
