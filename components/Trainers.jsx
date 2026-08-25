"use client";

import { motion } from "framer-motion";
import "./Trainers.css";

const trainers = [
  {
    number: "01",
    name: "ALEX CARTER",
    role: "STRENGTH & CONDITIONING",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "02",
    name: "MARCUS REED",
    role: "PERSONAL TRAINING",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=90",
  },
  {
    number: "03",
    name: "JORDAN BLAKE",
    role: "FITNESS & PERFORMANCE",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=90",
  },
];

export default function Trainers() {
  return (
    <section className="trainers dark-section" id="trainers">

      <div className="trainers-container container">

        {/* Header */}
        <motion.div
          className="trainers-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >

          <div>

            <span className="eyebrow">
              OUR TEAM
            </span>

            <h2 className="trainers-title">
              TRAIN WITH
              <br />
              <span>EXPERTS.</span>
            </h2>

          </div>

          <p className="trainers-intro">
            Meet the people behind the training. Experienced
            professionals focused on helping members train
            with purpose, consistency and confidence.
          </p>

        </motion.div>


        {/* Trainers Grid */}
        <div className="trainers-grid">

          {trainers.map((trainer, index) => (

            <motion.article
              key={trainer.number}
              className="trainer-card"

              initial={{
                opacity: 0,
                y: 45,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Image */}
              <div className="trainer-image">

                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                />

                <div className="trainer-image-overlay" />

                <span className="trainer-number">
                  {trainer.number}
                </span>

                <span className="trainer-arrow">
                  ↗
                </span>

              </div>


              {/* Info */}
              <div className="trainer-info">

                <h3>
                  {trainer.name}
                </h3>

                <div className="trainer-meta">

                  <span>
                    {trainer.role}
                  </span>

                  <span className="trainer-line" />

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* Bottom */}
        <motion.div
          className="trainers-bottom"

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >

          <span>
            YOUR GOALS. THEIR EXPERTISE.
          </span>

          <a href="#contact">
            TALK TO OUR TEAM
            <span>↗</span>
          </a>

        </motion.div>

      </div>

    </section>
  );
}