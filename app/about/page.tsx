export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "56px" }}>
        About Asset Condition Advisors
      </h1>

      <p
        style={{
          fontSize: "22px",
          lineHeight: 1.7,
          marginTop: "30px",
          color: "#444",
        }}
      >
        Asset Condition Advisors was created to help property owners,
        managers, investors, and associations identify maintenance
        concerns before they become major repairs.
      </p>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          color: "#555",
        }}
      >
        After years working in water damage restoration and mold
        remediation, we repeatedly saw the same pattern:
        small maintenance issues left unaddressed eventually became
        costly property damage.
      </p>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.8,
          color: "#555",
        }}
      >
        Our goal is to provide independent property condition
        assessments that help clients make informed maintenance
        and investment decisions.
      </p>
    </main>
  );
}
