import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const NavLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white z-50 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-primary-800 flex items-center">
          <span className="text-2xl mr-2">👨‍💻</span> Sarammal S.
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {NavLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-secondary-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white shadow-md ${isOpen ? 'block' : 'hidden'}`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          {NavLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-secondary-700 hover:text-primary-600 font-medium transition-colors py-2"
              onClick={closeMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
