import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileText,
  Boxes,
  TrendingUp,
  MessageCircle,
  BarChart3,
  Smartphone,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import FAQ from "../components/FAQ";

const featureRows = [
  {
    id: "quoting",
    num: "01",
    tag: "QUOTE-TO-ORDER",
    title: "Every quote has a next step.",
    text: "Bring quote details and customer context into a clearer workflow. See what needs review, what has been sent and what is ready to become an order.",
    icon: FileText,
    points: [
      "Keep quote status easy to scan",
      "Carry key details into the handoff",
      "Make follow-up ownership visible",
    ],
    visual: "quote",
  },
  {
    id: "bom",
    num: "02",
    tag: "BILLS OF MATERIALS",
    title: "Keep the details attached to the work.",
    text: "Make parts, quantities and requirements easier to find when a quote becomes a real commitment. Less searching for the version someone last shared.",
    icon: Boxes,
    points: [
      "Keep material requirements visible",
      "Connect order context to the BOM",
      "Reduce avoidable information gaps",
    ],
    visual: "bom",
  },
  {
    id: "pipeline",
    num: "03",
    tag: "SALES PIPELINE",
    title: "Know what’s moving—and what isn’t.",
    text: "Give your team a shared view of open opportunities, expected value and the next conversation that can move a deal forward.",
    icon: TrendingUp,
    points: [
      "See opportunities by stage",
      "Spot overdue follow-ups",
      "Keep the next action clear",
    ],
    visual: "pipeline",
  },
  {
    id: "whatsapp",
    num: "04",
    tag: "CUSTOMER FOLLOW-UPS",
    title: "Keep conversations close to the work.",
    text: "Customer communication is part of the process. Keep the follow-up habit connected to the opportunity, so important context doesn’t disappear in a busy day.",
    icon: MessageCircle,
    points: [
      "Make follow-ups easier to track",
      "Keep customer context close",
      "Help teams stay responsive",
    ],
    visual: "chat",
  },
  {
    id: "reports",
    num: "05",
    tag: "REPORTS & VISIBILITY",
    title: "Turn activity into a clearer picture.",
    text: "Get a practical view of quote activity and pipeline health. Use shared information to ask better questions and decide where attention belongs.",
    icon: BarChart3,
    points: [
      "Review pipeline movement",
      "Understand quote activity",
      "Make bottlenecks easier to spot",
    ],
    visual: "reports",
  },
  {
    id: "mobile",
    num: "06",
    tag: "MOBILE ACCESS",
    title: "Useful information, away from the desk.",
    text: "Manufacturing work rarely happens in one place. Make it easier for the team to check progress and find the details they need while on the move.",
    icon: Smartphone,
    points: [
      "Access key workflow information",
      "Check progress between tasks",
      "Keep teams aligned across locations",
    ],
    visual: "mobile",
  },
];

