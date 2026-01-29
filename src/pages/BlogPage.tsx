import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Search, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'the-five-minute-favour',
    title: 'The Five Minute Favour',
    excerpt: 'We cannot help everyone but everyone can help someone. The five-minute favour is exactly this – you deliberately set out to do a favour for someone that will take you exactly 5 minutes.',
    content: `Yesterday I came across the beautiful phrase I have used in the title today.

One day I was carrying a large suitcase and a bag up the stairs. Well, I travel a lot and I do not travel light. I met a boy running down the stairs. He got to where I was and politely offered to help me with my luggage. I was so glad and I let him. Once I got to the door, he was off like a lightning bolt and I was left shouting "Thank you!" to his quickly retreating back.

I was touched. It is not often nowadays that you find people that help at no cost. That same evening, I was on the way to my house. I got in the matatu and an elderly lady was trying to get in after me. She had several baskets and bags that she was slowly trying to load into the matatu before getting in herself. Now normally I leave and let live but on this day, I remembered the kindness of the boy earlier in the day and so I helped the lady lift up a sack into the matatu.

What I did is what some people call paying it forward. There are some favours and services that people do for us consciously or unconsciously that we could never repay. The next best thing to do is to repeat the favour to someone else in the hopes that they will catch the bug and do it to the next and the next and the next. I define this as investing in others. Try it and see what happens.

We cannot help everyone but everyone can help someone. The five-minute favour is exactly this. You deliberately set out to do a favour for someone that will take you exactly 5 minutes. For example:

• Like a tweet or a post on social media
• Forward a vacancy to someone who is looking
• Send out a recommendation for a referee
• Compliment someone on a job well done
• Buy from a vendor that seems to be struggling
• Give up your place in a long queue

Be creative. Find 5 Five minute favours and see how they change your world.`,
    date: 'October 19, 2019',
    author: 'Susan Nyakiamo',
    category: 'Lifestyle',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/45842/clasped-hands-comfort-hands-people-45842.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'what-is-the-purpose-of-working',
    title: 'What Is The Purpose Of Working?',
    excerpt: 'I heard Brian Tracy\'s answer to this and I am leaning towards agreeing with him. We work so that we can get to a point where we do not have to work any more.',
    content: `Ever wondered about this?

I heard Brian Tracy's answer to this and I am leaning towards agreeing with him. Take a minute and ask yourself, "Why am I working/ Studying/ or whatever your occupation may be." His take is that we work so that we can get to a point where we do not have to work any more. Call it retirement, taking it easy or financial independence.

The point being, if you want to keep working because you love your job, it is a matter of choice, not a necessity. I had never thought about it that way before. My focus had been more from the financial independence perspective.

In the same way, businesses do tax planning, we should make a retirement plan.

**Step 1**: How long would you like to live after you stop working? If it was up to you, how many years would you like to continue living after retirement? Let me say 20 years or thirty or forever. This is your long term goal.

**Step 2**: How much money will you need to be able to sustain the lifestyle you want without working? In order to get this number, you need to establish how much you currently spend per month.

**Step 3**: Armed with your list of all your regular monthly expenses, you can now extrapolate and come up with your number. Say your number is Kshs.25,000 – multiply this by 12 to get your annual needs. Next, multiply by 20 (if 20 is the number of years you would like to live after retirement if it was up to you). And just like that, you have your Number!

**Step 4**: Now work backwards to establish how much you need to invest in order to reach your Number. Note that I said invest and not save. When you invest, you expect a higher return and of course, you would be earning interest on both the principal and the interest accrued.

Wouldn't that be lovely?`,
    date: 'November 13, 2019',
    author: 'Susan Nyakiamo',
    category: 'Finance',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/162540/hard-hat-firefighter-helmet-fireman-162540.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'never-go-window-shopping',
    title: 'Never Go Window Shopping With Money In Your Pocket',
    excerpt: 'I do not know what happens to us when we have cash on us. It is as if it burns a hole in our pockets. For this reason, all financial advisors insist that one prepares the budget before receiving the cash.',
    content: `I heard this saying for the first time in the movie "The Preacher's Wife", starring Denzel Washington and Whitney Houston.

I do not know what happens to us when we have cash on us. It is as if it burns a hole in our pockets. For this reason, all financial advisors insist that one prepares the budget before receiving the cash. The same rationale applies to investment.

The reason I shared the document on risk tolerance at the beginning of the investment series is exactly the same. Investments decisions are hugely affected by our psychological state at the time the decision is made. To remove the emotional aspect when making investments, we need to have the strategy cast in stone before you actually commit to the investment.

Take the stock exchange. When one buys shares it is most likely because they heard or saw the company they are investing in made profits or is paying out high dividends. A few months later, the value of the share in the stock exchange falls for whatever reason and you feel like you made a bad investment.

**Share value falls**: The knee jerk reaction is to sell your shareholding before the value falls even further. However, this is the exact opposite reaction you should have as an investor. The only way you will stick it out is if you have an investment strategy. Before making the investment, you need to set your limits.

For example, I would like to make a 30% profit on this share and then I will sell. Or I will hold the share until I make 100% profit etc. And when you achieve your goal, please sell and get out.

You will never know the best time to jump ship. The only way to mitigate this risk and your natural instincts in order to stick to the plan is to have the plan before the market starts fluctuating. The same applies to budgeting.

You should budget before the salary is in your account otherwise you go cash crazy. Now you know. Budget in advance and prepare an investment strategy/plan in advance as well.`,
    date: 'November 12, 2019',
    author: 'Susan Nyakiamo',
    category: 'Investment',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'your-relationship-with-money',
    title: 'Your Relationship With Money',
    excerpt: 'It always seems impossible until it is done. Do you remember Mike Tyson? The unbeatable and undisputed boxing heavyweight champion? Then one day he got knocked out by Buster Douglas.',
    content: `**It Always Seems Impossible Until It Is Done**

Do you remember Mike Tyson? The unbeatable and undisputed boxing heavyweight champion? For a while he held that title. He won his matches with frequent knock-outs making him the darling of his fans. However, at some point, he became so notorious that nobody wanted to fight him. Then one day he got knocked out by Buster Douglas.

It was unbelievable. Where did this unknown come from and how did he manage to beat the unbeatable champion? On the flipside, after Buster Douglas, everybody wanted to fight Mike Tyson and make a name for themselves.

I got these stories from Les Brown but I find this repeated in all areas of life. An insurmountable mountain that gets crested by one crazy guy and suddenly everyone is summiting the mountain like it is the norm. As social beings, we tend to follow what is done.

Probably you have been told that people from your area, people like you or nobody in your family has ever been successful. So what? Be the trail blazer. How many millionaire stories have you heard or read about that describe the individual as being broke or bankrupt at some point? This means if you are struggling now, you are in good company.

What is stopping you from following their example? Go on beat the 'Mike Tyson' of poverty and indebtedness. Many people have done it before you and left a smoother trail for you to follow.

**Seven Cures For A Lean Purse:**

1. Keep (save) a tenth of all you earn
2. Control your expenditure – always spend less than you earn
3. Multiply your money – Select some form of investment
4. Guard your treasure from loss – identify all the risks your investment could face
5. Make your house a profitable investment
6. Insure a future income for when you will not be able to earn a living
7. Increase your ability to earn

— George S. Clason`,
    date: 'June 26, 2019',
    author: 'Susan Nyakiamo',
    category: 'Mindset',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const categories = ['All', 'Lifestyle', 'Finance', 'Investment', 'Mindset'];

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  if (selectedPost) {
    return (
      <main className="min-h-screen bg-background pt-32 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => setSelectedPost(null)}
            className="mb-8"
          >
            ← Back to Blog
          </Button>
          
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <Badge className="mb-3 bg-gold text-white">{selectedPost.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {selectedPost.title}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{selectedPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{selectedPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{selectedPost.readTime}</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {selectedPost.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('•')) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="text-foreground/80">
                        {item.replace('• ', '')}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="text-foreground/80">
                        {item.replace(/^\d\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={index} className="text-foreground/80 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground italic">
              Author of this article, {selectedPost.author} is a personal finance coach. 
              Email: susan@tantosuziema.com
            </p>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              <span className="text-gradient-gold">Mind Your Money</span>
              <br />
              Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-up animation-delay-200">
              Insights, tips, and stories to help you build a better relationship with your finances
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-12 h-12 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'gold' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No articles found</p>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gold text-white">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-gold transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="group-hover:text-gold">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Get the latest financial tips and insights delivered to your inbox.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/contact">Subscribe to Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
