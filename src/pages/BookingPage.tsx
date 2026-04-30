import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const BookingPage = () => {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState('one-on-one');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    {
      id: 'one-on-one',
      title: 'One-on-One Coaching',
      duration: '60 minutes',
      price: 'KES 3,000',
      description: 'Personal session tailored to your financial goals'
    },
    {
      id: 'group',
      title: 'Group Coaching',
      duration: '90 minutes',
      price: 'KES 2,000/person',
      description: 'Learn with peers in a supportive environment'
    },
    {
      id: 'consultation',
      title: 'Free Consultation',
      duration: '15 minutes',
      price: 'Free',
      description: 'Introductory call to discuss your needs'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Booking Request Submitted!",
      description: "We'll confirm your appointment within 24 hours.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      notes: ''
    });
    setIsSubmitting(false);
  };

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
              Book a Session
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Schedule Your Coaching Session
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Take the first step towards financial freedom. Book a session 
              and let's create a roadmap for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Service Selection */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Select a Service
              </h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <Card 
                    key={service.id}
                    className={`border-2 cursor-pointer transition-all duration-300 ${
                      selectedService === service.id 
                        ? 'border-gold shadow-gold' 
                        : 'border-transparent shadow-brand hover:shadow-brand-lg'
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{service.title}</h3>
                        {selectedService === service.id && (
                          <CheckCircle className="h-5 w-5 text-gold shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-gold" />
                          {service.duration}
                        </span>
                        <span className="font-bold text-gold">{service.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* What to Expect */}
              <div className="mt-8 p-6 bg-cream rounded-2xl">
                <h3 className="font-semibold text-foreground mb-4">What to Expect</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    'Confirmation email within 24 hours',
                    'Zoom link or location details',
                    'Pre-session questionnaire',
                    'Personalized action plan'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-brand-lg">
                <CardContent className="p-8 md:p-10">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                    Book Your Session
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill in your details and preferred time. We'll confirm your booking shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your full name"
                          className="h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+254 7XX XXX XXX"
                        className="h-12"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                          className="h-12"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Time *
                        </label>
                        <select
                          required
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full h-12 rounded-lg border border-input bg-background px-4 text-foreground"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        What would you like to discuss?
                      </label>
                      <Textarea
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about your financial goals or challenges..."
                        className="min-h-[120px] resize-none"
                      />
                    </div>

                    <div className="bg-cream rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="font-semibold text-foreground">
                            {services.find(s => s.id === selectedService)?.title}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {services.find(s => s.id === selectedService)?.duration}
                          </div>
                        </div>
                        <div className="font-serif text-2xl font-bold text-gold">
                          {services.find(s => s.id === selectedService)?.price}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Payment details will be shared after booking confirmation.
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      variant="gold" 
                      size="xl" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Booking'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative CTA */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Prefer to Chat First?
            </h2>
            <p className="text-muted-foreground mb-8">
              No problem! Reach out via WhatsApp for a quick chat or 
              send us an email with your questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-green-500 hover:bg-green-600 text-white" 
                size="lg"
                asChild
              >
                <a 
                  href="https://wa.me/254721454162?text=Hi,%20I'd%20like%20to%20book%20a%20coaching%20session" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
