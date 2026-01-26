import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { products, categories, featuredProducts, discountedProducts } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE1IDAgNi4xMjUtLjgxIDguNjktMi4yMyIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                🎉 Шинэ коллекц ирлээ!
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Таны хэрэгцээ<br />
                <span className="text-yellow-300">Манай зорилго</span>
              </h1>
              <p className="text-lg text-white/80 max-w-lg">
                Монголын хамгийн найдвартай онлайн дэлгүүр. Чанартай бүтээгдэхүүн, хурдан хүргэлт, баталгаат үйлчилгээ.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-yellow-300 hover:text-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                  Дэлгүүр үзэх
                </Link>
                <Link href="/deals" className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl hover:bg-white/30 transition-all border border-white/30">
                  Хямдрал 🔥
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold">50K+</p>
                  <p className="text-white/60 text-sm">Сэтгэл ханамжтай үйлчлүүлэгч</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">10K+</p>
                  <p className="text-white/60 text-sm">Бүтээгдэхүүн</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-white/60 text-sm">Дэмжлэг</p>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-pink-400/30 rounded-full blur-3xl"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {featuredProducts.slice(0, 4).map((product, index) => (
                  <div key={product.id} className={`transform ${index % 2 === 0 ? 'translate-y-8' : ''}`}>
                    <div className="bg-white rounded-2xl p-4 shadow-2xl">
                      <div className="relative aspect-square rounded-xl overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="200px"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-gray-800 truncate">{product.name}</p>
                      <p className="text-indigo-600 font-bold">{new Intl.NumberFormat('mn-MN').format(product.price)}₮</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">
                🚚
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Үнэгүй хүргэлт</h3>
                <p className="text-sm text-gray-500">100,000₮-с дээш</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                ✅
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Баталгаат чанар</h3>
                <p className="text-sm text-gray-500">100% жинхэнэ</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-2xl">
                🔄
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Буцаалт</h3>
                <p className="text-sm text-gray-500">14 хоногийн дотор</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-2xl">
                💳
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Аюулгүй төлбөр</h3>
                <p className="text-sm text-gray-500">Карт, QPay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Ангилал</h2>
              <p className="text-gray-500 mt-1">Хүссэн бүтээгдэхүүнээ олоорой</p>
            </div>
            <Link href="/categories" className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              Бүгдийг үзэх
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link key={category.id} href={`/products?category=${category.slug}`} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-bold text-lg">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.productCount} бүтээгдэхүүн</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Онцлох бүтээгдэхүүн</h2>
              <p className="text-gray-500 mt-1">Хамгийн их борлуулалттай</p>
            </div>
            <Link href="/products" className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              Бүгдийг үзэх
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <span className="inline-block px-4 py-2 bg-yellow-500 text-yellow-900 rounded-full text-sm font-bold">
                🔥 MEGA SALE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                50% хүртэл<br />хямдрал
              </h2>
              <p className="text-lg text-white/80">
                Өвлийн сезоны хямдрал эхэллээ! Хязгаарлагдмал хугацаанд.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold">
                    03
                  </div>
                  <p className="text-sm mt-2 text-white/60">Өдөр</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold">
                    12
                  </div>
                  <p className="text-sm mt-2 text-white/60">Цаг</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold">
                    45
                  </div>
                  <p className="text-sm mt-2 text-white/60">Минут</p>
                </div>
              </div>
              <Link href="/deals" className="inline-block px-8 py-4 bg-yellow-500 text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-105">
                Хямдралтай бүтээгдэхүүн →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {discountedProducts.slice(0, 4).map((product) => (
                <Link key={product.id} href={`/products/${product.id}`} className="group">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all">
                    <div className="relative aspect-square rounded-xl overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                      <span className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        -{product.discount}%
                      </span>
                    </div>
                    <p className="mt-2 text-white font-medium truncate">{product.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-400 font-bold">{new Intl.NumberFormat('mn-MN').format(product.price)}₮</span>
                      {product.originalPrice && (
                        <span className="text-white/50 text-sm line-through">{new Intl.NumberFormat('mn-MN').format(product.originalPrice)}₮</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Бүх бүтээгдэхүүн</h2>
              <p className="text-gray-500 mt-1">Шинээр нэмэгдсэн</p>
            </div>
            <Link href="/products" className="text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1">
              Бүгдийг үзэх
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Хямдралын мэдээлэл авах
          </h2>
          <p className="text-white/80 mb-8 max-w-md mx-auto">
            И-мейл хаягаа бүртгүүлээд шинэ бүтээгдэхүүн, хямдралын мэдээллийг хамгийн түрүүнд аваарай.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="И-мейл хаяг"
              className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="px-8 py-4 bg-yellow-500 text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 transition-all">
              Бүртгүүлэх
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
