import React from 'react';
import Image from 'next/image';

import image2 from '../../../public/images/Hydroleaf_device.jpg';

const Device: React.FC = () => {
  return (
    <section id="device" className="device-section">
      <div className="section-content">
        <h2 className="section-title">
          Hydroleaf Smart Dosing & Monitoring Controller
        </h2>
        <Image
          src={image2}
          alt="Hydroleaf Device"
          className="responsive device-image"
          width={600}
          height={400}
        />

        {/* Benefits Section */}
        <div className="section-content-area">
          <h3>🌱 Why Hydroleaf Device?</h3>
          <p>
            Hydroleaf’s AI-enabled smart controller optimizes hydroponic farming
            by ensuring precise nutrient dosing and real-time water quality
            monitoring. With automation and data-driven insights, farmers can
            achieve higher yields, reduce waste, and maintain a stable growing
            environment.
          </p>
          <ul className="feature-list">
            <li>
              🌍 <strong>AI-Driven Efficiency:</strong> Optimizes nutrient
              delivery based on plant growth stages.
            </li>
            <li>
              📊 <strong>Real-time Monitoring:</strong> Constantly measures pH,
              TDS, and water temperature.
            </li>
            <li>
              💧 <strong>Automated Dosing:</strong> Precisely controls up to 4
              nutrient pumps.
            </li>
            <li>
              📱 <strong>Wi-Fi Enabled:</strong> Remote control and monitoring.
            </li>
            <li>
              🔋 <strong>Power Memory:</strong> Retains settings even after
              power loss.
            </li>
            <li>
              🔄 <strong>Wireless Updates:</strong> Always stay updated with the
              latest AI enhancements.
            </li>
          </ul>
        </div>

        {/* Specifications Section */}
        <div className="section-content-area">
          <h3>📌 Technical Specifications</h3>
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
          <h3>⚙️ How the Hydroleaf Device Works</h3>
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
