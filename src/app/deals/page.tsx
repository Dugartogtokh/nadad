'use client';

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types';

// Mock data for deals
const dealProducts: Product[] = [
    {
        id: '1',
        name: 'Sony WH-1000XM5 Wireless Headphones',
        price: 899900,
        originalPrice: 1299900,
        description: 'Noise cancelling headphones',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500',
        category: 'Electronics',
        rating: 4.8,
        reviews: 124,
        isNew: false,
        discount: 30,
        stockCount: 5
    },
    {
        id: '2',
        name: 'MacBook Air M2',
        price: 3499900,
        originalPrice: 3999900,
        description: 'Apple M2 chip',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=500',
        category: 'Electronics',
        rating: 4.9,
        reviews: 89,
        isNew: true,
        discount: 12,
        stockCount: 8
    },
    {
        id: '3',
        name: 'Nike Air Jordan 1',
        price: 450000,
        originalPrice: 650000,
        description: 'Classic sneakers',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=500',
        category: 'Fashion',
        rating: 4.7,
        reviews: 215,
        isNew: false,
        discount: 30,
        stockCount: 15
    },
    {
        id: '4',
        name: 'Smart Watch Series 8',
        price: 1200000,
        originalPrice: 1500000,
        description: 'Advanced health features',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=500',
        category: 'Electronics',
        rating: 4.6,
        reviews: 56,
        isNew: true,
        discount: 20
    }
];

export default function DealsPage() {
    return (
        <main className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-semibold text-sm mb-4">
                        🔥 Онцгой хямдрал
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Хямдралтай бүтээгдэхүүнүүд</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Зөвхөн танд зориулсан онцгой хямдралтай, хязгаарлагдмал тоотой бүтээгдэхүүнүүд.
                    </p>
                </div>

                {/* Deals Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dealProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Value Props */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gray-50 rounded-3xl p-12">
                    <div className="p-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                            🚚
                        </div>
                        <h3 className="text-xl font-bold mb-2">Үнэгүй хүргэлт</h3>
                        <p className="text-gray-600">100,000₮-с дээш захиалга хийгээд хүргэлтээ үнэгүй аваарай</p>
                    </div>
                    <div className="p-4">
                        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                            🛡️
                        </div>
                        <h3 className="text-xl font-bold mb-2">Баталгаат чанар</h3>
                        <p className="text-gray-600">Бид зөвхөн албан ёсны эрхтэй, чанартай бараа зардаг</p>
                    </div>
                    <div className="p-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                            🎁
                        </div>
                        <h3 className="text-xl font-bold mb-2">Бэлэгтэй захиалга</h3>
                        <p className="text-gray-600">Тогтмол үйлчлүүлэгч бүрт онцгой бэлэг, урамшуулалтай</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
