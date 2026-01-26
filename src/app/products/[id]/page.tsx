'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
    const params = useParams();
    const productId = params.id as string;
    const product = products.find((p) => p.id === productId);

    const [quantity, setQuantity] = useState(1);
    const [selectedImage, setSelectedImage] = useState(0);

    const { addToCart, isInCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900">Бүтээгдэхүүн олдсонгүй</h1>
                    <Link href="/products" className="mt-4 inline-block text-indigo-600 hover:text-indigo-700">
                        ← Буцах
                    </Link>
                </div>
            </div>
        );
    }

    const images = product.images || [product.image];
    const inCart = isInCart(product.id);
    const inWishlist = isInWishlist(product.id);

    const relatedProducts = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 4);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('mn-MN').format(price) + '₮';
    };

    const handleAddToCart = () => {
        addToCart(product, quantity);
    };

    const handleWishlistClick = () => {
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm">
                        <Link href="/" className="text-gray-500 hover:text-indigo-600">Нүүр</Link>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <Link href="/products" className="text-gray-500 hover:text-indigo-600">Бүтээгдэхүүн</Link>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-900 font-medium">{product.name}</span>
                    </nav>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Images */}
                    <div className="space-y-4">
                        <div className="relative aspect-square bg-white rounded-2xl overflow-hidden shadow-sm">
                            <Image
                                src={images[selectedImage]}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                priority
                            />
                            {product.discount && (
                                <span className="absolute top-4 left-4 px-4 py-2 bg-red-500 text-white font-bold rounded-full">
                                    -{product.discount}% ХЯМДРАЛ
                                </span>
                            )}
                            {product.isNew && (
                                <span className="absolute top-4 right-4 px-4 py-2 bg-green-500 text-white font-bold rounded-full">
                                    ШИНЭ
                                </span>
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        {images.length > 1 && (
                            <div className="flex gap-4">
                                {images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ${selectedImage === index ? 'ring-2 ring-indigo-600' : 'opacity-70 hover:opacity-100'
                                            }`}
                                    >
                                        <Image src={img} alt="" fill className="object-cover" sizes="80px" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <span className="text-sm text-indigo-600 font-medium uppercase tracking-wide">
                                {product.category}
                            </span>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                                {product.name}
                            </h1>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="text-gray-700 font-medium ml-2">{product.rating}</span>
                            </div>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-500">{product.reviews} үнэлгээ</span>
                            <span className="text-gray-400">|</span>
                            {product.inStock ? (
                                <span className="text-green-600 font-medium">✓ Байгаа</span>
                            ) : (
                                <span className="text-red-600 font-medium">Дууссан</span>
                            )}
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                            )}
                            {product.discount && (
                                <span className="px-3 py-1 bg-red-100 text-red-600 font-bold rounded-lg">
                                    {product.discount}% хэмнэлт
                                </span>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {product.description}
                        </p>

                        {/* Tags */}
                        {product.tags && (
                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Quantity & Actions */}
                        <div className="space-y-4 pt-4 border-t">
                            {/* Quantity */}
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700 font-medium">Тоо:</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                        </svg>
                                    </button>
                                    <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                                {product.stockCount && (
                                    <span className="text-gray-500 text-sm">
                                        ({product.stockCount} ширхэг байгаа)
                                    </span>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={inCart}
                                    className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${inCart
                                            ? 'bg-green-500 text-white cursor-default'
                                            : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                        }`}
                                >
                                    {inCart ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Сагсанд байна
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            Сагсанд нэмэх
                                        </span>
                                    )}
                                </button>
                                <button
                                    onClick={handleWishlistClick}
                                    className={`w-14 h-14 flex items-center justify-center rounded-xl transition-all ${inWishlist
                                            ? 'bg-pink-500 text-white'
                                            : 'bg-gray-100 text-gray-600 hover:bg-pink-500 hover:text-white'
                                        }`}
                                >
                                    <svg className="w-6 h-6" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Quick Info */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <span className="text-2xl">🚚</span>
                                    <div>
                                        <p className="font-medium text-gray-900">Үнэгүй хүргэлт</p>
                                        <p className="text-sm text-gray-500">100,000₮-с дээш</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                    <span className="text-2xl">🔄</span>
                                    <div>
                                        <p className="font-medium text-gray-900">14 хоног буцаалт</p>
                                        <p className="text-sm text-gray-500">Хялбар буцаалт</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Төстэй бүтээгдэхүүн</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
