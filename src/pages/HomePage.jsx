import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Factory,
  MessageCircle,
  FileText,
  Boxes,
  TrendingUp,
  Smartphone,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import FAQ from "../components/FAQ";

const features = [
  {
    icon: FileText,
    n: "Quote-to-order",
    tag: "LESS ADMIN",
    text: "Turn a quote into the next clear action—without losing details between handoffs.",
    href: "/features#quoting",
  },
  {
    icon: Boxes,
    n: "Bills of materials",
    tag: "FEWER SURPRISES",
    text: "Keep parts, quantities and requirements visible while the order takes shape.",
    href: "/features#bom",
  },
  {
    icon: TrendingUp,
    n: "Sales pipeline",
    tag: "BETTER FOLLOW-UP",
    text: "Know what’s moving, what’s stuck and which conversation needs attention.",
    href: "/features#pipeline",
  },
  {
    icon: MessageCircle,
    n: "WhatsApp follow-ups",
    tag: "FASTER REPLIES",
    text: "Keep customer conversations close to the work and next steps.",
    href: "/features#whatsapp",
  },
  {
    icon: BarChart3,
    n: "Reports that help",
    tag: "CLEARER DECISIONS",
    text: "See the shape of your pipeline and the work that needs a closer look.",
    href: "/features#reports",
  },
  {
    icon: Smartphone,
    n: "Work from anywhere",
    tag: "BUILT FOR THE FLOOR",
    text: "Get to the information you need whether you’re at a desk or on the move.",
    href: "/features#mobile",
  },
];

