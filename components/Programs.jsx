"use client";

import { motion } from "framer-motion";
import "./Programs.css";

const programs = [
  {
    number: "01",
    title: "Strength",
    description:
      "Build a stronger foundation through structured strength-focused training.",
    tag: "BUILD",
  },
  {
    number: "02",
    title: "Conditioning",
    description:
      "Improve endurance, movement and overall physical performance.",
    tag: "PERFORM",
  },
  {
    number: "03",
    title: "Personal Training",
    description:
      "Focused guidance and training designed around your individual goals.",
    tag: "FOCUS",
  },
  {
    number: "04",
    title: "Fitness",
    description:
      "Develop consistency, confidence and a healthier everyday lifestyle.",
    tag: "EVOLVE",
  },
];

export default function Programs() {
  return (
    <section className="programs dark-section" id="programs">
      <div className="programs-container container">

        {/* Header */}
        <motion.div
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="eyebrow">Training Programs</span>

            <h2 className="programs-title">
              TRAIN WITH
              <br />
              <span>PURPOSE.</span>
            </h2>
          </div>

          <div className="programs-intro">
            <p>
              Whether you're building strength, improving
              conditioning or beginning your fitness journey,
              train with a purpose that keeps you moving forward.
            </p>
          </div>
        </motion.div>

        {/* Program Cards */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.article
              key={program.number}
              className="program-card"
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
            >
              <div className="program-top">
                <span className="program-number">
                  {program.number}
                </span>

                <span className="program-tag">
                  {program.tag}
                </span>
              </div>

              <div className="program-body">
                <h3>{program.title}</h3>

                <p>{program.description}</p>
              </div>

              <div className="program-bottom">
                <a href="#contact">
                  Explore
                  <span>↗</span>
                </a>

                <div className="program-line"></div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="programs-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span>
            FIND THE TRAINING THAT FITS YOUR GOALS.
          </span>

          <a href="#membership">
            View Membership
            <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}