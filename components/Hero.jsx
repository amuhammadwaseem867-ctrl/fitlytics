"use client";

import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=90"
          alt="FitLytics fitness training"
        />
      </div>

      <div className="hero-overlay" />

      {/* Red accent */}
      <div className="hero-accent" />

      <div className="hero-container container">

        {/* Top Meta */}
        <motion.div
          className="hero-meta"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-brand">FITLYTICS</span>

          <span className="hero-meta-text">
            PERFORMANCE / FITNESS
          </span>
        </motion.div>


        {/* Main */}
        <div className="hero-main">

          {/* Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="hero-eyebrow">
              <span />
              PERFORMANCE TRAINING
            </div>


            <h1 className="hero-title">
              <span>MOVE WITH</span>
              <span className="red">PURPOSE.</span>
            </h1>


            <p className="hero-text">
              Strength, movement and performance training
              built around your body, your goals and your
              next level.
            </p>


            <div className="hero-actions">

              <a
                href="#membership"
                className="hero-primary"
              >
                <span>START TRAINING</span>
                <b>↗</b>
              </a>

              <a
                href="#programs"
                className="hero-secondary"
              >
                EXPLORE PROGRAMS
                <span>→</span>
              </a>

            </div>

          </motion.div>


          {/* Athlete Card */}
          <motion.div
            className="hero-card"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.9,
            }}
          >

            <div className="hero-card-image">

              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1000&q=90"
                alt="Athlete training"
              />

              <div className="hero-card-overlay" />

            </div>


            <div className="hero-card-info">

              <span>01</span>

              <div>
                <strong>PERFORMANCE</strong>
                <small>TRAINING SYSTEM</small>
              </div>

            </div>

          </motion.div>

        </div>


        {/* Bottom */}
        <div className="hero-bottom">

          <span>
            RAWALPINDI / PAKISTAN
          </span>

          <div className="hero-line">
            <span>SCROLL TO EXPLORE</span>
            <i />
          </div>

          <span>
            06:00 — 23:00
          </span>

        </div>

      </div>

    </section>
  );
}