import { Link } from 'react-router-dom';
import { Users, TrendingUp, Calendar, Mic, BookOpen, Target, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import coachingSession from '@/assets/coaching-session.jpg';

const ServicesPage = () => {
  const coachingServices = [
    {
      title: 'One-on-One Coaching',
      description: 'Personalized sessions focused on your unique financial situation, goals, and challenges.',
      features: ['Customized financial plan', 'Budget creation & tracking', 'Debt management strategies', 'Investment guidance']
    },
    {
      title: 'Group Coaching',
      description: 'Learn alongside others in a supportive group environment. Perfect for teams and organizations.',
      features: ['Interactive group sessions', 'Peer learning & support', 'Affordable pricing', 'Monthly meetings']
    },
    {
      title: 'Masterclasses',
      description: 'Intensive workshops on specific financial topics. Deep dive into budgeting, investing, and more.',
      features: ['Online & in-person options', 'Comprehensive materials', 'Q&A sessions', 'Certificate of completion']
    },
    {
      title: 'Finance Seminars',
      description: 'Corporate and organizational training on financial wellness and management.',
      features: ['Customized content', 'Half-day or full-day options', 'Team building focus', 'Measurable outcomes']
    }
  ];

  const accountingServices = [
    {
      title: 'Bookkeeping',
      description: 'Accurate record-keeping of all financial transactions for your business.'
    },
    {
      title: 'Financial Statements',
      description: 'Preparation of income statements, balance sheets, and cash flow statements.'
    },
    {
      title: 'Tax Support',
      description: 'Tax planning, preparation, and filing assistance for compliance.'
    },
    {
      title: 'Budgeting & Forecasting',
      description: 'Creating budgets and financial projections for better planning.'
    },
    {
      title: 'Cashflow Management',
      description: 'Optimize your cash flow for sustainable business growth.'
    },
    {
      title: 'Financial Advisory',
      description: 'Strategic advice on financial decisions and business growth.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Financial Solutions
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              From personal finance coaching to professional accounting services, 
              we provide everything you need to achieve financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Finance Coaching */}
      <section id="coaching" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-gold font-semibold">Personal Finance</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Personal Finance Coaching
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether you're just starting your financial journey or looking to optimize your 
                wealth-building strategies, our coaching programs are designed for all ages and 
                life stages. We provide practical, actionable guidance tailored to the Kenyan context.
              </p>
              <Button variant="gold" size="lg" asChild>
                <Link to="/booking">Book a Coaching Session</Link>
              </Button>
            </div>
            <div>
              <img 
                src={coachingSession} 
                alt="Coaching Session" 
                className="rounded-3xl shadow-brand-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coachingServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accounting Services */}
      <section id="accounting" className="py-24 bg-cream scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-secondary-foreground" />
              </div>
              <span className="text-gold font-semibold">Business Services</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Accounting & Financial Management
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Professional accounting and financial management services for SMEs, NGOs, and 
              entrepreneurs. We help you stay compliant, make informed decisions, and grow 
              your organization with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/pricing">View Accounting Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Media & Speaking */}
      <section id="speaking" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-hero rounded-3xl p-12 text-primary-foreground">
                <h3 className="font-serif text-2xl font-bold mb-6">Book Susan for:</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Radio & Podcast Appearances', price: 'From KES 10,000' },
                    { title: 'TV Interviews', price: 'From KES 25,000' },
                    { title: 'Panel Discussions', price: 'Custom Quote' },
                    { title: 'Keynote Speaking', price: 'From KES 50,000' },
                    { title: 'Corporate Training', price: 'Custom Quote' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center justify-between py-3 border-b border-primary-foreground/20 last:border-0">
                      <span>{item.title}</span>
                      <span className="text-gold font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" className="w-full mt-8" asChild>
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <Mic className="h-6 w-6 text-secondary-foreground" />
                </div>
                <span className="text-gold font-semibold">Media</span>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Media & Speaking Engagements
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Susan Nyakiamo is available for interviews, panels, and speaking engagements 
                on topics related to personal finance, financial literacy, wealth building, 
                and women in finance.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                With over 10 years of experience in finance and accounting, Susan brings 
                practical insights and engaging storytelling to every appearance. Perfect 
                for media outlets, conferences, and corporate events.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">View Full Bio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free 15-minute consultation call and let's discuss which 
              services are right for you.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
