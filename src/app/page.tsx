'use client';

import '../styles/styles.css';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import image1 from '../../public/images/Image1.png';
import image2 from '../../public/images/Image2.png';
import image3 from '../../public/images/Image3.png';
import image7 from '../../public/images/Image7.jpg';
import image8 from '../../public/images/Image8.jpg';
import image9 from '../../public/images/Image9.jpg';

const images = [image7, image8, image9];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: 'easeOut' } },
};

const Home: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        id="home"
        className="home-section"
        style={{ backgroundImage: `url(${images[currentImage].src})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              Welcome to <span className="highlight">Hydroleaf</span> – The
              Future of Smart Farming
            </h1>
            <p className="hero-text">
              Transforming agriculture with{' '}
              <strong>AI & IoT-driven hydroponic solutions</strong>. <br />
              Maximize yield, conserve resources, and embrace a{' '}
              <strong>sustainable future</strong>.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="features-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>
          <strong>Why Choose Hydroleaf?</strong>
        </h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>🌱 Sustainable Farming</h3>
            <p>
              Experience next-gen agriculture with{' '}
              <strong>precision hydroponics</strong>.
            </p>
          </div>
          <div className="feature-item">
            <h3>🤖 AI & IoT Integration</h3>
            <p>
              Our <strong>intelligent automation system</strong> optimizes plant
              growth conditions.
            </p>
          </div>
          <div className="feature-item">
            <h3>💧 Water Efficiency</h3>
            <p>
              Reduce water consumption by <strong>up to 90%</strong>, making
              farming eco-friendly.
            </p>
          </div>
          <div className="feature-item">
            <h3>🌍 Eco-Friendly Solutions</h3>
            <p>
              Grow healthier plants while{' '}
              <strong>minimizing environmental impact</strong>.
            </p>
          </div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="how-it-works-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>
          <strong>How Hydroleaf Works</strong>
        </h2>
        <p>
          Our AI-powered hydroponic system <strong>automates</strong> and{' '}
          <strong>optimizes</strong> farming:
        </p>
        <div className="steps-grid">
          <div className="step-item">
            <Image src={image2} alt="Smart Sensors" />
            <h3>📊 Real-Time Monitoring</h3>
          </div>
          <div className="step-item">
            <Image src={image3} alt="Automated System" />
            <h3>💡 Intelligent Automation</h3>
          </div>
          <div className="step-item">
            <Image src={image1} alt="Data Insights" />
            <h3>📈 Data-Driven Insights</h3>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        id="cta"
        className="cta-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>
          <strong>Join the Future of Smart Farming</strong>
        </h2>
        <p>
          Find the perfect <strong>hydroponic solution</strong> for you.
        </p>
        <Link href="/device" className="btn primary-btn">
          Explore Our Technology
        </Link>
        <Link href="/contact" className="btn secondary-btn">
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
};

export default Home;
