"use client";

import { motion } from "framer-motion";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container container">

        {/* Top */}
        <motion.div
          className="footer-top"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="footer-brand">

            <span className="footer-label">
              FITLYTICS / FITNESS & PERFORMANCE
            </span>

            <h2>
              TRAIN
              <br />
              <span>BETTER.</span>
            </h2>

            <p>
              Build strength. Improve movement.
              Become better every session.
            </p>

          </div>


          {/* Navigation */}
          <div className="footer-nav">

            <span className="footer-heading">
              EXPLORE
            </span>

            <a href="#home">Home</a>
            <a href="#facilities">Facilities</a>
            <a href="#trainers">Trainers</a>
            <a href="#programs">Programs</a>
            <a href="#contact">Contact</a>

          </div>


          {/* Contact */}
          <div className="footer-contact">

            <span className="footer-heading">
              GET IN TOUCH
            </span>

            <a href="tel:+92511234567">
              +92 51 123 4567
            </a>

            <a href="mailto:hello@fitlytics.pk">
              hello@fitlytics.pk
            </a>

            <span>
              Rawalpindi, Pakistan
            </span>

          </div>

        </motion.div>


        {/* CTA */}
        <motion.div
          className="footer-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >

          <div>

            <span>
              READY TO START?
            </span>

            <h3>
              YOUR NEXT LEVEL
              <br />
              STARTS HERE.
            </h3>

          </div>

          <a href="#contact">
            JOIN FITLYTICS
            <span>↗</span>
          </a>

        </motion.div>


        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © {new Date().getFullYear()} FITLYTICS.
            ALL RIGHTS RESERVED.
          </span>

          <div className="footer-socials">

            <a href="#" aria-label="Instagram">
              IG
            </a>

            <a href="#" aria-label="Facebook">
              FB
            </a>

            <a href="#" aria-label="TikTok">
              TK
            </a>

          </div>

          <span>
            BUILT FOR PERFORMANCE.
          </span>

        </div>

      </div>

    </footer>
  );
}