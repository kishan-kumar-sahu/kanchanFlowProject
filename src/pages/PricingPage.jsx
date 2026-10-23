import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  X,
  CalendarDays,
  Mail,
  Building2,
  UserRound,
} from "lucide-react";
import FAQ from "../components/FAQ";

const plans = [
  {
    name: "Starter",
    desc: "Get the essentials in one place.",
    monthly: 1499,
    annual: 1199,
    tag: "FOR SMALL TEAMS",
    features: [
      "Quote tracking",
      "Customer and company records",
      "Basic pipeline view",
      "Email support",
    ],
    missing: ["Advanced reporting", "Multi-team workflows"],
  },
  {
    name: "Growth",
    desc: "Connect the work as you grow.",
    monthly: 3499,
    annual: 2799,
    tag: "MOST POPULAR",
    popular: true,
    features: [
      "Everything in Starter",
      "BOM and order handoff",
      "Follow-up tracking",
      "Workflow reports",
      "Priority support",
    ],
    missing: ["Custom rollout planning"],
  },
  {
    name: "Scale",
    desc: "Fit a more complex operation.",
    monthly: null,
    annual: null,
    tag: "FOR COMPLEX WORKFLOWS",
    features: [
      "Everything in Growth",
      "Multi-team visibility",
      "Custom workflow review",
      "Rollout planning",
      "Dedicated onboarding",
    ],
    missing: [],
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    team: "11–25 people",
    plan: "Growth",
    message: "",
  });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  function submit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="container">
          <div className="eyebrow">PLANS THAT FIT THE WORK</div>
          <h1>
            Less workflow friction.
            <br />
            <span>More room to grow.</span>
          </h1>
          <p>
            Start with the essentials, connect more of your process as you grow,
            or talk to us about a more tailored setup.
          </p>
          <div className="billing-toggle" aria-label="Billing frequency">
            <span className={!annual ? "billing-active" : ""}>Monthly</span>
            <button
              role="switch"
              aria-checked={annual}
              onClick={() => setAnnual(!annual)}
              className={annual ? "switch-on" : ""}
            >
              <i />
            </button>
            <span className={annual ? "billing-active" : ""}>
              Yearly <em>Save 20%</em>
            </span>
          </div>
          <small className="pricing-disclaimer">
            Illustrative pricing for the assignment concept—not a live
            commercial offer.
          </small>
        </div>
      </section>
      <section className="section plan-section">
        <div className="container">
          <div className="plan-grid">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`plan-card ${plan.popular ? "plan-popular" : ""}`}
              >
                {plan.popular && (
                  <div className="popular-ribbon">A GOOD PLACE TO START</div>
                )}
                <div className="plan-top">
                  <span>{plan.tag}</span>
                  <h2>{plan.name}</h2>
                  <p>{plan.desc}</p>
                </div>
                <div className="plan-price">
                  {plan.monthly === null ? (
                    <strong>Let’s talk</strong>
                  ) : (
                    <>
                      <strong>
                        ₹
                        {annual
                          ? plan.annual
                          : plan.monthly.toLocaleString("en-IN")}
                        <small>/ month</small>
                      </strong>
                      <span>
                        {annual ? "Billed annually" : "Billed monthly"}
                      </span>
                    </>
                  )}{" "}
                </div>
                <a
                  className={`btn ${plan.popular ? "btn-primary" : "btn-outline"} plan-button`}
                  href="#request"
                  onClick={() => setForm({ ...form, plan: plan.name })}
                >
                  {plan.monthly === null
                    ? "Discuss your needs"
                    : "Choose " + plan.name}
                  <ArrowRight size={15} />
                </a>
                <div className="plan-feature-list">
                  <b>What’s included</b>
                  {plan.features.map((f) => (
                    <div key={f}>
                      <Check size={15} />
                      {f}
                    </div>
                  ))}
                  {plan.missing.map((f) => (
                    <div className="plan-missing" key={f}>
                      <X size={14} />
                      {f}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="plan-footnote">
            Plan features are illustrative examples to demonstrate the pricing
            experience. Confirm scope and pricing with the KanchanFlow team.
          </p>
        </div>
      </section>
      <section className="pricing-comparison">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">AT A GLANCE</div>
              <h2>Compare the essentials.</h2>
            </div>
            <p>
              Choose the level of workflow visibility that matches your team's
              current needs.
            </p>
          </div>
          <div className="compare-wrap">
            <table>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Starter</th>
                  <th>Growth</th>
                  <th>Scale</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Quote tracking", true, true, true],
                  ["Customer records", true, true, true],
                  ["Pipeline visibility", true, true, true],
                  ["BOM handoff", false, true, true],
                  ["Workflow reports", false, true, true],
                  ["Multi-team workflows", false, false, true],
                  ["Rollout planning", false, false, true],
                ].map((r) => (
                  <tr key={r[0]}>
                    <th>{r[0]}</th>
                    {r.slice(1).map((yes, i) => (
                      <td key={i}>
                        {yes ? (
                          <Check size={17} />
                        ) : (
                          <span className="dash">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section request-section" id="request">
        <div className="container request-grid">
          <div className="request-copy">
            <div className="eyebrow">LET’S TALK WORKFLOWS</div>
            <h2>Tell us where work gets stuck.</h2>
            <p>
              Share a little about your team. We’ll show a sample workflow and
              discuss which setup could fit.
            </p>
            <div className="request-perks">
              <div>
                <span>
                  <CalendarDays size={17} />
                </span>
                <p>
                  <b>Practical walkthrough</b>
                  <small>See how the steps could connect.</small>
                </p>
              </div>
              <div>
                <span>
                  <Building2 size={17} />
                </span>
                <p>
                  <b>Built around your team</b>
                  <small>Talk through your actual process.</small>
                </p>
              </div>
              <div>
                <span>
                  <Mail size={17} />
                </span>
                <p>
                  <b>No-pressure conversation</b>
                  <small>Ask questions and explore the fit.</small>
                </p>
              </div>
            </div>
          </div>
          <div className="request-card">
            {submitted ? (
              <div className="success-state">
                <span>
                  <Check size={25} />
                </span>
                <h3>Thanks, {form.name.split(" ")[0] || "there"}.</h3>
                <p>
                  Your request has been captured in this demo. No message was
                  sent to a server.
                </p>
                <button
                  className="btn btn-dark"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      team: "11–25 people",
                      plan: "Growth",
                      message: "",
                    });
                  }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-heading">
                  <span>
                    <UserRound size={17} />
                  </span>
                  <div>
                    <h3>Request a walkthrough</h3>
                    <p>Fields marked * are required.</p>
                  </div>
                </div>
                <label>
                  Full name *
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="e.g. Ananya Sharma"
                    autoComplete="name"
                  />
                </label>
                <label>
                  Work email *
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={update}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </label>
                <label>
                  Company name *
                  <input
                    required
                    name="company"
                    value={form.company}
                    onChange={update}
                    placeholder="Your manufacturing business"
                    autoComplete="organization"
                  />
                </label>
                <div className="form-two">
                  <label>
                    Team size
                    <select name="team" value={form.team} onChange={update}>
                      <option>1–10 people</option>
                      <option>11–25 people</option>
                      <option>26–100 people</option>
                      <option>100+ people</option>
                    </select>
                  </label>
                  <label>
                    Interested in
                    <select name="plan" value={form.plan} onChange={update}>
                      <option>Starter</option>
                      <option>Growth</option>
                      <option>Scale</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                </div>
                <label>
                  What would you like to improve?
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="Quotes, order handoffs, follow-ups…"
                    rows="3"
                  />
                </label>
                <button className="btn btn-primary submit-btn" type="submit">
                  Request my walkthrough <ArrowUpRight size={16} />
                </button>
                <small className="form-note">
                  Demo form only. Your details stay in this page and are not
                  transmitted.
                </small>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="section pricing-faq">
        <div className="container faq-grid">
          <div>
            <div className="eyebrow">A FEW DETAILS</div>
            <h2>
              Pricing, without
              <br />
              the guesswork.
            </h2>
            <p>
              Still deciding? Start with the workflow you need to make easier.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <div className="eyebrow">START WITH A CONVERSATION</div>
            <h2>Your process is a good place to start.</h2>
            <p>Bring the messy handoff. We’ll talk through the next step.</p>
          </div>
          <a className="btn btn-primary" href="#request">
            Request a walkthrough <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
