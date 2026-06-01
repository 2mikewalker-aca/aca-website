export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", color: "#111", margin: 0 }}>
      <header
        style={{
          padding: "22px 24px",
          borderBottom: "1px solid #e5e5e5",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <strong style={{ fontSize: "18px" }}>Asset Condition Advisors</strong>
          <nav style={{ display: "flex", gap: "18px", fontSize: "14px" }}>
            <a href="#services" style={{ color: "#111", textDecoration: "none" }}>Services</a>
            <a href="#why" style={{ color: "#111", textDecoration: "none" }}>Why ACA</a>
            <a href="#request" style={{ color: "#111", textDecoration: "none" }}>Request</a>
          </nav>
        </div>
      </header>

      <section
        style={{
          background: "#0f172a",
          color: "#fff",
          padding: "90px 24px",
        }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ letterSpacing: "2px", textTransform: "uppercase", color: "#93c5fd", fontSize: "13px" }}>
            Independent Property Condition Assessments
          </p>

          <h1
            style={{
              fontSize: "clamp(42px, 8vw, 74px)",
              lineHeight: 1,
              margin: "18px 0",
              maxWidth: "850px",
            }}
          >
            Identify maintenance concerns before they become costly repairs.
          </h1>

          <p
            style={{
              fontSize: "21px",
              lineHeight: 1.5,
              color: "#dbeafe",
              maxWidth: "760px",
            }}
          >
            Asset Condition Advisors helps owners, managers, investors, and associations evaluate visible property conditions, prioritize maintenance, and plan with confidence.
          </p>

          <a
            href="#request"
            style={{
              display: "inline-block",
              marginTop: "30px",
              padding: "15px 22px",
              background: "#fff",
              color: "#0f172a",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Request an Assessment
          </a>
        </div>
      </section>

      <section id="services" style={{ padding: "70px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px", marginBottom: "28px" }}>Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "18px",
            }}
          >
            {[
              ["Property Condition Assessments", "Visual evaluations of building components, site conditions, and maintenance concerns."],
              ["Maintenance Planning Support", "Prioritize repairs and organize maintenance needs into practical planning categories."],
              ["Asset Condition Reviews", "Independent review of visible property conditions for owners and managers."],
              ["Due Diligence Evaluations", "Support property decisions with objective condition observations before purchase or investment."],
            ].map(([title, text]) => (
              <div key={title} style={{ background: "#fff", padding: "26px", borderRadius: "14px", border: "1px solid #e5e7eb" }}>
                <h3 style={{ fontSize: "21px", marginTop: 0 }}>{title}</h3>
                <p style={{ color: "#555", lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" style={{ padding: "75px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px" }}>Why Property Assessments Matter</h2>
          <p style={{ fontSize: "19px", lineHeight: 1.7, color: "#555", maxWidth: "820px" }}>
            Deferred maintenance can lead to larger repair costs, operational disruption, and avoidable property damage. Independent condition assessments help property stakeholders understand visible concerns, evaluate priorities, and make informed planning decisions.
          </p>
        </div>
      </section>

      <section style={{ background: "#111827", color: "#fff", padding: "70px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "36px" }}>Serving the San Francisco Bay Area</h2>
          <p style={{ fontSize: "19px", color: "#d1d5db", lineHeight: 1.6 }}>
            Supporting commercial properties, multifamily housing, HOAs, residential portfolios, and investment properties.
          </p>
        </div>
      </section>

      <section id="request" style={{ padding: "75px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "38px" }}>Request an Assessment</h2>
          <p style={{ color: "#555", fontSize: "18px", lineHeight: 1.6 }}>
            Submit property details below. Contact information is not publicly listed on this website.
          </p>

          <form style={{ display: "grid", gap: "14px", marginTop: "28px" }}>
            <input placeholder="Name" style={inputStyle} />
            <input placeholder="Company / Organization" style={inputStyle} />
            <input placeholder="Email" style={inputStyle} />
            <input placeholder="Phone (optional)" style={inputStyle} />
            <input placeholder="Property Address" style={inputStyle} />
            <select style={inputStyle}>
              <option>Service Requested</option>
              <option>Property Condition Assessment</option>
              <option>Maintenance Planning Support</option>
              <option>Due Diligence Evaluation</option>
              <option>General Inquiry</option>
            </select>
            <textarea placeholder="Briefly describe the property or request" rows={5} style={inputStyle}></textarea>

            <button
              type="button"
              style={{
                padding: "16px",
                background: "#0f172a",
                color: "#fff",
                border: 0,
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      <footer style={{ padding: "28px 24px", textAlign: "center", color: "#666", fontSize: "14px" }}>
        © 2026 Asset Condition Advisors. All rights reserved.
      </footer>
    </main>
  );
}

const inputStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  fontSize: "16px",
};
