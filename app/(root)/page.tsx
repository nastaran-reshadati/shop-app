import Image from "next/image";
import Link from "next/link";
import data from "@/data/products";
import ProductList from "@/components/shared/product/ProductList";

function formatPrice(price: number) {
  return new Intl.NumberFormat("fa-IR").format(price) + " تومان";
}

function Home() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">محصولات</h1>
        <p className="mt-2 text-muted-foreground">
          لیست محصولات فروشگاه
        </p>
      </div>

        <ProductList />
       
     
    </div>
  );
}

export default Home;
