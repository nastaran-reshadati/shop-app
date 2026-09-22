import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShoppingCart } from "lucide-react";
import data from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProductGallery from "@/components/shared/product/ProductGallery";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "محصول پیدا نشد" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const product = data.products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const inStock = product.stock > 0;

  return (
    <div className="space-y-6">
      <Button asChild variant="ghost" size="sm">
        <Link href="/">
          <ArrowRight />
          بازگشت به محصولات
        </Link>
      </Button>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} />

        <Card className="h-fit">
          <CardHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{product.category}</Badge>
              <Badge variant="outline">{product.brand}</Badge>
              <Badge variant={inStock ? "default" : "destructive"}>
                {inStock ? "موجود" : "ناموجود"}
              </Badge>
            </div>
            <CardTitle className="text-2xl font-bold">{product.name}</CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {product.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Separator />
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-muted-foreground">قیمت</p>
                <p className="text-2xl font-bold">
                  {formatPrice(product.price)}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                موجودی: {product.stock.toLocaleString("fa-IR")} عدد
              </p>
            </div>
          </CardContent>

          <CardFooter>
            <Button size="lg" className="w-full" disabled={!inStock}>
              <ShoppingCart data-icon="inline-start" />
              افزودن به سبد خرید
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
