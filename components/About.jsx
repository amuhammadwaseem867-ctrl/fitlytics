"use client";

import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container container">

        {/* Top Label */}
        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">About FitLytics</span>
          <span className="about-label-number">01 / 06</span>
        </motion.div>

        {/* Main Statement */}
        <div className="about-grid">

          <motion.div
            className="about-heading-wrap"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2 className="about-heading">
              MORE THAN
              <br />
              <span>A GYM.</span>
            </h2>

            <div className="about-red-line"></div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="about-lead">
              FitLytics is built for people who refuse to settle
              for average.
            </p>

            <p className="about-text">
              Every workout is an opportunity to become stronger,
              more disciplined and more confident. Our approach
              combines purposeful training, expert guidance and
              an environment designed to keep you moving forward.
            </p>

            <p className="about-text">
              Whether you're starting your fitness journey or
              pushing toward your next personal best, FitLytics
              gives you the space and mindset to train with purpose.
            </p>

            <a href="#programs" className="about-link">
              Discover Our Approach
              <span>↗</span>
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-stat">
            <strong>01</strong>
            <span>DISCIPLINE</span>
          </div>

          <div className="about-stat">
            <strong>02</strong>
            <span>CONSISTENCY</span>
          </div>

          <div className="about-stat">
            <strong>03</strong>
            <span>PERFORMANCE</span>
          </div>

          <div className="about-stat">
            <strong>04</strong>
            <span>RESULTS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}