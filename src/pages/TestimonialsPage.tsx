import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'James Mwangi',
      role: 'Entrepreneur, Nairobi',
      content: 'Susan transformed how I view money. Her coaching helped me clear my debt and start saving for the first time in my life. Within 6 months, I had an emergency fund and was investing in my business growth.',
      rating: 5,
      image: null
    },
    {
      name: 'Grace Wanjiku',
      role: 'NGO Director, Kisumu',
      content: 'The accounting services are top-notch. Our financial reports are now always on time and our donors love the transparency. Susan\'s team understands the unique needs of non-profit organizations.',
      rating: 5,
      image: null
    },
    {
      name: 'Peter Ochieng',
      role: 'Young Professional, Mombasa',
      content: 'The masterclass was eye-opening! I learned practical budgeting tips I could implement immediately. As a fresh graduate, I now have a solid financial foundation for my future.',
      rating: 5,
      image: null
    },
    {
      name: 'Mary Akinyi',
      role: 'Small Business Owner',
      content: 'I was drowning in financial chaos before working with Susan. She helped me separate my business and personal finances, set up proper bookkeeping, and now I know exactly where every shilling goes.',
      rating: 5,
      image: null
    },
    {
      name: 'David Kimani',
      role: 'Corporate Employee',
      content: 'The group coaching sessions were perfect for me and my colleagues. We learned together and hold each other accountable. Our whole team now has savings goals we\'re working towards.',
      rating: 5,
      image: null
    },
    {
      name: 'Elizabeth Wambui',
      role: 'Retiree',
      content: 'I wish I had found Susan earlier in my career. Even at my age, she helped me optimize my pension and create additional income streams. It\'s never too late to improve your finances.',
      rating: 5,
      image: null
    },
    {
      name: 'Michael Otieno',
      role: 'Tech Startup Founder',
      content: 'Susan\'s understanding of both personal and business finance is remarkable. She helped us structure our startup\'s finances properly from day one, saving us from costly mistakes.',
      rating: 5,
      image: null
    },
    {
      name: 'Sarah Njeri',
      role: 'University Student',
      content: 'As a student with limited income, I thought financial planning wasn\'t for me. Susan showed me that good money habits start now. I\'m managing my pocket money better than ever!',
      rating: 4,
      image: null
    },
    {
      name: 'John Mutua',
      role: 'Sacco Manager',
      content: 'We invited Susan to train our Sacco members on financial literacy. The feedback was overwhelmingly positive. Members are now making better financial decisions.',
      rating: 5,
      image: null
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
              Testimonials
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Stories, Real Transformations
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Hear from our clients who have transformed their financial lives through 
              our coaching and services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-brand hover:shadow-brand-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-gold/30 mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'fill-gold text-gold' 
                            : 'text-muted'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground text-lg">
              Numbers that speak to our commitment to financial empowerment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '500+', label: 'Lives Transformed' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '85%', label: 'Return Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Join hundreds of clients who have transformed their finances with our guidance.
            </p>
            <Button variant="gold" size="xl" asChild>
              <Link to="/booking">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
