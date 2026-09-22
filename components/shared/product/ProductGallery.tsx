"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProductGallery({ images }: { images: string[] }) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10">
        <Image
          src={activeImage}
          alt="Product Image"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((img, index) => (
          <button
            key={img}
            type="button"
            onClick={() => setActiveImage(img)}
            className={cn(
              "relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all",
              activeImage === img
                ? "border-primary ring-2 ring-primary/20"
                : "border-transparent hover:border-muted-foreground/30"
            )}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
