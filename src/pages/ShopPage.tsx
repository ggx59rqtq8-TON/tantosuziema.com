import { useEffect, useState } from "react";
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from "@/lib/shopify";
import { ProductCard } from "@/components/shop/ProductCard";
import { Loader2, ShoppingBag } from "lucide-react";

const ShopPage = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first: 20 });
        setProducts(data?.data?.products?.edges || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen pt-32 pb-16">
      {/* Hero */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Shop <span className="text-gradient-gold">Resources</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Calendars, workbooks, and tools designed to help you master your personal and business finances.
          </p>
        </div>
      </section>

      {/* Products Grid */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default ShopPage;
