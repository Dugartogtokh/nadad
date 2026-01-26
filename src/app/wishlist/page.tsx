'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

export default function WishlistPage() {
    const { items, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();

    const handleAddAllToCart = () => {
        items.forEach((product) => {
            addToCart(product);
        });
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-md mx-auto text-center">
                        <div className="w-32 h-32 mx-auto mb-8 bg-pink-50 rounded-full flex items-center justify-center">
                            <svg className="w-16 h-16 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Таны хүслийн жагсаалт хоосон байна</h1>
                        <p className="text-gray-500 mb-8">Дуртай бүтээгдэхүүнээ нэмж хадгалаарай!</p>
                        <Link
                            href="/products"
                            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors"
                        >
                            Дэлгүүр үзэх
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Хүслийн жагсаалт</h1>
                    <p className="text-white/80 mt-2">{items.length} бүтээгдэхүүн хадгалсан</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {/* Actions */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <button
                        onClick={handleAddAllToCart}
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Бүгдийг сагсанд нэмэх
                    </button>
                    <button
                        onClick={clearWishlist}
                        className="px-6 py-3 border border-red-500 text-red-500 font-medium rounded-xl hover:bg-red-50 transition-colors"
                    >
                        Жагсаалт цэвэрлэх
                    </button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-12 text-center">
                    <Link href="/products" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                        Дэлгүүр үргэлжлүүлэх
                    </Link>
                </div>
            </div>
        </div>
    );
}
