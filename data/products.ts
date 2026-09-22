export type Product = {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  price: number;
  brand: string;
  stock: number;
};

const data = {
  products: [
    {
      name: "هدفون بی‌سیم پریمیوم",
      slug: "premium-wireless-headphones",
      category: "الکترونیک",
      description:
        "هدفون روگوشی با صدای شفاف، نویزکنسلینگ فعال و باتری تا ۳۰ ساعت پخش موسیقی.",
      image: "/images/headphones.png",
      price: 4_850_000,
      brand: "SoundMax",
      stock: 24,
    },
    {
      name: "ساعت هوشمند پرو",
      slug: "smartwatch-pro",
      category: "الکترونیک",
      description:
        "ساعت هوشمند با مانیتور ضربان قلب، GPS و نمایش اعلان‌های گوشی روی مچ دست.",
      image: "/images/smartwatch.png",
      price: 6_200_000,
      brand: "PulseTech",
      stock: 18,
    },
    {
      name: "کفش ورزشی رانینگ",
      slug: "running-sneakers",
      category: "پوشاک",
      description:
        "کفش سبک و انعطاف‌پذیر برای دویدن روزانه با کفی ضربه‌گیر و رویه تنفس‌پذیر.",
      image: "/images/sneakers.png",
      price: 3_450_000,
      brand: "SwiftRun",
      stock: 32,
    },
    {
      name: "کوله پشتی شهری",
      slug: "urban-backpack",
      category: "لوازم جانبی",
      description:
        "کوله پشتی مقاوم با محفظه لپ‌تاپ ۱۵ اینچ، جیب‌های متعدد و بندهای قابل تنظیم.",
      image: "/images/backpack.png",
      price: 2_150_000,
      brand: "TrailPack",
      stock: 40,
    },
    {
      name: "عینک آفتابی کلاسیک",
      slug: "classic-sunglasses",
      category: "لوازم جانبی",
      description:
        "عینک آفتابی با فریم سبک، محافظت UV400 و طراحی مینیمال مناسب استفاده روزمره.",
      image: "/images/sunglasses.png",
      price: 980_000,
      brand: "LumenEye",
      stock: 55,
    },
    {
      name: "دوربین دیجیتال کلاسیک",
      slug: "classic-digital-camera",
      category: "الکترونیک",
      description:
        "دوربین دیجیتال با سنسور دقیق، فوکوس سریع و کیفیت عکس مناسب عکاسی خیابانی.",
      image: "/images/camera.png",
      price: 12_900_000,
      brand: "OptiShot",
      stock: 9,
    },
    {
      name: "لپ‌تاپ اولترابوک ۱۵ اینچ",
      slug: "ultrabook-15",
      category: "لپ‌تاپ",
      description:
        "لپ‌تاپ سبک با پردازنده قوی، رم ۱۶ گیگابایت و صفحه‌نمایش Full HD مناسب کار و تحصیل.",
      image: "/images/laptop.png",
      price: 38_500_000,
      brand: "NovaBook",
      stock: 14,
    },
    {
      name: "لپ‌تاپ گیمینگ پرو",
      slug: "gaming-laptop-pro",
      category: "لپ‌تاپ",
      description:
        "لپ‌تاپ گیمینگ با کارت گرافیک اختصاصی، خنک‌کننده قدرتمند و صفحه‌نمایش ۱۴۴ هرتز.",
      image: "/images/gaming-laptop.png",
      price: 72_000_000,
      brand: "ForcePC",
      stock: 7,
    },
    {
      name: "مک‌بوک پرو ۱۴ اینچ",
      slug: "macbook-pro-14",
      category: "مک‌بوک",
      description:
        "مک‌بوک پرو با نمایشگر Liquid Retina، باتری طولانی و عملکرد مناسب کارهای حرفه‌ای.",
      image: "/images/macbook.png",
      price: 95_000_000,
      brand: "Apple",
      stock: 6,
    },
    {
      name: "مک‌بوک ایر ۱۳ اینچ",
      slug: "macbook-air-13",
      category: "مک‌بوک",
      description:
        "مک‌بوک ایر فوق‌سبک با طراحی باریک، صفحه‌نمایش شفاف و باتری یک‌روزه.",
      image: "/images/macbook-air.png",
      price: 68_500_000,
      brand: "Apple",
      stock: 11,
    },
    {
      name: "گوشی هوشمند پرو",
      slug: "smartphone-pro",
      category: "گوشی",
      description:
        "گوشی هوشمند با دوربین سه‌گانه، شارژ سریع و نمایشگر AMOLED با نرخ نوسازی ۱۲۰ هرتز.",
      image: "/images/phone.png",
      price: 28_900_000,
      brand: "PixelOne",
      stock: 22,
    },
    {
      name: "آیفون ۱۶ پرو",
      slug: "iphone-16-pro",
      category: "گوشی",
      description:
        "آیفون ۱۶ پرو با بدنه تیتانیوم، دوربین پیشرفته و پردازنده قدرتمند برای عکاسی و بازی.",
      image: "/images/iphone.png",
      price: 82_000_000,
      brand: "Apple",
      stock: 10,
    },
    {
      name: "گوشی اندروید الترا",
      slug: "android-ultra",
      category: "گوشی",
      description:
        "گوشی اندروید با باتری ۵۰۰۰ میلی‌آمپر، حافظه ۱۲۸ گیگابایت و پشتیبانی از ۵G.",
      image: "/images/android-phone.png",
      price: 21_400_000,
      brand: "GalaxyX",
      stock: 28,
    },
  ] satisfies Product[],
};

export default data;
