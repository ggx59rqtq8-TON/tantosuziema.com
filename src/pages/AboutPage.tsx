import { Link } from 'react-router-dom';
import { Award, BookOpen, Users, Briefcase, Heart, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-susan.jpg';

const AboutPage = () => {
  const achievements = [
    { icon: Users, value: '500+', label: 'Clients Coached' },
    { icon: Briefcase, value: '50+', label: 'Businesses Served' },
    { icon: BookOpen, value: '100+', label: 'Masterclasses Held' },
    { icon: Award, value: '10+', label: 'Years Experience' }
  ];

  const qualifications = [
    'Certified Public Accountant (CPA-K)',
    'Certified Financial Coach',
    'Bachelor of Commerce (Accounting)',
    'Member, Institute of Certified Public Accountants of Kenya (ICPAK)',
    'Advanced Financial Planning Certificate'
  ];

  const experience = [
    {
      period: '2020 - Present',
      role: 'Founder & Lead Finance Coach',
      company: 'Tantosuziema',
      description: 'Founded Tantosuziema to empower individuals and businesses with financial wisdom. Leading coaching sessions, masterclasses, and providing accounting services.'
    },
    {
      period: '2015 - 2020',
      role: 'Senior Accountant',
      company: 'Leading NGO (Name Withheld)',
      description: 'Managed financial operations for a large international NGO with multiple projects and donor relationships.'
    },
    {
      period: '2012 - 2015',
      role: 'Finance Officer',
      company: 'SME Financial Services',
      description: 'Provided accounting and financial advisory services to small and medium enterprises across Kenya.'
    }
  ];

  const mediaFeatures = [
    'KTN News - Personal Finance Segment',
    'Citizen Radio - Money Matters Show',
    'Business Daily - Expert Contributor',
    'Various Podcasts on Financial Literacy'
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-6">
                About Susan
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Susan Nyakiamo
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-6">
                Personal Finance Coach, Certified Public Accountant, and founder of Tantosuziema. 
                Passionate about empowering Kenyans to achieve financial freedom.
              </p>
              <div className="flex gap-4">
                <Button variant="gold" size="lg" asChild>
                  <Link to="/booking">Book a Session</Link>
                </Button>
                <Button variant="outline-white" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Susan Nyakiamo" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <div className="font-serif text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                My Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Growing up in Kenya, I witnessed firsthand how a lack of financial literacy could 
                keep hardworking families trapped in cycles of debt and financial stress. This 
                experience ignited a passion in me to change the narrative around money in our communities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                After completing my accounting degree and becoming a Certified Public Accountant, 
                I spent years working with NGOs and SMEs, helping them manage their finances and 
                achieve their organizational goals. But I realized that the real change needed to 
                happen at the individual level.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                In 2020, I founded <span className="font-semibold text-foreground">Tantosuziema</span> with 
                a simple mission: to make quality financial education accessible to everyone. The name 
                comes from my belief that <span className="italic">"Nothing is as natural as a fresh beginning."</span> 
                No matter where you are in your financial journey, you can always start anew.
              </p>
              <p className="text-lg leading-relaxed">
                Today, I combine my expertise in accounting with practical coaching techniques to 
                help individuals take control of their money. From young professionals just starting 
                out to business owners looking to scale, I meet my clients where they are and guide 
                them towards where they want to be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Qualifications */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Qualifications & Certifications
              </h2>
              <div className="space-y-4">
                {qualifications.map((qual, index) => (
                  <Card key={index} className="border-0 shadow-brand">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                        <Award className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{qual}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-gold">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gold" />
                    <span className="text-gold font-semibold text-sm">{exp.period}</span>
                    <h3 className="font-serif text-xl font-bold text-foreground mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Featured In
            </h2>
            <p className="text-muted-foreground text-lg">
              Media appearances and contributions on financial literacy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-brand text-center">
                <CardContent className="p-6">
                  <p className="font-medium text-foreground">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Ready to transform your relationship with money? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <Link to="/booking">
                  Book a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline-white" size="xl" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
