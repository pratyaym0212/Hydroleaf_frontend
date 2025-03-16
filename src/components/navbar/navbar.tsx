'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/logo_transparent.png';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logoContainer">
        <Image
          src={logo}
          alt="Hydroleaf Logo"
          className="logo"
          width={150}
          height={50}
        />
      </div>
      <div
        className="menuIcon"
        role="button"
        tabIndex={0}
        onClick={() => setMenuOpen(!menuOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setMenuOpen(!menuOpen);
          }
        }}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <nav className={`navLinks ${menuOpen ? 'open' : ''}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/device" onClick={closeMenu}>
          Device
        </Link>
        <Link href="/journey" onClick={closeMenu}>
          Journey
        </Link>
        <Link href="/technology" onClick={closeMenu}>
          Technology
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          Blog
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
