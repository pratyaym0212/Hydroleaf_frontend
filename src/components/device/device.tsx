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
        'Efficient LLMs predict and execute dosing via pumps, considering plant type, growth stage, and climate. This reduces human dependency, increases efficiency by 90%, and reduces waste by 50%, accelerating crop yield cycles.',
    },
    {
      title: 'TDS Monitoring',
      description:
        'Accurately calibrates the total dissolved nutrients concentration.',
    },
    {
      title: 'PH Monitoring',
      description: 'Constantly measures pH levels to predict water acidity.',
    },
    {
      title: 'Automated Dosing',
      description:
        'Precisely controls up to 4 nutrient pumps to manage pH and nutrient levels.',
    },
    {
      title: 'Cloud-based Architecture',
      description:
        'Supports cloud services for remote operations from anywhere, anytime.',
    },
    {
      title: 'Power Memory',
      description: 'Retains settings even after power loss.',
    },
    {
      title: 'Wireless Updates',
      description:
        'Stay updated with the latest AI enhancements and software updates.',
    },
  ];

  return (
    <section id="device" className="device-section">
      <div className="section-content">
        <h2 className="section-title">Smart Nutrient Device</h2>
        <Image
          src={image2}
          alt="Hydroleaf Device"
          className="responsive device-image"
        />

        {/* Benefits Section */}
        <div className="section-content-area">
          <h3>Why Hydroleaf Device?</h3>
          <p>
            Hydroleaf is a next-generation IoT-based hydroponic management
            system that enables precision farming by automating nutrient dosing,
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
              >
                <div className="feature-header">
                  <span>{feature.title}</span>
                  <motion.div
                    className="arrow"
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
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
        </div>

        {/* Specifications Section */}
        <div className="section-content-area">
          <h3> Technical Specifications</h3>
          <table className="specifications-table">
            <tbody>
              <tr>
                <td>
                  <strong>Connectivity</strong>
                </td>
                <td>Wi-Fi, Bluetooth</td>
              </tr>
              <tr>
                <td>
                  <strong>Sensors</strong>
                </td>
                <td>pH, TDS, Temperature</td>
              </tr>
              <tr>
                <td>
                  <strong>Pump Control</strong>
                </td>
                <td>Up to 4 dosing pumps</td>
              </tr>
              <tr>
                <td>
                  <strong>Pump Flow Rate</strong>
                </td>
                <td>10ml/sec (adjustable via app)</td>
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
                <td>Predictive dosing, anomaly detection</td>
              </tr>
              <tr>
                <td>
                  <strong>Calibration</strong>
                </td>
                <td>One-touch auto-calibration for pH and TDS sensors</td>
              </tr>
              <tr>
                <td>
                  <strong>Mobile App</strong>
                </td>
                <td>Android & iOS (via Hydroleaf Cloud)</td>
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
                <td>OLED screen for real-time values</td>
              </tr>
              <tr>
                <td>
                  <strong>Control Interface</strong>
                </td>
                <td>Touch Buttons and Web App</td>
              </tr>
              <tr>
                <td>
                  <strong>Operating Temperature</strong>
                </td>
                <td>0°C to 50°C</td>
              </tr>
              {/* <tr><td><strong>Mobile App</strong></td><td>Android & iOS</td></tr> */}
            </tbody>
          </table>
        </div>

        {/* How It Works Section */}
        <div className="section-content-area">
          <h3> How the Hydroleaf Device Works</h3>
          <p>
            The Hydroleaf Smart Controller simplifies hydroponic farming by
            integrating automation and AI-based decision-making. Here’s how it
            operates:
          </p>
          <ol className="how-it-works-list">
            <li>
              <strong>Step 1:</strong> The sensors continuously monitor pH, TDS,
              and temperature in real-time.
            </li>
            <li>
              <strong>Step 2:</strong> AI algorithms analyze the data and adjust
              nutrient levels accordingly.
            </li>
            <li>
              <strong>Step 3:</strong> The system automatically activates the
              appropriate pumps to dose nutrients.
            </li>
            <li>
              <strong>Step 4:</strong> Farmers can monitor and control settings
              remotely.
            </li>
            <li>
              <strong>Step 5:</strong> Historical data is stored for better
              decision-making and yield optimization.
            </li>
          </ol>
          <p>
            This intelligent approach ensures plants receive optimal nutrients,
            leading to faster growth, higher efficiency, and better crop health.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Device;