function FeatureVisual({ type }) {
  if (type === "quote")
    return (
      <div className="mock-document">
        <div className="mock-doc-head">
          <span>QUOTE / Q-1048</span>
          <b className="status-pill">IN REVIEW</b>
        </div>
        <h4>Precision Components</h4>
        <p>Custom machined housing · Batch of 240</p>
        <div className="mock-doc-line">
          <span>Material & machining</span>
          <b>₹1,84,000</b>
        </div>
        <div className="mock-doc-line">
          <span>Finishing & QA</span>
          <b>₹56,000</b>
        </div>
        <div className="mock-doc-total">
          <span>Quote total</span>
          <b>₹2,40,000</b>
        </div>
        <div className="mock-doc-progress">
          <i />
          <i />
          <i />
          <i />
        </div>
        <small>
          Draft <span>Review</span> Sent <span>Order</span>
        </small>
      </div>
    );
  if (type === "bom")
    return (
      <div className="mock-bom">
        <div className="mock-doc-head">
          <span>BILL OF MATERIALS</span>
          <span>REV. 03</span>
        </div>
        <h4>Assembly KF-240</h4>
        {[
          ["01", "Aluminium housing", "240 pcs"],
          ["02", "Mounting bracket", "480 pcs"],
          ["03", "Fastener kit M8", "960 pcs"],
          ["04", "Protective finish", "240 sets"],
        ].map((x) => (
          <div className="bom-row" key={x[0]}>
            <span>{x[0]}</span>
            <b>{x[1]}</b>
            <small>{x[2]}</small>
          </div>
        ))}
        <div className="bom-foot">
          <Check size={14} /> Requirements reviewed
        </div>
      </div>
    );
  if (type === "pipeline")
    return (
      <div className="mock-pipeline">
        <div className="mock-doc-head">
          <span>SALES PIPELINE</span>
          <span>THIS MONTH</span>
        </div>
        <div className="pipeline-total">
          ₹18.4L <small>open pipeline</small>
        </div>
        <div className="pipeline-bars">
          {[
            ["New", 35],
            ["Qualified", 65],
            ["Quoted", 82],
            ["Negotiation", 54],
          ].map(([n, v]) => (
            <div key={n}>
              <span>{n}</span>
              <i>
                <b style={{ width: `${v}%` }} />
              </i>
              <strong>{(v / 10) | 0}</strong>
            </div>
          ))}
        </div>
        <div className="pipeline-note">
          <TrendingUp size={15} /> More visibility. Better follow-through.
        </div>
      </div>
    );
  if (type === "chat")
    return (
      <div className="mock-chat">
        <div className="mock-chat-head">
          <span>PC</span>
          <div>
            <b>Precision Components</b>
            <small>Customer follow-up</small>
          </div>
          <MessageCircle size={17} />
        </div>
        <div className="chat-date">TODAY · 10:42 AM</div>
        <div className="chat-bubble">
          Hi team, can you confirm the updated delivery window?
        </div>
        <div className="chat-bubble reply">
          We’re checking the work order now. We’ll share an update shortly.
        </div>
        <div className="chat-task">
          <Check size={14} />
          <div>
            <b>Follow-up logged</b>
            <small>Next action · Confirm delivery window</small>
          </div>
        </div>
      </div>
    );
  if (type === "reports")
    return (
      <div className="mock-report">
        <div className="mock-doc-head">
          <span>QUOTE ACTIVITY</span>
          <span>LAST 6 MONTHS</span>
        </div>
        <div className="report-total">
          128 <small>quotes created</small>
        </div>
        <div className="report-chart">
          {[42, 57, 48, 75, 62, 88].map((v, i) => (
            <div key={i}>
              <i style={{ height: `${v}%` }} />
              <small>{["M", "J", "J", "A", "S", "O"][i]}</small>
            </div>
          ))}
        </div>
        <div className="report-legend">
          <span>
            <i /> Created
          </span>
          <span>
            <i /> Converted
          </span>
        </div>
      </div>
    );
  return (
    <div className="mock-mobile">
      <div className="phone-frame">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <div className="phone-top">
            KanchanFlow <span>•••</span>
          </div>
          <small>GOOD MORNING</small>
          <h4>Work overview</h4>
          <div className="phone-metric">
            <span>Open quotes</span>
            <b>24</b>
          </div>
          <div className="phone-metric">
            <span>Active orders</span>
            <b>18</b>
          </div>
          <div className="phone-task">
            <Check size={12} /> Review quote Q-1048
          </div>
          <div className="phone-task">
            <Check size={12} /> Call Northline Tools
          </div>
        </div>
      </div>
      <div className="mobile-callout">
        <Smartphone size={18} />
        <b>Your workflow, on the move.</b>
        <small>A conceptual mobile UI preview</small>
      </div>
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <main className="features-page">
      <section className="inner-hero">
        <div className="container">
          <div className="eyebrow">THE KANCHANFLOW TOOLKIT</div>
          <h1>
            Connect the steps.
            <br />
            <span>Keep work moving.</span>
          </h1>
          <p>
            Six practical capabilities to bring quotes, materials, customer
            conversations and order progress into one clearer workflow.
          </p>
          <div className="inner-hero-actions">
            <a className="btn btn-primary" href="/pricing">
              Talk through your workflow <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href="#feature-list">
              Explore features <ArrowRight size={16} />
            </a>
          </div>
          <div className="inner-hero-meta">
            <span>
              <Check size={14} /> Built around manufacturing work
            </span>
            <span>
              <Check size={14} /> Clearer handoffs
            </span>
            <span>
              <Check size={14} /> Practical visibility
            </span>
          </div>
        </div>
      </section>
      <section className="section feature-intro" id="feature-list">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">LESS TOOL-HOPPING</div>
              <h2>One connected view of the work.</h2>
            </div>
            <p>
              Each capability is useful on its own. Together, they help reduce
              the gaps between customer intent and the order your team delivers.
            </p>
          </div>
          {featureRows.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                className={`feature-row ${i % 2 ? "feature-row-reverse" : ""}`}
                id={f.id}
                key={f.id}
              >
                <div className="feature-row-copy">
                  <div className="feature-row-number">
                    {f.num} <span>{f.tag}</span>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                  <ul>
                    {f.points.map((p) => (
                      <li key={p}>
                        <Check size={15} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="feature-row-visual">
                  <div className="feature-visual-top">
                    <span>
                      <Icon size={15} />
                      {f.tag}
                    </span>
                    <span>WORKSPACE PREVIEW</span>
                  </div>
                  <FeatureVisual type={f.visual} />
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section comparison-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A CLEARER WAY TO WORK</div>
              <h2>
                Disconnected steps vs.
                <br />
                connected workflow.
              </h2>
            </div>
            <p>
              A simple way to think about what changes when the handoffs become
              visible.
            </p>
          </div>
          <div className="comparison-table">
            <div className="comparison-row comparison-head">
              <span>WORKFLOW</span>
              <span>WHEN IT’S DISCONNECTED</span>
              <span>WITH KANCHANFLOW’S APPROACH</span>
            </div>
            {[
              [
                "Quoting",
                "Spreadsheets and inbox threads",
                "A visible quote status and next step",
              ],
              [
                "Materials",
                "Details shared in separate files",
                "BOM context closer to the order",
              ],
              [
                "Sales pipeline",
                "Follow-ups depend on memory",
                "Stages and next actions in view",
              ],
              [
                "Reporting",
                "Updates assembled manually",
                "A shared picture of activity",
              ],
            ].map((r, i) => (
              <div className="comparison-row" key={r[0]}>
                <b>
                  <span>0{i + 1}</span>
                  {r[0]}
                </b>
                <span className="comparison-muted">{r[1]}</span>
                <span className="comparison-good">
                  <Check size={15} />
                  {r[2]}
                </span>
              </div>
            ))}
          </div>
          <p className="comparison-note">
            Workflow examples are illustrative; the right setup depends on your
            team's process.
          </p>
        </div>
      </section>
      <section className="section feature-faq">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">FEATURE QUESTIONS</div>
            <h2>
              Built for the
              <br />
              work you do.
            </h2>
            <p>
              Have a specific quoting, BOM or follow-up process in mind? Let’s
              walk through it.
            </p>
            <a className="text-link" href="/pricing">
              Discuss your workflow <ArrowRight size={16} />
            </a>
          </div>
          <FAQ />
        </div>
      </section>
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow">MAKE IT PRACTICAL</div>
            <h2>Let’s connect your next steps.</h2>
            <p>Start with the bottleneck your team feels most.</p>
          </div>
          <a className="btn btn-primary" href="/pricing">
            Book a walkthrough <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
