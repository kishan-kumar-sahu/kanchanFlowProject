import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import "./styles.css";

function currentRoute() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/features") return "features";
  if (path === "/pricing") return "pricing";
  return "home";
}

export default function App() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const update = () => setRoute(currentRoute());
    window.addEventListener("popstate", update);
    const titles = {
      home: ["KanchanFlow — From quote to cash, without the chaos", "A practical manufacturing CRM that connects quoting, bills of materials, work orders and sales pipeline in one clear workflow."],
      features: ["Features | KanchanFlow", "Explore KanchanFlow features for manufacturing teams: quoting, BOMs, sales pipeline, customer follow-ups, reporting and mobile access."],
      pricing: ["Pricing | KanchanFlow", "Explore KanchanFlow's illustrative Starter, Growth and Scale plans and request a workflow walkthrough."]
    };
    document.title = titles[route][0];
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    meta.content = titles[route][1];
    return () => window.removeEventListener("popstate", update);
  }, [route]);

  const Page = route === "features" ? FeaturesPage : route === "pricing" ? PricingPage : HomePage;
  return <><Navbar /><Page /><Footer /></>;
}
