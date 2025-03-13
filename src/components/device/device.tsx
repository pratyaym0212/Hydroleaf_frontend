import React from 'react';
import Image from 'next/image';

import image2 from '../../../public/images/Image2.png';
// import '../../styles/styles.css';

const Device: React.FC = () => {
  return (
    <section id="device">
      <div className="section-content">
        <h2>Our Devices</h2>
        <Image
          src={image2}
          alt="Device"
          className="responsive"
          width={600}
          height={400}
        />
        <div className="section-content-area">
          <p>
            The Hydroleaf Dosing & Monitoring Controller is a smart device that
            helps with hydroponic farming. It automatically adds nutrients and
            checks water quality to keep plants healthy.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li>
              🚀 <strong>Wi-Fi Enabled</strong>: Control and monitor the system
              from anywhere.
            </li>
            <li>
              📊 <strong>Real-time Monitoring</strong>: Measures pH and TDS for
              better water quality.
            </li>
            <li>
              💧 <strong>Automated Dosing</strong>: Controls up to 4 pumps to
              add nutrients accurately.
            </li>
            <li>
              📟 <strong>Easy Controls</strong>: Use the keypad and screen to
              adjust settings.
            </li>
            <li>
              🔄 <strong>Smart Timing</strong>: Runs smoothly without delays.
            </li>
            <li>
              🛠️ <strong>Memory Storage</strong>: Saves settings even after
              restarting.
            </li>
            <li>
              🔄 <strong>Wireless Updates</strong>: Get the latest features with
              software updates.
            </li>
          </ul>
          <p>
            This device makes farming easier by saving time, reducing waste, and
            improving plant growth. It&apos;s perfect for modern hydroponic
            setups!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Device;
