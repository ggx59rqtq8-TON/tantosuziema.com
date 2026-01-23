import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import financeGrowth from '@/assets/finance-growth.jpg';

const MasterclassPage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Registration Successful!",
      description: "Check your email for confirmation and payment instructions.",
    });
    
    setEmail('');
    setIsRegistering(false);
  };

  const syllabus = [
    {
      title: 'Module 1: Financial Foundations',
      topics: ['Understanding your money mindset', 'Setting SMART financial goals', 'Tracking income and expenses']
    },
    {
      title: 'Module 2: Budgeting Mastery',
      topics: ['Creating a budget that works', 'The 50/30/20 rule', 'Tools and apps for budgeting']
    },
    {
      title: 'Module 3: Debt Freedom',
      topics: ['Understanding good vs bad debt', 'Debt elimination strategies', 'Avoiding debt traps']
    },
    {
      title: 'Module 4: Saving & Investing',
      topics: ['Building an emergency fund', 'Introduction to investing', 'Investment options in Kenya']
    }
  ];

  const benefits = [
    'Practical, actionable strategies',
    'Interactive Q&A sessions',
    'Lifetime access to materials',
    'Certificate of completion',
    'Join a community of learners',
    'Affordable investment in yourself'
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-light/50 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                Upcoming Masterclass
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Financial Freedom Masterclass
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                A comprehensive 4-hour intensive workshop designed to transform your 
                relationship with money and set you on the path to financial freedom.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gold" />
                  <span>February 15, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gold" />
                  <span>10:00 AM - 2:00 PM EAT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="#register">
                    Register Now - KES 1,500
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline-white" size="lg">
                  <Play className="h-5 w-5 mr-2" />
                  Watch Preview
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={financeGrowth} 
                alt="Financial Growth" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-brand-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                    <span className="font-bold text-secondary-foreground">100+</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Seats Available</div>
                    <div className="text-sm text-muted-foreground">Limited spots remaining</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              What You'll Learn
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive curriculum designed to give you practical skills 
              you can implement immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {syllabus.map((module, index) => (
              <Card key={index} className="border-0 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-secondary-foreground font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground">
                      {module.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                Why Attend This Masterclass?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                This isn't just another finance seminar. It's a transformative experience 
                designed to change how you think about and manage money.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-hero rounded-3xl p-8 text-primary-foreground">
              <h3 className="font-serif text-2xl font-bold mb-6">Pricing Options</h3>
              <div className="space-y-6">
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Online Access</span>
                    <span className="font-serif text-2xl font-bold text-gold">KES 1,500</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    Join live via Zoom • Recording access • Digital materials
                  </p>
                </div>
                <div className="bg-primary-foreground/10 rounded-xl p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Physical Attendance</span>
                    <span className="font-serif text-2xl font-bold text-gold">KES 3,000</span>
                  </div>
                  <p className="text-sm text-primary-foreground/70">
                    In-person experience • Networking • Printed materials • Refreshments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-24 bg-gradient-hero text-primary-foreground scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Spaces are limited. Register now to secure your place in the masterclass.
            </p>
            
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleRegister} className="space-y-6">
                  <Input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="h-14 text-center text-lg"
                  />
                  <Button 
                    type="submit" 
                    variant="gold" 
                    size="xl" 
                    className="w-full"
                    disabled={isRegistering}
                  >
                    {isRegistering ? 'Registering...' : 'Register for Masterclass'}
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    You'll receive payment instructions via email after registration.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'Is this masterclass suitable for beginners?',
                a: 'Absolutely! This masterclass is designed for anyone at any stage of their financial journey.'
              },
              {
                q: 'Will I get a recording if I can\'t attend live?',
                a: 'Yes, all registered participants receive lifetime access to the recording.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept M-Pesa, bank transfers, and major credit/debit cards.'
              },
              {
                q: 'Can I get a refund if I change my mind?',
                a: 'Full refunds are available up to 48 hours before the event.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-brand">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MasterclassPage;
