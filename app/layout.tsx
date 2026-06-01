export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            background: "rgba(255,255,255,.97)",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              maxWidth: "1180px",
              margin: "0 auto",
              padding: "22px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: "22px",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "#111827",
                textDecoration: "none",
              }}
            >
              Asset Condition Advisors
            </a>

            <nav
              style={{
                display: "flex",
                gap: "18px",
                fontSize: "16px",
                alignItems: "center",
              }}
            >
              <a href="/services" style={linkStyle}>Services</a>
              <a href="/about" style={linkStyle}>About</a>
              <a href="/why-us" style={linkStyle}>Why Us</a>
              <a href="/request" style={linkStyle}>Request</a>
            </nav>
          </div>
        </header>

        {children}

        <footer
          style={{
            padding: "30px 24px",
            textAlign: "center",
            color: "#6b7280",
            fontSize: "14px",
          }}
        >
          © 2026 Asset Condition Advisors. Serving the San Francisco Bay Area.
        </footer>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "#111827",
  textDecoration: "none",
  fontWeight: 600,
};
