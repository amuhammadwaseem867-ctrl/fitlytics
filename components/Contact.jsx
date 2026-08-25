"use client";

import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Get In Touch</span>

          <h2 className="contact-title">
            READY TO
            <br />
            <span>START?</span>
          </h2>
        </motion.div>

        {/* Main Contact Layout */}
        <div className="contact-layout">

          {/* Left */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-block">
              <span className="contact-label">
                LOCATION
              </span>

              <h3>FITLYTICS</h3>

              <p>
                Your gym address goes here.
                <br />
                Rawalpindi, Pakistan
              </p>
            </div>

            <div className="contact-block">
              <span className="contact-label">
                OPENING HOURS
              </span>

              <div className="hours">
                <div>
                  <span>MON — FRI</span>
                  <strong>06:00 — 23:00</strong>
                </div>

                <div>
                  <span>SAT — SUN</span>
                  <strong>08:00 — 22:00</strong>
                </div>
              </div>
            </div>

            <div className="contact-block">
              <span className="contact-label">
                CONTACT
              </span>

              <a href="tel:+920000000000">
                +92 000 0000000
              </a>

              <a href="mailto:hello@fitlytics.com">
                hello@fitlytics.com
              </a>
            </div>

            <a
              href="https://wa.me/920000000000"
              className="whatsapp-button"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
              <span>↗</span>
            </a>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="form-heading">
              <span>01</span>

              <p>
                HAVE A QUESTION?
                <br />
                SEND US A MESSAGE.
              </p>
            </div>

            <form className="contact-form">

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">YOUR NAME</label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">PHONE</label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">EMAIL</label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-field">
                <label htmlFor="interest">
                  WHAT ARE YOU INTERESTED IN?
                </label>

                <select id="interest" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="membership">
                    Membership
                  </option>

                  <option value="personal-training">
                    Personal Training
                  </option>

                  <option value="general">
                    General Enquiry
                  </option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="message">MESSAGE</label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit">
                SEND ENQUIRY
                <span>↗</span>
              </button>

            </form>
          </motion.div>

        </div>

        {/* Map Placeholder */}
        <motion.div
          className="contact-map"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="map-grid"></div>

          <div className="map-content">
            <span className="map-pin">+</span>

            <strong>FITLYTICS</strong>

            <span>LOCATION MAP</span>
          </div>

          <a href="#contact" className="map-link">
            VIEW LOCATION
            <span>↗</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}