function DashboardMockup() {
  return (
    <div
      className="dashboard-shell"
      aria-label="Illustrative KanchanFlow manufacturing dashboard"
    >
      <div className="dash-top">
        <div className="dash-brand">
          <span className="dash-dot" /> KanchanFlow{" "}
          <span className="dash-divider" /> Workspace
        </div>
        <div className="dash-avatar">KS</div>
      </div>
      <div className="dash-body">
        <aside className="dash-side">
          <div className="dash-side-active">
            ▦ <span>Overview</span>
          </div>
          <div>
            ▤ <span>Quotes</span>
          </div>
          <div>
            ◇ <span>Work orders</span>
          </div>
          <div>
            ↗ <span>Pipeline</span>
          </div>
          <div>
            ▥ <span>Reports</span>
          </div>
          <div className="dash-side-bottom">
            ⚙ <span>Settings</span>
          </div>
        </aside>
        <div className="dash-main">
          <div className="dash-welcome">
            <div>
              <small>MONDAY, OCTOBER 26</small>
              <h3>Good morning, team.</h3>
              <p>Here’s where your work stands today.</p>
            </div>
            <button>＋ New quote</button>
          </div>
          <div className="dash-stats">
            <div>
              <small>OPEN QUOTES</small>
              <strong>24</strong>
              <span className="stat-up">↗ 12% this month</span>
            </div>
            <div>
              <small>ORDERS IN PROGRESS</small>
              <strong>18</strong>
              <span>Across 6 work stages</span>
            </div>
            <div>
              <small>PIPELINE VALUE</small>
              <strong>₹18.4L</strong>
              <span className="stat-up">↗ 8.4% this month</span>
            </div>
          </div>
          <div className="dash-lower">
            <div className="dash-table">
              <div className="dash-table-head">
                <b>Recent quotes</b>
                <span>View all →</span>
              </div>
              {[
                ["Q-1048", "Precision Parts Co.", "₹2,40,000", "In review"],
                ["Q-1047", "Northline Tools", "₹86,500", "Sent"],
                ["Q-1046", "Apex Fabrication", "₹4,12,000", "Approved"],
              ].map((r) => (
                <div className="dash-row" key={r[0]}>
                  <div>
                    <b>{r[0]}</b>
                    <small>{r[1]}</small>
                  </div>
                  <strong>{r[2]}</strong>
                  <em
                    className={
                      r[3] === "Approved"
                        ? "approved"
                        : r[3] === "Sent"
                          ? "sent"
                          : ""
                    }
                  >
                    {r[3]}
                  </em>
                </div>
              ))}
            </div>
            <div className="dash-activity">
              <b>Pipeline health</b>
              <p>Quote conversion</p>
              <div className="progress">
                <span style={{ width: "72%" }} />
              </div>
              <small>
                72% <span>+6% vs last month</span>
              </small>
              <div className="activity-line" />
              <p>Follow-ups due today</p>
              <strong>
                08 <span>customers</span>
              </strong>
            </div>
          </div>
        </div>
      </div>
      <div className="dash-caption">
        <span>
          <span className="green-dot" /> Illustrative product preview
        </span>
        <span>Designed around your workflow</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">THE MANUFACTURING WORKSPACE</div>
            <h1>
              Less chasing.
              <br />
              More <span>making.</span>
            </h1>
            <p className="hero-lead">
              From first quote to final order, bring your manufacturing sales
              workflow into one clear view.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/pricing">
                Book a walkthrough <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="/features">
                Explore the platform <ArrowRight size={16} />
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars">
                <span>RK</span>
                <span>AS</span>
                <span>MP</span>
              </div>
              <div>
                <strong>Made for the people behind the product.</strong>
                <small>Sales, planning and shop-floor teams.</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-stamp">
              <Factory size={15} /> BUILT FOR MANUFACTURING
            </div>
            <DashboardMockup />
            <div className="floating-note">
              <span className="note-icon">
                <Check size={16} />
              </span>
              <div>
                <b>One connected workflow</b>
                <small>From quote to work order</small>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-bottom container">
          <span>ONE WORKSPACE</span>
          <i />
          <span>FEWER MANUAL HANDOFFS</span>
          <i />
          <span>BETTER VISIBILITY</span>
          <i />
          <span>MORE CONFIDENT DECISIONS</span>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-inner">
          <p>FOR TEAMS THAT BUILD</p>
          <div>
            <span>Industrial components</span>
            <span>Machine shops</span>
            <span>Fabrication</span>
            <span>Custom manufacturing</span>
            <span>Engineering suppliers</span>
          </div>
        </div>
      </section>
      <section className="section problem-section">
        <div className="container problem-grid">
          <div>
            <div className="eyebrow">THE EVERYDAY BOTTLENECK</div>
            <h2>
              Good work shouldn’t get lost in the <span>handoff.</span>
            </h2>
          </div>
          <div className="problem-copy">
            <p>
              When quotes live in spreadsheets, updates sit in chats and order
              details stay in someone’s head, even a great team spends too much
              time connecting the dots.
            </p>
            <div className="problem-points">
              <div>
                <span>01</span>
                <p>
                  <b>Scattered information</b>
                  <small>
                    Important details are spread across tools and people.
                  </small>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <b>Follow-ups fall through</b>
                  <small>
                    Promising opportunities lose momentum in the daily rush.
                  </small>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <b>Unclear next steps</b>
                  <small>
                    Sales and operations don’t always see the same picture.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section features-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">A WORKFLOW THAT CONNECTS</div>
              <h2>
                From “we’ll get back to you”
                <br />
                to “it’s already moving.”
              </h2>
            </div>
            <p>
              The essentials to keep customer commitments, order details and
              next actions connected.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <a className="feature-card" href={f.href} key={f.n}>
                  <div className="feature-top">
                    <span className="feature-icon">
                      <Icon size={21} />
                    </span>
                    <span className="feature-index">0{i + 1}</span>
                  </div>
                  <small>{f.tag}</small>
                  <h3>{f.n}</h3>
                  <p>{f.text}</p>
                  <span className="feature-arrow">
                    <ArrowUpRight size={17} />
                  </span>
                </a>
              );
            })}
          </div>
          <div className="feature-bottom">
            <span>Six capabilities. One connected way of working.</span>
            <a className="text-link" href="/features">
              See all features <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section industries-section" id="industries">
        <div className="container industries-grid">
          <div>
            <div className="eyebrow">BUILT AROUND YOUR REALITY</div>
            <h2>
              Different shop floors.
              <br />
              <span>Shared need for clarity.</span>
            </h2>
            <p>
              Whether you build to order, work from a repeatable BOM or manage a
              steady stream of custom requests, the handoffs matter.
            </p>
            <a className="btn btn-outline" href="/features">
              Find your workflow <ArrowRight size={16} />
            </a>
          </div>
          <div className="industry-list">
            <div>
              <span>01</span>
              <Factory size={21} />
              <b>Industrial components</b>
              <ChevronRight size={17} />
            </div>
            <div>
              <span>02</span>
              <Boxes size={21} />
              <b>Machine shops & tooling</b>
              <ChevronRight size={17} />
            </div>
            <div>
              <span>03</span>
              <TrendingUp size={21} />
              <b>Fabrication & engineering</b>
              <ChevronRight size={17} />
            </div>
            <div>
              <span>04</span>
              <FileText size={21} />
              <b>Made-to-order businesses</b>
              <ChevronRight size={17} />
            </div>
          </div>
        </div>
      </section>
      <section className="section pricing-teaser">
        <div className="container pricing-teaser-inner">
          <div>
            <div className="eyebrow">SIMPLE START, ROOM TO GROW</div>
            <h2>
              A better workflow
              <br />
              starts with a conversation.
            </h2>
            <p>
              Find the right fit for your team, your process and the work ahead.
            </p>
          </div>
          <div className="pricing-teaser-right">
            <div className="price-line">
              <span>Starter</span>
              <span>For focused teams</span>
            </div>
            <div className="price-line">
              <span>Growth</span>
              <span>For connected workflows</span>
            </div>
            <div className="price-line">
              <span>Scale</span>
              <span>For complex operations</span>
            </div>
            <a className="btn btn-primary" href="/pricing">
              Explore plans <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="section faq-section" id="faq">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">GOOD QUESTIONS</div>
            <h2>
              Before we get
              <br />
              to work.
            </h2>
            <p>
              Some things teams usually want to know before changing a workflow.
            </p>
            <a className="text-link" href="/pricing">
              Talk to our team <ArrowRight size={16} />
            </a>
          </div>
          <FAQ compact />
        </div>
      </section>
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow">READY WHEN YOU ARE</div>
            <h2>
              Make the next order
              <br />
              your smoothest one yet.
            </h2>
            <p>
              Let’s talk about the way your team works—and where it could work
              better.
            </p>
          </div>
          <a className="btn btn-primary" href="/pricing">
            Book a walkthrough <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
