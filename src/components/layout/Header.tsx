import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import tantoLogo from '@/assets/tanto-logo-cropped.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const servicesSubItems = [
  { name: 'All Services', href: '/services' },
  { name: 'Personal Finance Coaching', href: '/services#coaching' },
  { name: 'Accounting & Financial Management', href: '/services#accounting' },
  { name: 'Media & Speaking', href: '/services#media' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isServicesActive = location.pathname === '/services';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gold backdrop-blur-md border-b border-gold/80 transition-shadow duration-300 ${isScrolled ? 'shadow-lg shadow-primary/20' : ''}`}>
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Left side: Logo + Navigation */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-gold p-2 rounded-lg">
                <img 
                  src={tantoLogo} 
                  alt="Tantosuziema - Mind Your Money" 
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="navy"
                size="sm"
                className="text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.25)] border border-navy-light/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.3)]"
                asChild
              >
                <Link to="/">Home</Link>
              </Button>

              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="navy"
                    size="sm"
                    className="gap-1 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.25)] border border-navy-light/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.3)]"
                  >
                    Services
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="z-50 w-64 bg-card border border-border shadow-lg"
                >
                  {servicesSubItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link 
                        to={item.href}
                        className="w-full cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {navigation.slice(1).map((item) => (
                <Button
                  key={item.name}
                  variant="navy"
                  size="sm"
                  className="text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.25)] border border-navy-light/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.3)]"
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
            <Button variant="navy" size="sm" className="text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.25)] border border-navy-light/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.3)]" asChild>
              <Link to="/booking">Book Session</Link>
            </Button>
            <Button variant="navy" size="sm" className="text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-2px_4px_rgba(0,0,0,0.3),0_2px_4px_rgba(0,0,0,0.25)] border border-navy-light/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-2px_4px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.3)]" asChild>
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
            <div className="flex flex-col gap-2">
              <Link
                to="/"
                className={`text-base font-medium py-2 transition-colors hover:text-gold ${
                  location.pathname === '/' ? 'text-gold' : 'text-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`w-full flex items-center justify-between text-base font-medium py-2 transition-colors hover:text-gold ${
                    isServicesActive ? 'text-gold' : 'text-foreground'
                  }`}
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-2 animate-fade-in">
                    {servicesSubItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm py-1 text-muted-foreground hover:text-gold transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium py-2 transition-colors hover:text-gold ${
                    location.pathname === item.href ? 'text-gold' : 'text-foreground'
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
