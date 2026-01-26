'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [sortBy, setSortBy] = useState<string>('featured');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000000]);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProducts = useMemo(() => {
        let filtered = [...products];

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter((p) => p.category === selectedCategory);
        }

        // Filter by search
        if (searchQuery) {
            filtered = filtered.filter(
                (p) =>
                    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by price
        filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Sort
        switch (sortBy) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case 'newest':
                filtered = filtered.filter((p) => p.isNew).concat(filtered.filter((p) => !p.isNew));
                break;
            default:
                filtered = filtered.filter((p) => p.featured).concat(filtered.filter((p) => !p.featured));
        }

        return filtered;
    }, [selectedCategory, sortBy, priceRange, searchQuery]);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-white">Бүх бүтээгдэхүүн</h1>
                    <p className="text-white/80 mt-2">Нийт {filteredProducts.length} бүтээгдэхүүн</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                            {/* Search */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Хайлт</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Бүтээгдэхүүн хайх..."
                                        className="w-full px-4 py-2 pl-10 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    />
                                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Ангилал</label>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setSelectedCategory('all')}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'all'
                                                ? 'bg-indigo-100 text-indigo-700 font-medium'
                                                : 'hover:bg-gray-100 text-gray-600'
                                            }`}
                                    >
                                        Бүгд
                                    </button>
                                    {categories.map((category) => (
                                        <button
                                            key={category.id}
                                            onClick={() => setSelectedCategory(category.slug)}
                                            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.slug
                                                    ? 'bg-indigo-100 text-indigo-700 font-medium'
                                                    : 'hover:bg-gray-100 text-gray-600'
                                                }`}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Sort */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Эрэмбэлэх</label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option value="featured">Онцлох</option>
                                    <option value="newest">Шинэ</option>
                                    <option value="price-low">Үнэ: Багаас их</option>
                                    <option value="price-high">Үнэ: Ихээс бага</option>
                                    <option value="rating">Үнэлгээ</option>
                                </select>
                            </div>

                            {/* Clear Filters */}
                            <button
                                onClick={() => {
                                    setSelectedCategory('all');
                                    setSortBy('featured');
                                    setSearchQuery('');
                                }}
                                className="w-full px-4 py-2 text-indigo-600 border border-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors"
                            >
                                Шүүлтүүр арилгах
                            </button>
                        </div>
                    </aside>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Бүтээгдэхүүн олдсонгүй</h3>
                                <p className="text-gray-500 mt-2">Өөр шүүлтүүр ашиглаж үзээрэй</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
