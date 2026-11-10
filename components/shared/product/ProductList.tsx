import Image from "next/image";
import Link from "next/link";
import data from "@/data/products";
import { formatPrice } from "@/lib/utils";


export default function ProductList({}) {

      return(
             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.products.map((product) => (
          <Link
            key={product.slug}
            href={`/product/${product.slug}`}
            className="group overflow-hidden rounded-xl border bg-card transition hover:border-foreground/20"
          >
            <div className="relative aspect-square overflow-hidden bg-muted">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="space-y-2 p-4">
              <p className="text-sm text-muted-foreground">{product.brand}</p>
              <h2 className="font-semibold leading-snug">{product.name}</h2>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="font-bold">{formatPrice(product.price)}</span>
                <span className="text-xs text-muted-foreground">
                  موجودی: {product.stock}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      )
}
