import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, TrendingUp, Mic, CheckCircle, Star, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-susan.jpg';
import financeGrowth from '@/assets/finance-growth.jpg';
import coachingSession from '@/assets/coaching-session.jpg';

const HomePage = () => {
  const services = [
    {
      icon: Users,
      title: 'Personal Finance Coaching',
      description: 'One-on-one sessions tailored to your financial goals. From budgeting to investing, we cover it all.',
      link: '/services#coaching'
    },
    {
      icon: TrendingUp,
      title: 'SME & NGO Accounting',
      description: 'Professional bookkeeping, financial statements, tax support, and cashflow management for businesses.',
      link: '/services#accounting'
    },
    {
      icon: Calendar,
      title: 'Masterclasses & Seminars',
      description: 'Interactive sessions on wealth building, saving strategies, and financial literacy.',
      link: '/masterclass'
    },
    {
      icon: Mic,
      title: 'Media & Speaking',
      description: 'Available for interviews, podcasts, panels, and keynote speaking engagements.',
      link: '/services#speaking'
    }
  ];

  const testimonials = [
    {
      name: 'James Mwangi',
      role: 'Entrepreneur',
      content: 'Susan transformed how I view money. Her coaching helped me clear my debt and start saving for the first time in my life.',
      rating: 5
    },
    {
      name: 'Grace Wanjiku',
      role: 'NGO Director',
      content: 'The accounting services are top-notch. Our financial reports are now always on time and our donors love the transparency.',
      rating: 5
    },
    {
      name: 'Peter Ochieng',
      role: 'Young Professional',
      content: 'The masterclass was eye-opening! I learned practical budgeting tips I could implement immediately.',
      rating: 5
    }
  ];

  const stats = [
    { value: '500+', label: 'Clients Coached' },
    { value: '50+', label: 'Businesses Served' },
    { value: '100+', label: 'Masterclasses Held' },
    { value: '10+', label: 'Years Experience' }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/50 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground animate-fade-up">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Personal Finance Coach & Accountant
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Nothing is as natural as a{' '}
                <span className="text-gradient-gold">Fresh Beginning</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Empowering you to take control of your finances. Whether you're an individual seeking 
                financial freedom or a business needing expert accounting, I'm here to guide your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/masterclass">
                    Register for Masterclass Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-white" size="xl" asChild>
                  <Link to="/booking">Book a Session</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 pt-12 border-t border-primary-foreground/20">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center sm:text-left">
                    <div className="font-serif text-3xl font-bold text-gold">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fade-up delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Susan Nyakiamo - Personal Finance Coach" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-brand-lg animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <Star className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Mind Your Money</div>
                    <div className="text-sm text-muted-foreground">Transform your finances</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(210 33% 98%)"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">What We Offer</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Services Tailored for Your Success
            </h2>
            <p className="text-muted-foreground text-lg">
              From personal finance coaching to professional accounting services, 
              we provide comprehensive solutions for individuals and businesses alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-secondary-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-gold font-semibold hover:gap-3 gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mind Your Money Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src={financeGrowth} 
                alt="Financial Growth" 
                className="rounded-3xl shadow-brand-lg"
              />
              <div className="absolute -bottom-8 -right-8 bg-primary rounded-2xl p-8 text-primary-foreground hidden md:block">
                <div className="font-serif text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </div>
            
            <div>
              <span className="text-gold font-semibold text-sm tracking-wider uppercase">Our Philosophy</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Mind Your <span className="text-gradient-gold">Money</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Financial wellness isn't just about numbers—it's about peace of mind, freedom, and 
                the ability to live life on your own terms. We believe everyone deserves access to 
                quality financial guidance.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Personalized coaching sessions',
                  'Practical, actionable strategies',
                  'Support for all life stages',
                  'Focus on long-term wealth building'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant="gold" size="lg" asChild>
                <Link to="/about">Learn About Our Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass CTA Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-navy-light/50 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Upcoming Event
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Financial Freedom Masterclass
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Join our comprehensive masterclass and learn the secrets to building lasting wealth. 
                Whether you're just starting out or looking to optimize your finances, this is for you.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  'Budgeting that actually works',
                  'Smart saving strategies',
                  'Introduction to investing',
                  'Debt elimination roadmap'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/masterclass">
                    Register Now - KES 1,500
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline-white" size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Preview
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={coachingSession} 
                alt="Masterclass Session" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground text-lg">
              Real stories from real people who have transformed their financial lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-secondary-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-gradient-hero rounded-4xl p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full bg-navy-light/50 blur-3xl" />
            </div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Finances?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-10">
                Take the first step towards financial freedom. Book a session today and 
                let's create a roadmap for your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <Link to="/booking">Book Your Session</Link>
                </Button>
                <Button variant="outline-white" size="xl" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
