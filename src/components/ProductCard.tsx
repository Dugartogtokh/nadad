'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart, isInCart } = useCart();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

    const inWishlist = isInWishlist(product.id);
    const inCart = isInCart(product.id);

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (inWishlist) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        addToCart(product);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('mn-MN').format(price) + '₮';
    };

    return (
        <Link href={`/products/${product.id}`} className="group">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {product.isNew && (
                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                                Шинэ
                            </span>
                        )}
                        {product.discount && (
                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                                -{product.discount}%
                            </span>
                        )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlistClick}
                        className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${inWishlist
                                ? 'bg-pink-500 text-white'
                                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-pink-500 hover:text-white'
                            }`}
                    >
                        <svg className="w-5 h-5" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>

                    {/* Quick Add Button */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <button
                            onClick={handleAddToCart}
                            disabled={inCart}
                            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${inCart
                                    ? 'bg-green-500 text-white cursor-default'
                                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                                }`}
                        >
                            {inCart ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Сагсанд байна
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Сагсанд нэмэх
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Category */}
                    <span className="text-xs text-indigo-600 font-medium uppercase tracking-wide">
                        {product.category}
                    </span>

                    {/* Name */}
                    <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-200'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Price */}
                    <div className="mt-3 flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                        )}
                    </div>

                    {/* Stock */}
                    {product.stockCount && product.stockCount < 10 && (
                        <p className="mt-2 text-sm text-orange-600">
                            Зөвхөн {product.stockCount} ширхэг үлдсэн!
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
