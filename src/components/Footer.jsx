import { ArrowUpRight, Linkedin, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <Logo light />
          <p style={{color:"#b9bdbe",fontSize:13,lineHeight:1.8,maxWidth:280,marginTop:22}}>A clearer way to run the work behind every order. Built for the people who make things happen.</p>
          <div style={{display:"flex",gap:15,marginTop:20,color:"#d4d5d2"}}>
            <a href="https://www.linkedin.com/" aria-label="LinkedIn"><Linkedin size={17}/></a>
            <a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={17}/></a>
            <a href="https://www.youtube.com/" aria-label="YouTube"><Youtube size={17}/></a>
          </div>
        </div>
        <div><p className="mini-label">Product</p><div className="footer-links"><a href="/features">Features</a><a href="/pricing">Pricing</a><a href="/#industries">Industries</a><a href="/#faq">FAQs</a></div></div>
        <div><p className="mini-label">Explore</p><div className="footer-links"><a href="/features#quoting">Quote-to-order</a><a href="/features#bom">Bill of materials</a><a href="/features#pipeline">Sales pipeline</a><a href="/features#reports">Reporting</a></div></div>
        <div><p className="mini-label">Let’s talk</p><p style={{color:"#b9bdbe",fontSize:13,lineHeight:1.7}}>See how KanchanFlow could fit your workflow.</p><a href="/pricing" style={{color:"var(--gold)",fontSize:13,fontWeight:800}}>Book a walkthrough <ArrowUpRight size={14} style={{display:"inline"}}/></a></div>
      </div>
      <div style={{borderTop:"1px solid #3a3d3f",paddingTop:20,display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap",color:"#929899",fontSize:11}}>
        <span>© {new Date().getFullYear()} KanchanFlow. All rights reserved.</span><span>Built for real-world manufacturing.</span>
      </div>
    </div>
  </footer>;
}
