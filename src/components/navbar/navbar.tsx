'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/logo_transparent.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container page-transition">
        <Image
          src={logo}
          alt="Hydroleaf Logo"
          className="logo"
          width={150}
          height={50}
        />
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/device">Device</Link>
        <Link href="/journey">Journey</Link>
        <Link href="/technology">Technology</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
