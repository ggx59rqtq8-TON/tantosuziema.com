import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock, Search, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { blogPosts, categories, type BlogPost } from '@/data/blogPosts';

const BlogPostDetail = ({ post, onBack }: { post: BlogPost; onBack: () => void }) => (
  <main className="min-h-screen bg-background pt-32 pb-20">
    <article className="container mx-auto px-4 max-w-4xl">
      <Button variant="ghost" onClick={onBack} className="mb-8">
        ← Back to Blog
      </Button>

      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <Badge className="mb-3 bg-gold text-white">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
        </div>
      </div>

      <div className="flex items-center gap-6 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        {post.content.split('\n\n').map((paragraph, index) => {
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
                  <li key={i} className="text-foreground/80">{item.replace('• ', '')}</li>
                ))}
              </ul>
            );
          }
          if (paragraph.match(/^\d\./)) {
            return (
              <ol key={index} className="list-decimal list-inside space-y-2 my-4">
                {paragraph.split('\n').map((item, i) => (
                  <li key={i} className="text-foreground/80">{item.replace(/^\d\.\s*/, '')}</li>
                ))}
              </ol>
            );
          }
          return (
            <p key={index} className="text-foreground/80 mb-4 leading-relaxed">{paragraph}</p>
          );
        })}
      </div>

      <div className="mt-12 pt-8 border-t border-border">
        <p className="text-sm text-muted-foreground italic">
          Author of this article, {post.author} is a personal finance coach.
          Email: susan@tantosuziema.com
        </p>
      </div>
    </article>
  </main>
);

const BlogPostCard = ({ post, index, onClick }: { post: BlogPost; index: number; onClick: () => void }) => (
  <Card
    className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 cursor-pointer animate-fade-up"
    style={{ animationDelay: `${index * 100}ms` }}
    onClick={onClick}
  >
    <div className="relative h-56 overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
      <CardTitle className="text-xl group-hover:text-gold transition-colors">{post.title}</CardTitle>
      <CardDescription className="text-base">{post.excerpt}</CardDescription>
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
);

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
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
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
                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  index={index}
                  onClick={() => setSelectedPost(post)}
                />
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
