"use client";

import { motion } from "framer-motion";
import "./Facilities.css";

const facilities = [
  {
    number: "01",
    title: "STRENGTH AREA",
    description:
      "A dedicated space for focused strength training.",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "02",
    title: "CARDIO ZONE",
    description:
      "Keep moving with dedicated cardiovascular equipment.",
    image:
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1400&q=90",
  },
  {
    number: "03",
    title: "FUNCTIONAL TRAINING",
    description:
      "Train movement, mobility and overall performance.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=90",
  },
];

export default function Facilities() {
  return (
    <section className="facilities" id="facilities">

      <div className="facilities-container container">

        {/* Header */}
        <motion.div
          className="facilities-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div>

            <span className="eyebrow">
              THE FACILITY
            </span>

            <h2 className="facilities-title">
              BUILT TO
              <br />
              <span>PERFORM.</span>
            </h2>

          </div>

          <p className="facilities-intro">
            Everything you need to train with focus, from
            dedicated training zones to an environment built
            around performance.
          </p>

        </motion.div>


        {/* Main Feature */}
        <motion.div
          className="facility-feature"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >

          <div className="facility-feature-image">

            <img
              src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=2000&q=90"
              alt="FitLytics modern fitness facility"
            />

            <div className="facility-feature-overlay"></div>

            <div className="facility-feature-content">

              <span>
                FITLYTICS / 01
              </span>

              <h3>
                TRAIN
                <br />
                WITHOUT
                <br />
                LIMITS.
              </h3>

            </div>

          </div>

        </motion.div>


        {/* Facility Cards */}
        <div className="facilities-grid">

          {facilities.map((facility, index) => (

            <motion.article
              key={facility.number}
              className="facility-card"

              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.65,
                delay: index * 0.1,
              }}
            >

              <div className="facility-card-image">

                <img
                  src={facility.image}
                  alt={facility.title}
                  loading="lazy"
                />

                <span className="facility-number">
                  {facility.number}
                </span>

              </div>


              <div className="facility-card-content">

                <h3>
                  {facility.title}
                </h3>

                <p>
                  {facility.description}
                </p>

                <span className="facility-card-line"></span>

              </div>

            </motion.article>

          ))}

        </div>


        {/* Bottom Features */}
        <motion.div
          className="facility-highlights"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}
        >

          <div>
            <strong>01</strong>
            <span>MODERN EQUIPMENT</span>
          </div>

          <div>
            <strong>02</strong>
            <span>DEDICATED ZONES</span>
          </div>

          <div>
            <strong>03</strong>
            <span>PERFORMANCE FOCUSED</span>
          </div>

          <div>
            <strong>04</strong>
            <span>TRAINING ENVIRONMENT</span>
          </div>

        </motion.div>

      </div>

    </section>
  );
}