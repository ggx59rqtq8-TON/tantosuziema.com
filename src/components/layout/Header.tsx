import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import tantoLogo from '@/assets/tanto-logo-cropped.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-primary/10' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={tantoLogo} 
                alt="Tantosuziema - Mind Your Money" 
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant={location.pathname === item.href ? 'default' : 'ghost'}
                  size="sm"
                  asChild
                >
                  <Link to={item.href}>
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/booking">Book Session</Link>
            </Button>
            <Button variant="gold" size="sm" asChild>
              <Link to="/masterclass">Register Masterclass</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium py-2 transition-colors hover:text-gold ${
                    location.pathname === item.href
                      ? 'text-gold'
                      : 'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/booking" onClick={() => setMobileMenuOpen(false)}>Book Session</Link>
                </Button>
                <Button variant="gold" asChild>
                  <Link to="/masterclass" onClick={() => setMobileMenuOpen(false)}>Register Masterclass</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
