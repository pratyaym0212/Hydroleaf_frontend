'use client';

import React from 'react';
import Image from 'next/image';

import image3 from '../../../public/images/Image3.png';

const Journey: React.FC = () => {
  return (
    <section id="journey">
      <div className="section-content">
        <h2>Our Journey</h2>
        <Image
          src={image3}
          alt="Hydroleaf Journey"
          className="responsive"
          width={600}
          height={400}
        />
        <div className="section-content-area">
          <p>
            Hydroleaf started with a vision to revolutionize farming through
            smart technology. What began as a small initiative has now grown
            into a pioneering effort in hydroponic farming, combining
            automation, IoT, and AI to make agriculture more efficient,
            profitable, and eco-friendly.
          </p>
          <p>
            Our journey is driven by a passion for sustainability and
            innovation, empowering farmers with cutting-edge solutions that
            reduce resource waste and increase yield. With continuous research
            and technological advancements, Hydroleaf is shaping the future of
            smart farming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
