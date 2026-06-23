import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundContent() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-7xl font-light tracking-tight text-muted-foreground">
        404
      </p>
      <p className="text-muted-foreground">صفحه پیدا نشد</p>
      <Button asChild variant="outline">
        <Link href="/">بازگشت به خانه</Link>
      </Button>
    </div>
  );
}
