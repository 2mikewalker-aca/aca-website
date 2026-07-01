"use client";

import { useState } from "react";

export default function RequestPage() {
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitting request. Please wait...");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyvjxZLLIKxI636GTQ5p5_-2WAZ6FEd_ahvwS8ef1pPYTtFfcbGPLzv8rj7W1vS4WKk7w/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      form.reset();
      setStatus(
        "Thank you! Your assessment request has been received. A representative from Asset Condition Advisors will review your request and respond shortly."
      );
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="requestPage">
      <style>{`
        * { box-sizing: border-box; }

        .requestPage {
          font-family: Arial, sans-serif;
          color: #111827;
          background: #f8fafc;
          min-height: 100vh;
        }

        .hero {
          background: #0f172a;
          color: white;
          padding: 80px 24px;
        }

        .heroInner {
          max-width: 1000px;
          margin: 0 auto;
        }

        .eyebrow {
          color: #93c5fd;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 13px;
          font-weight: 700;
        }

        h1 {
          font-size: clamp(42px, 7vw, 68px);
          line-height: 1;
          margin: 18px 0;
        }

        .heroText {
          font-size: 22px;
          line-height: 1.5;
          color: #dbeafe;
          max-width: 760px;
        }

        .content {
          max-width: 1000px;
          margin: 0 auto;
          padding: 55px 24px 80px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 32px;
        }

        .infoBox,
        .formBox {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 28px;
        }

        .infoBox {
          height: fit-content;
        }

        .infoBox h2 {
          margin-top: 0;
          font-size: 26px;
        }

        .infoBox p,
        .infoBox ul {
          color: #4b5563;
          line-height: 1.7;
        }

        .formGrid {
          display: grid;
          gap: 14px;
        }

        input, select, textarea {
          width: 100%;
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #d1d5db;
          font-size: 16px;
          font-family: Arial, sans-serif;
        }

        textarea {
          resize: vertical;
        }

        .submit {
          margin-top: 8px;
          padding: 16px;
          background: #0f172a;
          color: white;
          border: 0;
          border-radius: 10px;
          font-size: 17px;
          font-weight: 800;
          cursor: pointer;
        }

        .submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .success {
          margin-top: 16px;
          padding: 16px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #065f46;
          font-weight: 700;
          border: 1px solid #a7f3d0;
          line-height: 1.5;
        }

        .note {
          margin-top: 14px;
          font-size: 14px;
          color: #6b7280;
          line-height: 1.5;
        }

        @media (max-width: 800px) {
          .content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="hero">
        <div className="heroInner">
          <div className="eyebrow">Request Assessment</div>
          <h1>Start with the property details.</h1>
          <p className="heroText">
            Submit basic information about the property and the type of assessment needed.
            A representative will review the request before responding.
          </p>
        </div>
      </section>

      <section className="content">
        <div className="infoBox">
          <h2>What to Expect</h2>
          <p>
            Assessment requests are reviewed based on property type, location,
            scope, and availability.
          </p>

          <ul>
            <li>Property condition assessments</li>
            <li>Maintenance planning support</li>
            <li>Due diligence evaluations</li>
            <li>Capital repair prioritization</li>
          </ul>

          <p>
            Contact information is collected through this form and is not publicly
            listed on the website.
          </p>
        </div>

        <div className="formBox">
          <form className="formGrid" onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" required />
            <input name="company" placeholder="Company / Organization" />
            <input name="email" type="email" placeholder="Email" required />
            <input name="phone" placeholder="Phone (optional)" />
            <input name="propertyAddress" placeholder="Property Address" />

            <select name="serviceRequested" defaultValue="" required>
              <option value="" disabled>
                Service Requested
              </option>
              <option>Property Condition Assessment</option>
              <option>Maintenance Planning Support</option>
              <option>Due Diligence Evaluation</option>
              <option>Capital Repair Prioritization</option>
              <option>General Inquiry</option>
            </select>

            <select name="propertyType" defaultValue="">
              <option value="" disabled>
                Property Type
              </option>
              <option>Commercial Property</option>
              <option>Multifamily Housing</option>
              <option>HOA / Association Property</option>
              <option>Residential Portfolio</option>
              <option>Investment Property</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows={6}
              placeholder="Briefly describe the property, concern, or request"
            />

            <button type="submit" className="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>

            {status && <div className="success">{status}</div>}

            <p className="note">
              Your request will be submitted privately through the website.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
