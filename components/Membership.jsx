"use client";

import { motion } from "framer-motion";
import "./Membership.css";

const plans = [
  {
    number: "01",
    name: "STARTER",
    description:
      "A flexible starting point for building a consistent training routine.",
    featured: false,
  },
  {
    number: "02",
    name: "PERFORMANCE",
    description:
      "For members ready to train with greater focus, structure and intensity.",
    featured: true,
  },
  {
    number: "03",
    name: "PERSONAL",
    description:
      "A more focused training experience with individual guidance.",
    featured: false,
  },
];

const features = [
  "Gym Access",
  "Training Environment",
  "Fitness Guidance",
  "Membership Support",
];

export default function Membership() {
  return (
    <section className="membership" id="membership">
      <div className="membership-container container">

        {/* Header */}
        <motion.div
          className="membership-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="eyebrow">Membership</span>

            <h2 className="membership-title">
              CHOOSE YOUR
              <br />
              <span>COMMITMENT.</span>
            </h2>
          </div>

          <p className="membership-intro">
            Find the training option that fits your goals.
            Contact FitLytics for current membership plans,
            pricing and availability.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="membership-grid">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.number}
              className={`membership-card ${
                plan.featured ? "featured" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
            >
              {plan.featured && (
                <div className="membership-badge">
                  RECOMMENDED
                </div>
              )}

              <div className="membership-top">
                <span className="membership-number">
                  {plan.number}
                </span>

                <span className="membership-status">
                  MEMBERSHIP
                </span>
              </div>

              <div className="membership-main">
                <h3>{plan.name}</h3>

                <p>{plan.description}</p>

                <div className="membership-price">
                  <span>CONTACT</span>
                  <strong>FITLYTICS</strong>
                </div>

                <div className="membership-divider"></div>

                <ul>
                  {features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">+</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`membership-button ${
                  plan.featured
                    ? "membership-button-red"
                    : "membership-button-black"
                }`}
              >
                Enquire Now
                <span>↗</span>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="membership-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="membership-note-icon">+</span>

          <p>
            Membership availability, plans and pricing may vary.
            Contact FitLytics directly for the latest information.
          </p>

          <a href="#contact">
            Contact Us
            <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}