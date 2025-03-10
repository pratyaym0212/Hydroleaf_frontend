import React from 'react';
import Image from 'next/image';

import image4 from '../../../public/images/Image4.png';

const Technology: React.FC = () => {
  return (
    <section id="technology">
      <div className="section-content">
        <h2>Our Technology</h2>
        <Image src={image4} alt="Hydroleaf Technology" className="responsive" />
        <p>
          At Hydroleaf, we harness the power of IoT, AI, and automation to
          create a smart and sustainable farming ecosystem. Our advanced
          technology enables real-time monitoring and precision control over
          essential farming parameters, ensuring optimal crop growth while
          minimizing resource wastage.
        </p>
        <p>
          From intelligent nutrient dosing systems to AI-driven insights for
          better decision-making, our solutions empower farmers with tools to
          increase efficiency and profitability. By integrating cutting-edge
          sensors, robotics, and cloud-based analytics, we are shaping the
          future of agriculture.
        </p>
      </div>
    </section>
  );
};

export default Technology;
