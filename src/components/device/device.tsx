'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import image2 from '../../../public/images/Hydroleaf_device.jpg';

const Device: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    {
      title: 'AI-Driven Efficiency',
      description:
        'Efficient LLMs predicts and execute dosing via pumps, considering plant type, growth stage, and climate. This reduces human dependency, increases efficiency by 90%, and reduces waste by 50%, accelerating crop yield cycles. The AI-driven system also adjusts the callibration system dynamically. The device can give a detailed plan for as well for a healthy yeild for your plants',
    },
    {
      title: 'Sensor Monitoring',
      description:
        'TDS and PH are the base of S.N.D device montoring. TDS and PH sensors accurately predicts the total dissolved nutrients concentration and predict water acidity. The measurment happens in periodic cycles based on which LLM predicts the dosing concentration.',
    },
    {
      title: 'Automated Dosing',
      description:
        'Precisely controls upto 4 nutrient pumps to manage pH and nutrient levels. Manual dosing is also possible via the S.N.D device. The device also supports scheduled dosing which is logged in our database to be monitored on your web app. The Pumps are electronically controlled, No manual intervention is required.',
    },
    {
      title: 'Cloud-Integration',
      description:
        'Supports cloud services for remote operations anywhere and anytime. The device is connected to the cloud via Wi-Fi. In our cloud dashboard you can monitor the real-time data, historical data, and also control the device.',
    },
    {
      title: 'Power Memory',
      description:
        'Retains settings even after power loss like wifi, calibration and dosing settings.',
    },
    {
      title: 'Voice Controlled',
      description:
        'The device will respond in real time regarding any queries. It is voice activated and can respond in multiple Indian languages.',
    },
    {
      title: 'Wireless Updates',
      description:
        'Stay updated with the latest AI enhancements and software updates. The device will automatically updates the software when connected to the internet. This makes the device future proof and low maintainence is required.',
    },
  ];

  return (
    <section id="device" className="device-section">
      <motion.div
        className="section-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Smart Nutrient Dosing</h2>
        <Image
          src={image2}
          alt="Hydroleaf Device"
          className="responsive device-image"
        />

        {/* Benefits Section */}
        <motion.div
          className="section-content-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Why S.N.D?</h3>
          <p>
            Hydroleaf is a next-generation IoT-based hydroponic management
            system that enables precision farming by automating nutrient dosage,
            pH balancing, and real-time monitoring. Unlike traditional
            hydroponic systems, Hydroleaf leverages AI-driven decision-making,
            real-time data visualization, and wireless connectivity for remote
            control and analytics.
          </p>

          <div className="feature-container">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-box ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                initial={{ height: 60 }}
                animate={{ height: expandedIndex === index ? 'auto' : 60 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="feature-header">
                  <span>{feature.title}</span>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ⬇️
                  </motion.div>
                </div>
                {expandedIndex === index && (
                  <p className="feature-description">{feature.description}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifications Section */}
        <motion.div
          className="section-content-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Technical Specifications</h3>
          <table className="specifications-table">
            <tbody>
              <tr>
                <td>
                  <strong>Connectivity</strong>
                </td>
                <td>Wi-Fi</td>
              </tr>
              <tr>
                <td>
                  <strong>PH sensor</strong>
                </td>
                <td>pH electrode with ±0.1 accuracy</td>
              </tr>
              <tr>
                <td>
                  <strong>TDS sensor</strong>
                </td>
                <td>Analog conductivity sensor (0-5000 PPM)</td>
              </tr>
              <tr>
                <td>
                  <strong>Pump Control</strong>
                </td>
                <td>
                  4 dosing pumps each 12V peristaltic pump (flow rate: 100-300
                  mL/min)
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Power Supply</strong>
                </td>
                <td>12V DC Adapter (Input: 100-240V AC)</td>
              </tr>
              <tr>
                <td>
                  <strong>AI Features</strong>
                </td>
                <td>Predictive dosing, anomaly detection, self calibration</td>
              </tr>
              <tr>
                <td>
                  <strong>Data Logging</strong>
                </td>
                <td>Cloud-based storage with historical trends</td>
              </tr>
              <tr>
                <td>
                  <strong>Display</strong>
                </td>
                <td>2.8-inch SPI TFT (320x240 resolution)</td>
              </tr>
              <tr>
                <td>
                  <strong>Control Interface</strong>
                </td>
                <td>Touch Buttons and Web App</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          className="section-content-area"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>How does the Hydroleaf Device Work</h3>
          <p>
            The Hydroleaf Smart Controller simplifies hydroponic farming by
            integrating automation...
          </p>
          <ol className="how-it-works-list">
            <li>
              <strong>Step 1:</strong> Switch ON the device.
            </li>
            <li>
              <strong>Step 2:</strong> Add the wifi credentials.
            </li>
            <li>
              <strong>Step 3:</strong> Open your web app and signup/login.
            </li>
            <li>
              <strong>Step 4:</strong> Discover your device on the same wifi.
              This device will now available on your web app.
            </li>
            <li>
              <strong>Step 5:</strong> Add your Plant, Plant type, Growth stage
              and Region.
            </li>
            <li>
              <strong>Step 6:</strong> The sensors continuously monitor pH, TDS
              and water quality in real-time.
            </li>
            <li>
              <strong>Step 7:</strong> AI algorithms analyze the data and gives
              out a detailed plan and adjust nutrient levels accordingly.
            </li>
            <li>
              <strong>Step 8:</strong> The system automatically activates the
              appropriate pumps to dose nutrients and maintai PH depending upon
              the plants sseeds
            </li>
            <li>
              <strong>Step 9:</strong> Farmers can monitor and control settings
              remotely through device control panel.
            </li>
            <li>
              <strong>Step 10:</strong> Historical data is stored for better
              decision-making and helps maintain yield optimization.
            </li>
          </ol>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Device;
