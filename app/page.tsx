export default function Home() {
  return (
    <main className="page">
      <style>{`
        * { box-sizing: border-box; }

        .page {
          font-family: Arial, sans-serif;
          color: #111827;
        }

        .hero {
          min-height: calc(100vh - 90px);
          color: white;
          display: flex;
          align-items: center;
          background:
            linear-gradient(rgba(15,23,42,.82), rgba(15,23,42,.9)),
            url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
        }

        .heroInner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 90px 24px;
        }

        .eyebrow {
          color: #93c5fd;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-size: 14px;
          font-weight: 700;
        }

        h1 {
          font-size: clamp(42px, 8vw, 78px);
          line-height: .98;
          max-width: 900px;
          margin: 22px 0;
        }

        .subhead {
          font-size: clamp(20px, 4vw, 28px);
          line-height: 1.45;
          color: #dbeafe;
          max-width: 820px;
        }

        .button {
          display: inline-block;
          margin-top: 34px;
          padding: 16px 24px;
          background: white;
          color: #0f172a;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 800;
          font-size: 17px;
        }

        .quick {
          background: #f8fafc;
          padding: 55px 24px;
        }

        .quickInner {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
        }

        .card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 26px;
        }

        .card h3 {
          margin-top: 0;
          font-size: 21px;
        }

        .card p {
          color: #4b5563;
          line-height: 1.6;
        }

        @media (max-width: 700px) {
          .heroInner {
            padding: 70px 24px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="heroInner">
          <div className="eyebrow">
            Independent Property Condition Assessments
          </div>

          <h1>
            Identify maintenance concerns before they become costly repairs.
          </h1>

          <p className="subhead">
            Asset Condition Advisors helps owners, managers, investors, and
            associations evaluate visible property conditions, prioritize
            maintenance, and plan with confidence.
          </p>

          <a className="button" href="/request">
            Request an Assessment
          </a>
        </div>
      </section>

      <section className="quick">
        <div className="quickInner">
          <div className="card">
            <h3>Property Assessments</h3>
            <p>
              Visual review of building components, site conditions, and
              maintenance concerns.
            </p>
          </div>

          <div className="card">
            <h3>Maintenance Planning</h3>
            <p>
              Prioritize repair needs and organize findings into practical
              planning categories.
            </p>
          </div>

          <div className="card">
            <h3>Due Diligence Support</h3>
            <p>
              Independent property condition observations for purchases,
              investments, and ownership decisions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
