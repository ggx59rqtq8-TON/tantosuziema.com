import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PricingPage = () => {
  const coachingPricing = [
    {
      title: 'Single Session',
      price: 'KES 3,000',
      period: '60 minutes',
      features: [
        'One-on-one coaching',
        'Personalized advice',
        'Action plan creation',
        'Email follow-up'
      ],
      popular: false
    },
    {
      title: '5-Session Package',
      price: 'KES 13,500',
      period: 'Save KES 1,500',
      features: [
        'Five 60-minute sessions',
        'Comprehensive financial plan',
        'Budget template included',
        'WhatsApp support between sessions',
        'Progress tracking'
      ],
      popular: true
    },
    {
      title: '10-Session Package',
      price: 'KES 25,000',
      period: 'Save KES 5,000',
      features: [
        'Ten 60-minute sessions',
        'Complete financial transformation',
        'All templates & tools',
        'Priority WhatsApp support',
        'Monthly progress reviews',
        'Lifetime access to resources'
      ],
      popular: false
    }
  ];

  const groupPricing = {
    title: 'Group Coaching',
    price: 'KES 2,000',
    period: 'per person/session',
    features: [
      'Monthly group sessions',
      'Peer support network',
      'Shared learning experience',
      'Affordable for organizations'
    ]
  };

  const masterclassPricing = [
    {
      title: 'Online Masterclass',
      price: 'KES 1,500',
      features: ['Live interactive session', 'Recording access', 'Digital materials', 'Q&A participation']
    },
    {
      title: 'Physical Masterclass',
      price: 'KES 3,000',
      features: ['In-person experience', 'Networking opportunities', 'Printed materials', 'Refreshments included', 'Certificate']
    }
  ];

  const corporatePricing = [
    {
      title: 'Half-Day Seminar',
      price: 'From KES 30,000',
      features: ['4-hour session', 'Up to 30 participants', 'Customized content', 'Materials included']
    },
    {
      title: 'Full-Day Seminar',
      price: 'From KES 55,000',
      features: ['8-hour session', 'Up to 50 participants', 'Comprehensive training', 'All materials & lunch', 'Follow-up session']
    }
  ];

  const accountingPackages = [
    {
      title: 'Starter Package',
      subtitle: 'Micro Businesses',
      price: 'KES 15,000',
      period: '/month',
      features: [
        'Basic bookkeeping',
        'Monthly financial reports',
        'Bank reconciliation',
        'Tax filing support',
        'Email support'
      ],
      popular: false
    },
    {
      title: 'Growth Package',
      subtitle: 'SMEs',
      price: 'KES 30,000',
      period: '/month',
      features: [
        'Full bookkeeping services',
        'Monthly financial statements',
        'Budgeting & forecasting',
        'Payroll processing',
        'Tax planning & filing',
        'Dedicated accountant',
        'Phone & email support'
      ],
      popular: true
    },
    {
      title: 'Enterprise Package',
      subtitle: 'NGOs & Large SMEs',
      price: 'From KES 60,000',
      period: '/month',
      features: [
        'Comprehensive financial management',
        'Grant financial reporting',
        'Audit preparation',
        'Board financial reports',
        'Strategic financial advisory',
        'Dedicated team',
        'Priority support'
      ],
      popular: false
    }
  ];

  const mediaPricing = [
    { title: 'Radio/Podcast Appearance', price: 'KES 10,000+' },
    { title: 'TV Interview', price: 'KES 25,000+' },
    { title: 'Keynote Speaking', price: 'From KES 50,000' },
    { title: 'Panel Discussion', price: 'Custom Quote' }
  ];

  const faqs = [
    {
      question: 'How do I book a coaching session?',
      answer: 'You can book a session through our online booking page. Select your preferred date and time, and complete the payment to confirm your booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, bank transfers, and major credit/debit cards. For corporate clients, we also offer invoice-based payments.'
    },
    {
      question: 'Can I get a refund if I cancel?',
      answer: 'Yes, we offer full refunds for cancellations made at least 48 hours before the scheduled session. Cancellations made within 48 hours are eligible for rescheduling.'
    },
    {
      question: 'Do you offer discounts for organizations?',
      answer: 'Yes! We offer special rates for organizations booking multiple sessions or services. Contact us for a customized quote.'
    },
    {
      question: 'Are online sessions as effective as in-person?',
      answer: 'Absolutely! Our online sessions are highly interactive and effective. Many clients prefer the convenience of virtual coaching.'
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
              Pricing
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparent & Competitive Pricing
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Invest in your financial future with our affordable coaching and professional services. 
              Tailored for the Kenyan market.
            </p>
          </div>
        </div>
      </section>

      {/* One-on-One Coaching */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Personal Finance Coaching
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              One-on-one sessions designed to transform your relationship with money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coachingPricing.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-gold scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="font-serif text-xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="font-serif text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm block mt-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? 'gold' : 'default'} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/booking">Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Group Coaching */}
          <div className="mt-16 max-w-2xl mx-auto">
            <Card className="border-0 shadow-brand bg-cream">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {groupPricing.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{groupPricing.period}</p>
                  <ul className="flex flex-wrap gap-3">
                    {groupPricing.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm bg-background px-3 py-1 rounded-full">
                        <CheckCircle className="h-3 w-3 text-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center md:text-right shrink-0">
                  <div className="font-serif text-3xl font-bold text-foreground">{groupPricing.price}</div>
                  <Button variant="gold" className="mt-4" asChild>
                    <Link to="/contact">Inquire</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Masterclasses & Seminars */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Masterclasses */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Masterclasses
              </h2>
              <div className="space-y-6">
                {masterclassPricing.map((item, index) => (
                  <Card key={index} className="border-0 shadow-brand">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                        <span className="font-serif text-2xl font-bold text-gold">{item.price}</span>
                      </div>
                      <ul className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="gold" className="mt-8" asChild>
                <Link to="/masterclass">Register for Masterclass</Link>
              </Button>
            </div>

            {/* Corporate Seminars */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Corporate & NGO Seminars
              </h2>
              <div className="space-y-6">
                {corporatePricing.map((item, index) => (
                  <Card key={index} className="border-0 shadow-brand">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-serif text-lg font-bold">{item.title}</h3>
                        <span className="font-serif text-xl font-bold text-gold">{item.price}</span>
                      </div>
                      <ul className="grid grid-cols-2 gap-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="default" className="mt-8" asChild>
                <Link to="/contact">Request Corporate Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Packages */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              SME Accounting Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional accounting and financial management for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accountingPackages.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-gold' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-gold text-secondary-foreground text-sm font-bold px-4 py-1 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-4 pt-8">
                  <p className="text-gold text-sm font-semibold mb-1">{plan.subtitle}</p>
                  <CardTitle className="font-serif text-xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="font-serif text-3xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.popular ? 'gold' : 'default'} 
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Pricing */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold mb-6">
                Media & Speaking Engagements
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Book Susan for interviews, panels, podcasts, and keynote speaking opportunities.
              </p>
              <div className="space-y-4">
                {mediaPricing.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-primary-foreground/20">
                    <span className="font-medium">{item.title}</span>
                    <span className="text-gold font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8">
              <h3 className="font-serif text-2xl font-bold mb-4">Request Custom Quote</h3>
              <p className="text-primary-foreground/80 mb-6">
                For customized packages, bulk bookings, or special requirements, 
                contact us for a personalized quote.
              </p>
              <Button variant="gold" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Contact for Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border-0 shadow-brand px-6"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-gold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PricingPage;
