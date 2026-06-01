export default function ServicesPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "56px", marginBottom: "30px" }}>
        Services
      </h1>

      <div style={{ display: "grid", gap: "30px" }}>
        <div>
          <h2>Property Condition Assessments</h2>
          <p>
            Visual evaluations of building components, site conditions,
            and maintenance concerns.
          </p>
        </div>

        <div>
          <h2>Maintenance Planning Support</h2>
          <p>
            Prioritize repairs and organize maintenance needs into
            practical planning categories.
          </p>
        </div>

        <div>
          <h2>Asset Condition Reviews</h2>
          <p>
            Independent observations and documentation of visible
            property conditions.
          </p>
        </div>

        <div>
          <h2>Capital Repair Prioritization</h2>
          <p>
            Help owners understand which concerns require attention
            now and which can be planned for later.
          </p>
        </div>

        <div>
          <h2>Due Diligence Evaluations</h2>
          <p>
            Support property acquisitions and investment decisions
            through objective condition observations.
          </p>
        </div>
      </div>
    </main>
  );
}
