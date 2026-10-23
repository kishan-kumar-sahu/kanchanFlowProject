 "use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
 ["Is KanchanFlow built for small manufacturers?", "Yes. The workflow is designed for growing manufacturing teams that need a clearer view of quotes, materials, orders and follow-ups without adding unnecessary complexity."],
 ["Can we keep our current quoting process?", "Start with the process your team already understands. Map your quote stages and required information, then improve the handoffs that slow work down."],
 ["Does it support bills of materials (BOMs)?", "The product concept brings BOM information closer to quoting and order handoff, helping teams keep requirements visible as work progresses."],
 ["Can sales and operations use the same workspace?", "That is the goal: sales can see pipeline progress while operations gets better context on what has been promised and what needs to happen next."],
 ["How do we choose a plan?", "Choose a plan based on the size of your team and the workflow you want to connect. Book a walkthrough to discuss fit and rollout." ]
];

export default function FAQ({ compact = false }) {
 const [active, setActive] = useState(0);
 return <div className={`faq-list ${compact ? "faq-compact" : ""}`}>
  {faqs.slice(0, compact ? 3 : 5).map(([q,a],i) => <div className={`faq-item ${active===i?"faq-active":""}`} key={q}>
    <button onClick={() => setActive(active===i ? -1 : i)} aria-expanded={active===i}><span>{q}</span>{active===i?<Minus size={17}/>:<Plus size={17}/>}</button>
    {active===i && <p>{a}</p>}
  </div>)}
 </div>;
}
