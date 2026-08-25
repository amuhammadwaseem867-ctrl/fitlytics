"use client";

import { motion } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    number: "01",
    quote:
      "The right environment makes consistency feel different.",
    name: "MEMBER ONE",
    type: "FITNESS JOURNEY",
  },
  {
    number: "02",
    quote:
      "Training with purpose changed the way I approach every workout.",
    name: "MEMBER TWO",
    type: "STRENGTH TRAINING",
  },
  {
    number: "03",
    quote:
      "A place where you can stay focused, work hard and keep improving.",
    name: "MEMBER THREE",
    type: "PERFORMANCE",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="results">
      <div className="testimonials-container container">

        {/* Header */}
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="eyebrow">Member Results</span>

            <h2 className="testimonials-title">
              THEIR
              <br />
              <span>JOURNEY.</span>
            </h2>
          </div>

          <p className="testimonials-intro">
            Every member has a different starting point.
            What matters is showing up, staying consistent
            and continuing to move forward.
          </p>
        </motion.div>

        {/* Featured Quote */}
        <motion.div
          className="featured-testimonial"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="quote-mark">“</div>

          <blockquote>
            Progress isn't about becoming someone else.
            It's about becoming stronger than you were
            yesterday.
          </blockquote>

          <div className="featured-author">
            <span className="author-line"></span>

            <div>
              <strong>FITLYTICS MEMBER</strong>
              <span>MEMBER JOURNEY</span>
            </div>
          </div>

          <div className="featured-number">01</div>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.number}
              className="testimonial-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="testimonial-card-top">
                <span>{item.number}</span>

                <span>FITLYTICS</span>
              </div>

              <p className="testimonial-quote">
                “{item.quote}”
              </p>

              <div className="testimonial-author">
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="results-bar"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <strong>01</strong>
            <span>CONSISTENCY</span>
          </div>

          <div>
            <strong>02</strong>
            <span>DISCIPLINE</span>
          </div>

          <div>
            <strong>03</strong>
            <span>PROGRESS</span>
          </div>

          <div>
            <strong>04</strong>
            <span>RESULTS</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}