import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { storefrontApiRequest, STOREFRONT_PRODUCT_BY_HANDLE_QUERY } from "@/lib/shopify";
import type { ShopifyProduct } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetailPage = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await storefrontApiRequest(STOREFRONT_PRODUCT_BY_HANDLE_QUERY, { handle });
        setProduct(data?.data?.productByHandle || null);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [handle]);

  if (loading) {
    return (
      <main className="min-h-screen pt-32 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4">
        <h1 className="font-serif text-2xl">Product not found</h1>
        <Button asChild variant="navy" className="text-gold">
          <Link to="/shop"><ArrowLeft className="w-4 h-4 mr-2" />Back to Shop</Link>
        </Button>
      </main>
    );
  }

  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIdx]?.node;
  const image = product.images.edges[0]?.node;
  const shopifyProduct: ShopifyProduct = { node: product };

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    await addItem({
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success(`${product.title} added to cart`, { position: "top-center" });
  };

  return (
    <main className="min-h-screen pt-32 pb-16">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/shop"><ArrowLeft className="w-4 h-4 mr-2" />Back to Shop</Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
            {image ? (
              <img src={image.url} alt={image.altText || product.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <ShoppingCart className="h-16 w-16" />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-muted-foreground text-lg mb-6">{product.description}</p>

            {/* Variant Selection */}
            {variants.length > 1 && (
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">{product.options[0]?.name || "Option"}</label>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v, i) => (
                    <Button
                      key={v.node.id}
                      variant={i === selectedVariantIdx ? "navy" : "outline"}
                      size="sm"
                      className={i === selectedVariantIdx ? "text-gold" : ""}
                      onClick={() => setSelectedVariantIdx(i)}
                    >
                      {v.node.title}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            <div className="text-2xl font-bold mb-6">
              {selectedVariant?.price.currencyCode} {parseFloat(selectedVariant?.price.amount || "0").toFixed(2)}
            </div>

            <Button variant="gold" size="lg" onClick={handleAddToCart} disabled={isLoading || !selectedVariant}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><ShoppingCart className="w-5 h-5 mr-2" />Add to Cart</>}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
