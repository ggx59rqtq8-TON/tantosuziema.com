import { useEffect, useState } from "react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/shop/ProductCard";
import { Loader2, ShoppingBag } from "lucide-react";

const CATEGORIES = [
  {
    title: "Entry Level – Digital Products",
    tags: ["entry-level"],
  },
  {
    title: "Mid Level – Group Training",
    tags: ["mid-level"],
  },
  {
    title: "High Level – 1:1 Coaching",
    tags: ["high-level"],
  },
  {
    title: "Accounting & Financial Management",
    tags: ["accounting"],
  },
];

function categorizeProducts(products: ShopifyProduct[]) {
  const categorized: Record<string, ShopifyProduct[]> = {};
  const uncategorized: ShopifyProduct[] = [];

  for (const category of CATEGORIES) {
    categorized[category.title] = [];
  }

  for (const product of products) {
    const productTags = (product.node as any).tags
      ? (product.node as any).tags
      : [];
    // Tags come as comma-separated string or array
    const tagList: string[] = Array.isArray(productTags)
      ? productTags.map((t: string) => t.toLowerCase().trim())
      : typeof productTags === "string"
      ? productTags.split(",").map((t: string) => t.toLowerCase().trim())
      : [];

    let placed = false;
    for (const category of CATEGORIES) {
      if (category.tags.some((tag) => tagList.includes(tag))) {
        categorized[category.title].push(product);
        placed = true;
        break;
      }
    }
    if (!placed) {
      uncategorized.push(product);
    }
  }

  return { categorized, uncategorized };
}

const ShopPage = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 50 });
        setProducts(data?.data?.products?.edges || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const { categorized, uncategorized } = categorizeProducts(products);

  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Shop <span className="text-gradient-gold">Resources & Services</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Digital products, coaching packages, and professional accounting services to help you master your finances.
          </p>
        </div>
      </section>

      {/* Products by Category */}
      <section className="container mx-auto px-4 py-16">
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="font-serif text-2xl font-semibold mb-2">No products found</h2>
            <p className="text-muted-foreground">Check back soon for new resources!</p>
          </div>
        ) : (
          <div className="space-y-16">
            {CATEGORIES.map((category) => {
              const items = categorized[category.title];
              if (!items || items.length === 0) return null;
              return (
                <div key={category.title}>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {category.title}
                  </h2>
                  <div className="w-16 h-1 bg-gold rounded-full mb-8" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((product) => (
                      <ProductCard key={product.node.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}

            {uncategorized.length > 0 && (
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Other Products
                </h2>
                <div className="w-16 h-1 bg-gold rounded-full mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {uncategorized.map((product) => (
                    <ProductCard key={product.node.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default ShopPage;
