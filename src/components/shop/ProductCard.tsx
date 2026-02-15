import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import type { ShopifyProduct } from "@/lib/shopify";
import { toast } from "sonner";

interface ProductCardProps {
  product: ShopifyProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const { node } = product;
  const firstVariant = node.variants.edges[0]?.node;
  const image = node.images.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!firstVariant) return;
    await addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });
    toast.success(`${node.title} added to cart`, { position: "top-center" });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden border border-border shadow-brand hover:shadow-brand-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-square bg-muted overflow-hidden">
          {image ? (
            <img src={image.url} alt={image.altText || node.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <ShoppingCart className="h-12 w-12" />
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-gold transition-colors">{node.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{node.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">{price.currencyCode} {parseFloat(price.amount).toFixed(2)}</span>
            <Button variant="navy" size="sm" className="text-gold" onClick={handleAddToCart} disabled={isLoading || !firstVariant}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-4 h-4 mr-1" />Add</>}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};
